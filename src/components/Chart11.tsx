import { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";
export const Chart11 = () => {
  const divRef = useRef(null);
  const colors = ["#F46064", "#F38E1C", "#1CDB7C", "#8D70F8", "#33A4FA"];
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        color: colors,
        xAxis: { show: false },
        yAxis: { show: false },
        legend: { show: false },
        series: [
          {
            startAngle: -20,
            type: "pie",
            radius: ["25%", "90%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "outside",
              color: "white",
              fontSize: px(20),
              distanceToLabelLine: 0,
              formatter(options: { value: number; name: string }) {
                return (options.value * 100).toFixed(0).toString() + "%";
              },
            },
            labelLine: { show: true, length: 0 },
            roseType: "area",
            itemStyle: {
              shadowBlur: px(200),
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
            data: [
              { value: 0.16, name: "刑事案件" },
              { value: 0.32, name: "民事案件" },
              { value: 0.28, name: "经济案件" },
              { value: 0.24, name: "其他案件" },
            ],
          },
        ],
      })
    );
  });

  return (
    <div className="level1">
      <div className="chart">
        <div className="main" ref={divRef} />
      </div>
      <div className="legend">
        <span style={{ background: colors[0] }} />
        刑事
        <span style={{ background: colors[1] }} />
        民事
        <span style={{ background: colors[2] }} />
        经济
        <span style={{ background: colors[3] }} />
        其他
      </div>
    </div>
  );
};
