import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef<echarts.ECharts | null>(null);
  const data = [
    { name: "城关区公安局", 2021: 2, 2022: 3 },
    { name: "七里河区公安局", 2021: 2, 2022: 3 },
    { name: "西固区公安局", 2021: 25, 2022: 3 },
    { name: "安宁区公安局", 2021: 2, 2022: 3 },
    { name: "红古区公安局", 2021: 2, 2022: 3 },
    { name: "永登县公安局", 2021: 2, 2022: 3 },
    { name: "皋兰县公安局", 2021: 2, 2022: 3 },
    { name: "榆中县公安局", 2021: 2, 2022: 3 },
    { name: "新区公安局", 2021: 2, 2022: 3 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: "城关区公安局", 2021: 2, 2022: Math.random() * 10 },
        { name: "七里河区公安局", 2021: 2, 2022: 3 },
        { name: "西固区公安局", 2021: 2, 2022: 3 },
        { name: "安宁区公安局", 2021: 12, 2022: 3 },
        { name: "红古区公安局", 2021: 2, 2022: 3 },
        { name: "永登县公安局", 2021: 2, 2022: 3 },
        { name: "皋兰县公安局", 2021: 2, 2022: 3 },
        { name: "榆中县公安局", 2021: 2, 2022: 3 },
        { name: "新区公安局", 2021: 2, 2022: 3 },
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
          bottom: 0,
          textStyle: {
            color: "white",
          },
        },
        grid: {
          top: px(20),
          left: px(40),
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
            data: data.map((i) => i[2021]),
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
