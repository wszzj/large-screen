import "./home.scss";
import headerBg from "../images/header.png";
import { Chart1 } from "../components/Chart1";
import { Chart2 } from "../components/Chart2";
import { Chart3 } from "../components/Chart3";
import { Chart4 } from "../components/Chart4";
import { Chart5 } from "../components/Chart5";

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
          <section className="bordered section4"></section>
          <section className="bordered section5"></section>
        </main>
        <footer>&copy; {year}年 大屏监控</footer>
      </div>
    </div>
  );
};
