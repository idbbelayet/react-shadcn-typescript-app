import axios from "../api/axios";

type SalesData = {
  salesId?: number;
  salesDate: Date;
  product: string;
  amount: number;
};
const salesService = {
  // GET all sales
  getAll: async () => {
    const response = await axios.get("sales");
    return response.data;
  },

  // GET a sale by ID
  getById: async (id: number) => {
    const response = await axios.get(`sales/${id}`);
    return response.data;
  },

  // POST: create a new sale
  create: async (salesData: SalesData) => {
    //console.log(salesData);
    const response = await axios.post("sales", salesData);
    console.log(response.data);
    return response.data;
  },

  // PUT: update an existing sale
  update: async (id: number, salesData: SalesData) => {
    const response = await axios.put(`sales/${id}`, salesData);
    return response.data;
  },

  // DELETE a sale
  delete: async (id: number) => {
    const response = await axios.delete(`sales/${id}`);
    return response.data;
  },
};

export default salesService;
