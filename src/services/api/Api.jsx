import axios from "axios";


const API_URL = "https://fakestoreapi.com/products"


export const getTodos = async () => {
    try {
      const response = await axios.get(`${API_URL}/todos`);
      return response.data; // Retorna os dados da resposta
    } catch (error) {
      console.error("Error fetching todos:", error);
      throw error; // Lança o erro para ser tratado pelo chamador
    }
  };

export const createTodo = async (todoData) => {
    try {
      const response = await axios.post(`${API_URL}/todos`, todoData);
      return response.data; // Retorna os dados da resposta
    } catch (error) {
      console.error("Error creating todo:", error);
      throw error; // Lança o erro para ser tratado pelo chamador
    }
  };