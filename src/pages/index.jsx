import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const Home = (props) => {
  // const {
  //   count,
  //   isShow,
  //   text,
  //   array,
  //   handleClick,
  //   handleDisplay,
  //   handleChandge,
  //   handleAdd,
  // } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {props.isShow ? <h2>{props.count}</h2> : null}
      <button onClick={props.handleDisplay}>{props.isShow ? "非表示" : "表示"}</button>

      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleAdd}>追加</button>
      <input type="text" value={props.text} onChange={props.handleChandge} />
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
}
export default Home;