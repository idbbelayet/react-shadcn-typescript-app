import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

function Cart() {
  console.log("Cart");
  const counterValue = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="flex gap-2 text-lg font-semibold">
      <span> Current Count:</span>
      <span>{counterValue}</span>
    </div>
  );
}

export default Cart;
