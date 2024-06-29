import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export async function entrar(data) {
    try {
      const response = await api.post('/usuario/login', data);
      console.log(response);
      return response;
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
  }