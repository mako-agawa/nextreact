import "src/styles/globals.css";

import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgColor } from "src/hooks/useBgColor";

function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  return (
    <div>
      <Component {...pageProps} {...counter} {...inputArray} />
    </div>
  );
}

export default MyApp;
