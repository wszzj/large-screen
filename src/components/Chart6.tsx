import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";

import china from "../geo/china.json";
const colors = { 青海省: "#BB31F7", 江苏省: "#15B8FD", 四川省: "#06E1EE" };
export const Chart6 = () => {
  const divRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    // @ts-expect-error 地图JSON
    echarts.registerMap("CN", china);
    myChart.setOption(
      createEchartsOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        series: [
          {
            type: "map",
            map: "CN",
            data: [{ name: "江苏省", value: 1 }],
            label: { show: false, color: "white" },
            itemStyle: {
              areaColor: "#010D3D",
              color: colors["江苏省"],
              borderColor: "#01A7F7",
            },
            emphasis: {
              label: { color: "white" },
              areaColor: "#5470C6",
            },
          },
          {
            type: "map",
            map: "CN",
            data: [{ name: "四川省", value: 50 }],
            itemStyle: {
              areaColor: "#010D3D",
              color: colors["四川省"],
              borderColor: "#01A7F7",
            },
            emphasis: {
              label: { color: "white" },
              areaColor: "#5470C6",
            },
          },
          {
            type: "map",
            map: "CN", // 自定义扩展图表类型
            data: [{ name: "青海省", value: 100 }],
            itemStyle: {
              areaColor: "#010D3D",
              color: colors["青海省"],
              borderColor: "#01A7F7",
            },
            emphasis: {
              label: { color: "white" },
              areaColor: "#5470C6",
            },
          },
        ],
      })
    );
  }, []);

  return (
    <div className="bordered nativePlace">
      <h2>全市犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart" />
        <div className="legend bordered">
          <span className="icon" style={{ background: colors["江苏省"] }} />
          江苏籍
          <span className="icon" style={{ background: colors["四川省"] }} />
          四川籍
          <span className="icon" style={{ background: colors["青海省"] }} />
          青海籍
        </div>
      </div>
    </div>
  );
};
