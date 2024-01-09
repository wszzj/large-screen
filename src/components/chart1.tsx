import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
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
      })
    );
  }, []);
  return (
    <div className="statistics bordered">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
