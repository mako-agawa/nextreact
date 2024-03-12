import "src/styles/globals.css";

import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightBlue();

  return (
    <div>
      <Component {...pageProps} {...counter} {...inputArray} />
    </div>
  );
}

export default MyApp;
