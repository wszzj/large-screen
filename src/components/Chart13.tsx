import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart13 = () => {
  const divRef = useRef(null);
  const data = [
    { value: 0.08, name: "惠山街道" },
    { value: 0.06, name: "东亭街道" },
    { value: 0.11, name: "长安街道" },
    { value: 0.09, name: "荣巷街道" },
    { value: 0.12, name: "新安街道" },
    { value: 0.06, name: "华庄街道" },
  ];
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        xAxis: {
          data: data.map((i) => i.name),
          axisTick: false,
          axisLine: {
            lineStyle: { color: "#083B70" },
          },
          axisLabel: {
            fontSize: px(12),
            formatter(value: string) {
              if (value.length > 2) {
                const list = value.split("");
                list.splice(2, 0, "\n");
                return list.join("");
              } else {
                return value;
              }
            },
          },
        },
        yAxis: {
          splitLine: { show: false },
          axisLabel: {
            fontSize: px(12),
            formatter(value: number) {
              return (value * 100).toString() + "%";
            },
          },
          axisLine: {
            show: true,
            lineStyle: { color: "#083B70" },
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        series: [
          {
            data: data.map((i) => i.value),
            type: "bar",
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#0A97FB",
              },
              {
                offset: 1,
                color: "#1E34FA",
              },
            ]),
          },
        ],
      })
    );
  });
  return <div ref={divRef} className="chart"></div>;
};
