import { decrement, increment, incrementByAmount } from "@/redux/counterSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";

function Counter() {
  const dispatch = useDispatch<AppDispatch>();
  const counterValue = useSelector((state: RootState) => state.counter.value);
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((x) => x+1);
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByAmount = (amount: number) => {
    dispatch(incrementByAmount(amount));
  };
  useEffect(() => {
    setDate(new Date());
  }, [count]);
  return (
    <>
      <div className="text-2xl mb-2 font-bold">Example of Redux-toolkit:</div>
      <p>
        When click on increament button dispatch action to redux store and using
        useSlector show stored data in bell icon badge and counter current value
      </p>
      <div className="text-xl font-semibold mt-5">
        <span className=" mr-3">Counter current value from Redux store:</span>
        <span className="">{counterValue}</span>
        <br />
        <span className="mt-5">Time: {date.toLocaleTimeString()}</span>
      </div>
      <div className="flex gap-2 mt-5">
        <Button onClick={handleIncrement}>Increament</Button>
        <Button onClick={handleDecrement}>Decreament</Button>
        <Button onClick={() => handleIncrementByAmount(10)}>
          Increament By 10
        </Button>
      </div>
    </>
  );
}

export default Counter;
