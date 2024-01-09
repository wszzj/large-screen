import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart2 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        legend: {
          data: ["2021年", "2022年"],
          bottom: 0,
          textStyle: {
            color: "white",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: px(40),
          top: px(40),
          right: px(40),
          bottom: px(40),
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: { show: false },
          axisLabel: { show: false },
        },
        yAxis: {
          type: "category",
          data: [
            "城关区公安局",
            "七里河区公安局",
            "西固区公安局",
            "安宁区公安局",
            "红古区公安局",
            "永登县公安局",
            "皋兰县公安局",
            "榆中县公安局",
            "新区公安局",
          ],
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
            data: [10, 29, 24, 100, 17, 30, 80, 40, 31],
            itemStyle: {
              normal: {
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
          },
          {
            name: "2022年",
            type: "bar",
            data: [11, 30, 25, 101, 18, 31, 81, 41, 32],
            itemStyle: {
              normal: {
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
          },
        ],
      })
    );
  }, []);
  return (
    <div className="ranking bordered">
      <h2>破获案件排名</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
