import axios from "@/api/axios";

const appresourceService = {
  getAll: async () => {
    const response = await axios.get("Appresource");
    return response.data;
  },
};

export default appresourceService;
