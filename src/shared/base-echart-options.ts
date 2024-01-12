import { px } from "./px";
export const baseEchartOptions = {
  title: { show: false },
  legend: { show: false },
  grid: {
    top: px(20),
    left: px(40),
    right: px(20),
    bottom: px(40),
  },
  textStyle: {
    fontSize: px(12),
    color: "#79839e",
  },
};
