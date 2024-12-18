import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

 // Handles POST request to the backend API with form data
export const submitLead = async (name, email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/submit-lead`, { name, email });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Network error" };
  }
};
