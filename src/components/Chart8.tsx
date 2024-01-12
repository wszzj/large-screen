import { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";
export const Chart8 = () => {
  const divRef = useRef(null);
  const colors = ["#856BED", "#F46064", "#F38E1C", "#1CDB7C", "#33A4FA"];
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        color: colors,
        tooltip: {
          trigger: "item",
        },

        xAxis: { show: false },
        yAxis: { show: false },

        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["75%", "90% "],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "inside",
              color: "white",
              fontSize: px(20),
              formatter(options: { value: number; name: string }) {
                return (options.value * 100).toFixed(0).toString() + "%";
              },
            },
            labelLine: { show: false },
            itemStyle: {
              borderColor: "#0F113A",
              borderWidth: px(4),
            },
            data: [
              { value: 0.07, name: "10-20" },
              { value: 0.1, name: "21-30" },
              { value: 0.23, name: "31-40" },
              { value: 0.28, name: "41-50" },
              { value: 0.32, name: "51-60" },
            ],
          },
        ],
      })
    );
  }, []);
  return (
    <div className="level2">
      <div className="chart">
        <div className="main" ref={divRef} />
        <div className="text">年龄段</div>
      </div>
      <div className="legend">
        <span style={{ background: colors[0] }} />
        10-20
        <span style={{ background: colors[1] }} />
        21-30
        <span style={{ background: colors[2] }} />
        31-40
        <span style={{ background: colors[3] }} />
        41-50
        <span style={{ background: colors[4] }} />
        51-60
      </div>
    </div>
  );
};
