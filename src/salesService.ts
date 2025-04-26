// src/services/salesService.js

import axios from "axios";

const BASE_URL = "https://localhost:44317/api/sales";

const salesService = {
  // GET all sales
  getAll: async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
};

export default salesService;
