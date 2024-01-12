import "./home.scss";
import headerBg from "../images/header.png";
import { Chart1 } from "../components/Chart1";
import { Chart2 } from "../components/Chart2";
import { Chart3 } from "../components/Chart3";
import { Chart4 } from "../components/Chart4";
import { Chart5 } from "../components/Chart5";
import { Chart6 } from "../components/Chart6";
import { Chart7 } from "../components/Chart7";
import { Chart8 } from "../components/Chart8";
import { Chart9 } from "../components/Chart9";
import { Chart10 } from "../components/Chart10";
import { Chart11 } from "../components/Chart11";
import { Chart12 } from "../components/Chart12";

export const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <div className="home">
        <header style={{ backgroundImage: `url(${headerBg})` }}></header>
        <main>
          <section className="section1">
            <Chart1 />
            <Chart2 />
          </section>
          <section className="section2">
            <Chart3 />
            <Chart4 />
          </section>
          <section className="bordered section3">
            <Chart5 />
          </section>
          <section className="section4">
            <Chart6 />
            <div className="bordered ages">
              <h2>犯罪人员年龄段分布</h2>
              <div className="charts">
                <Chart7 />
                <Chart8 />
                <Chart9 />
              </div>
            </div>
          </section>
          <section className="section5">
            <div className="bordered row1">
              <h2>案情类型统计</h2>
              <div className="charts">
                <Chart10 />
                <Chart11 />
              </div>
            </div>
            <div className="bordered row2">
              <h2>案件街道统计</h2>
              <div className="charts">
                <Chart12 />
                <Chart10 />
              </div>
            </div>
            <div className="bordered row3">
              <h2>作案手段分析</h2>
              <div className="charts">
                <Chart10 />
                <Chart11 />
              </div>
            </div>
          </section>
        </main>
        <footer>&copy; {year}年 大屏监控</footer>
      </div>
    </div>
  );
};
