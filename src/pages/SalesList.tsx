import { useEffect, useState } from "react";

function SalesList() {
  const [sales, setSales] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchSales = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/sales"); // Adjust the API endpoint as needed
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSales(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSales();
  }, []);

  return <div>SalesList</div>;
}

export default SalesList;
