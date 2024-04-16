import { useState } from "react";

interface Options {
  initialValue?: number;
}

export const useCounter = ({ initialValue = 0 }: Options) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const increaseBy = (value: number) => {
    setCounter(counter + value);
  };

  return {
    // properties
    counter,

    //Methods
    increaseBy,
    // setCounter,
    // decreaseBy,
  };
};
