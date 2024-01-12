import { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";
export const Chart7 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        color: ["#8D70F8", "#33A4FA"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          bottom: 0,
          itemHeight: px(18),
          itemWidth: px(28),
          textStyle: {
            color: "#fff",
          },
        },
        xAxis: { show: false },
        yAxis: { show: false },

        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["70%", "85% "],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "inside",
              textStyle: { color: "white", fontSize: px(20) },
              formatter(options: { value: number; name: string }) {
                return options.value * 100 + "%";
              },
            },
            labelLine: { show: false },
            itemStyle: {
              borderColor: "#0F113A",
              borderWidth: px(4),
            },
            data: [
              { value: 0.2, name: "女" },
              { value: 0.8, name: "男" },
            ],
          },
        ],
      })
    );
  }, []);
  return (
    <div className="level1">
      <div className="main" ref={divRef} />
      <div className="text">性别</div>
    </div>
  );
};
