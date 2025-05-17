import React, { useContext } from "react";
import { counterContext } from "../context/Context";
import Comp from "./Comp";

function Button() {
  const count = useContext(counterContext);
  return (
    <>
      <Comp />
      <button onClick={() => count.setCount((count) => count + 1)}>Click Me</button>
    </>
  );
}                                                       

export default Button;
