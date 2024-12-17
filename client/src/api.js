import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export const submitLead = async (name, email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/submit-lead`, { name, email });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Network error" };
  }
};
