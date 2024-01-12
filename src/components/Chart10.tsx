import { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
export const Chart10 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({}));
  }, []);
  return (
    <div className="level1">
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
