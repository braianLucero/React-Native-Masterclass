import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(10);

  const increaseBy = (value: number) => {
    setCounter(counter + value);
  };
  const decreaseBy = (value: number) => {
    setCounter(counter - value);
  };
  return (
    <>
      <h3>
        Contador : <small>{counter}</small>
      </h3>
      <div>
        <button onClick={() => increaseBy(1)}>+1</button>
        &nbsp;
        <button onClick={() => decreaseBy(1)}>-1</button>
      </div>
    </>
  );
};
