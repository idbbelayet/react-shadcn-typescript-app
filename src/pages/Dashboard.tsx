import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

export default function Dashboard() {
  const [count, setCount] = useState(0);
  const [mean, setMean] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    if (count % 2) {
      setMean(mean + 1);
    }
  };
  const currentTime = useMemo(() => new Date().getMilliseconds(), [mean]);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        quisquam commodi, sed quo itaque modi error, voluptatem enim temporibus
        iusto laboriosam minus pariatur nostrum excepturi, dolor praesentium!
        Velit, sunt modi!
      </p>
      <div>Count: {count}</div>
      <div>{currentTime}</div>
      <div className="flex gap-2 mt-4 mb-4">
        <Button onClick={handleClick}>useMemo</Button>
      </div>
    </div>
  );
}
