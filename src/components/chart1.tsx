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
            "梁溪区",
            "锡山区",
            "惠山区",
            "滨湖区",
            "新吴区",
            "经济开发区",
          ],

          axisTick: false,
          axisLine: {
            show: true,
            lineStyle: { color: "#083B70" },
          },
          axisLabel: {
            interval: 0,
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
            name: "数量",
            data: [12, 20, 10, 8, 27, 11],
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
