"use client";

import { useState } from "react";

export function UseClientButton() {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount((oldCount) => oldCount + 1);
    console.log("COUNT:", count);
  };

  return (
    <div>
      <p>CLICADO: {count}</p>
      <button onClick={handleOnClick}>Incrementar</button>
    </div>
  );
}
