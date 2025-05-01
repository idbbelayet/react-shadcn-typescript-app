import axios from "../api/axios";

const secureDataservice = {
  getMessage: async () => {
    const token = sessionStorage.getItem("token");

    return await axios
      .get("SecureData/admin", {
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
