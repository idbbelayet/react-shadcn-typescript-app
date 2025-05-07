import axios from "../api/axios";

const secureDataservice = {
  getMessage: async (token: any) => {
    console.log("Token from Redux store:", token); // Log the token to verify it's being retrieved correctly
    return await axios
      .get("/SecureData/admin", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("SecureData response:", response);
        return response.data;
      })
      .catch((error) => {
        console.log("Error fetching secure data:", error);
        throw error; // Rethrow the error to be handled by the caller
      });

    // return response.data;
  },
};

export default secureDataservice;
