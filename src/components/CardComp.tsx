import { useState } from "react";
import { Button } from "./ui/button";

function CardComp() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </>
  );
}
export default CardComp;
