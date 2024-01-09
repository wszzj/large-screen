import "./home.scss";
import headerBg from "../images/header.png";
import { Chart1 } from "../components/Chart1";
import { Chart2 } from "../components/Chart2";

export const Home = () => {
  return (
    <div className="App">
      <div className="home">
        <header style={{ backgroundImage: `url(${headerBg})` }}></header>
        <main>
          <section className="section1">
            <Chart1 />
            <Chart2 />
          </section>
          <section className="section2"></section>
          <section className="bordered section3"></section>
          <section className="bordered section4"></section>
          <section className="bordered section5"></section>
        </main>
      </div>
    </div>
  );
};
