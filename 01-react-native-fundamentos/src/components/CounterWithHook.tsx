import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const { increaseBy, counter } = useCounter({ initialValue: 5 });

  return (
    <>
      <h3>
        Contador : <small>{counter}</small>
      </h3>
      <div>
        <button onClick={() => increaseBy(1)}>+1</button>
        &nbsp;
        {/* <button onClick={() => decreaseBy(-1)}>-1</button> */}
      </div>
    </>
  );
};
