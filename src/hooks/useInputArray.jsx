import { useCallback, useState } from "react";

export const useInputArray = () => {
  //独自フック
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChandge = useCallback((e) => {
    if (e.target.value.length >= 6) {
      alert("5文字以内にしておいて");
      return;
    }
    setText(e.target.value.trim());
    console.log(text);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素がすでに存在しています");
        return prevArray;
      }
      const newArray = [...prevArray, text];
      return newArray;
    });
  }, [text]);

  return { text, array, handleChandge, handleAdd };
};