import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart10 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        xAxis: {
          data: ["入室抢劫", "当街偷盗", "团伙诈骗", "刑事案件", "民事案件"],
          axisTick: false,
          axisLine: {
            lineStyle: { color: "#083B70" },
          },
          axisLabel: {
            interval: 0,
            fontSize: px(12),
            axisLine: {
              show: true,
              lineStyle: { color: "#083B70" },
            },
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
            data: [12, 20, 10, 8, 27, 11, 13, 25, 6],
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
  }, []);
  return <div ref={divRef} className="chart"></div>;
};
