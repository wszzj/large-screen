import { Link } from "react-router-dom";
import { px } from "../shared/px";
export const Config = () => {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: px(100),
      }}
    >
      <div style={{ fontSize: px(40) }}>配置页面</div>
      <Link to="/" style={{ fontSize: px(24) }}>
        返回首页
      </Link>
    </div>
  );
};
