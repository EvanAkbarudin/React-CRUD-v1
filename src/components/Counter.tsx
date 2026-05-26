import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, handleDecrement, handleIncrement, reset } = useCounter();

  return (
    <div className="flex flex-row max-w-md justify-center items-center mx-auto mt-100">
      <button onClick={handleDecrement} className="mr-4 border-amber-300 bg-amber-200 border-2 rounded-lg px-4 py-2 cursor-pointer">
        Decrement
      </button>
      <h2 className="counter-title">Counter: {count}</h2>
      <button onClick={handleIncrement} className="ml-4 border-amber-300 bg-amber-200 border-2 rounded-lg px-4 py-2 cursor-pointer">
        Increment
      </button>
      <button onClick={reset} className="ml-4 border-amber-300 bg-amber-200 border-2 rounded-lg px-4 py-2 cursor-pointer">
        Reset
      </button>
    </div>
  );
};

export default Counter;
