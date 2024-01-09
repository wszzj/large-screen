import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import pageWidth from "../lib/pageWidth";

const px = (n: number) => {
  return (n / 2420) * pageWidth;
};
export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      textStyle: { fontSize: px(12), color: "#79839e" },
      xAxis: {
        data: [
          "兰州新区",
          "2兰州新区",
          "3兰州新区",
          "4兰州新区",
          "5兰州新区",
          "6兰州新区",
          "7",
          "8",
          "9",
        ],
        axisTick: false,
        axisLabel: {
          fontSize: px(6),
          formatter(value: string) {
            if (value.length > 2) {
              const list = value.split(" ");
              list.splice(2, 0, "\n");
              return list.join("");
            } else {
              return value;
            }
          },
        },
      },
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      yAxis: {
        splitLine: { show: false },
        axisLabel: {
          fontSize: 6,
        },
        axisLine: {
          show: true,
          lineStyle: { color: "#083B70" },
        },
      },
      series: [
        {
          data: [12, 20, 10, 8, 27, 11, 13, 25, 6],
          type: "bar",
        },
      ],
    });
  });
  return (
    <div className="statistics bordered">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
