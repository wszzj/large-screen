import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef<echarts.ECharts | null>(null);
  const data = [
    { name: "梁溪公安局", 2021: 12, 2022: 23 },
    { name: "锡山公安局", 2021: 23, 2022: 34 },
    { name: "惠山公安局", 2021: 5, 2022: 23 },
    { name: "滨湖公安局", 2021: 18, 2022: 13 },
    { name: "新吴公安局", 2021: 42, 2022: 30 },
    { name: "经开公安局", 2021: 32, 2022: 15 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: "梁溪公安局", 2021: 22, 2022: 30 },
        { name: "锡山公安局", 2021: 12, 2022: 18 },
        { name: "惠山公安局", 2021: 15, 2022: 30 },
        { name: "滨湖公安局", 2021: 20, 2022: 14 },
        { name: "新吴公安局", 2021: 33, 2022: 24 },
        { name: "经开公安局", 2021: 14, 2022: 43 },
      ];
      createChart(newData);
    }, 1000);
  }, []);
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    createChart(data);
  });
  const createChart = (
    data: { name: string; 2021: number; 2022: number }[]
  ) => {
    myChart.current?.setOption(
      createEchartsOptions({
        legend: {
          data: ["2021年", "2022年"],
          bottom: px(8),
          itemWidth: px(36),
          itemHeight: px(20),
          textStyle: {
            color: "white",
          },
        },
        grid: {
          top: px(20),
          left: px(60),
          right: px(20),
          bottom: px(40),
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: { show: false },
          axisLabel: { show: false },
        },
        yAxis: {
          type: "category",
          axisTick: false,
          data: data.map((i) => i.name),
          axisLabel: {
            formatter(value: string) {
              return value.replace("公安局", "\n公安局");
            },
          },
        },
        series: [
          {
            name: "2021年",
            type: "bar",
            data: data.map((i) => i[2021]),
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#2034f9",
                },
                {
                  offset: 1,
                  color: "#04a1ff",
                },
              ]),
            },
          },
          {
            name: "2022年",
            type: "bar",
            data: data.map((i) => i[2022]),
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#b92ae8",
                },
                {
                  offset: 1,
                  color: "#6773e7",
                },
              ]),
            },
          },
        ],
      })
    );
  };

  return (
    <div className="ranking bordered">
      <h2>破获案件排名</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
