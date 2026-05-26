import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return { count, handleDecrement, handleIncrement, reset };
};

export default useCounter;
