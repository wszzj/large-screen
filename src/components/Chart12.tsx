import { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";
export const Chart12 = () => {
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
        xAxis: { show: false },
        yAxis: { show: false },
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          containLabel: true,
        },
        legend: {
          orient: "vertical",
          left: "left",
          top: "center",
          textStyle: {
            color: "white",
          },

          itemWidth: px(12),
          itemHeight: px(12),
          formatter(name: string) {
            let value = data.find((i) => {
              return i.name === name;
            })?.value;
            if (value) {
              value = value * 100;
            }
            return name + " " + value + "%";
          },
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            center: ["60%", "50%"],
            type: "pie",
            radius: "80%",
            label: { show: false },
            labelLine: { show: false },
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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
    </div>
  );
};
