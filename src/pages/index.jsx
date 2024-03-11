import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

const handleDisplay = useCallback(() => {
  setIsShow((isShow) => !isShow); 
}, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);


const handleChandge = useCallback((e) => {
  if(e.target.value.length >= 6){
    alert("5文字以内にしておいて");
    return;
  }
  setText(e.target.value.trim());
  console.log(text);
},[])

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleDisplay}>
      {isShow ? "非表示" : "表示"}
        </button>
      <button onClick={handleClick}>ボタン</button>
      <input
        type="text"
        value={text}
        onChange= {handleChandge}
      />
      <Main page="index" />
      <Footer />
    </div>
  );
} 
