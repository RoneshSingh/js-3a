import { useState } from "react";

import "../assets/style/Counter.css";

function Counter({ value }: any) {
  const [count, setCount] = useState<number>(value);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-div">
      <h1 className="counter-h1">Counter: {count}</h1>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
