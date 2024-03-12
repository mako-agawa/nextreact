import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

export default function Home(props) {
  const {
    count,
    isShow,
    text,
    array,
    handleClick,
    handleDisplay,
    handleChandge,
    handleAdd,
  } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleAdd}>追加</button>
      <input type="text" value={text} onChange={handleChandge} />
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
}
