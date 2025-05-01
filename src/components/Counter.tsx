import { useEffect, useRef, useState } from "react";
import secureDataservice from "../services/secureDataservice";
import { Button } from "./ui/button";
function Counter() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [call, setCall] = useState(0);
  const isFirstRender = useRef(true);
  const handleClick = () => {
    getProtectedData();
  };
  const getProtectedData = async () => {
    try {
      setCall(call + 1);
      setLoading(true);
      const response = await secureDataservice.getMessage();
      setMessage(response.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (isFirstRender.current) {
      console.log("First render, skipping API call.");
      isFirstRender.current = false;
      return; // skip the first extra effect
    }
    getProtectedData();
  }, []);

  return (
    <>
      <p>API Called:{call}</p>
      {loading && <p>Loading...</p>}
      <p className="mb-5">Secure Message text: {message}</p>
      <Button variant="default" onClick={handleClick}>
        Call Secure API
      </Button>
    </>
  );
}

export default Counter;
