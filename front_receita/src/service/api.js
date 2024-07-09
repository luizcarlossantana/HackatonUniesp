import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export async function entrar(data) {
    try {
      const response = await api.post('/usuario/login', data);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
  }

 // Certifique-se de importar o Axios se ainda não estiver importado

  export function criarVoto(obj) {
    return axios.post(`http://localhost:8080/usuario/login`, obj)
      .then(response => {
        return response; // Retorna apenas os dados da resposta
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
        throw new Error('Ocorreu um erro ao processar a requisição. Por favor, tente novamente.'); // Lança um novo erro para ser capturado externamente
      });
  }
  export function getApiSport() {
    return axios.get(`https://hackathon.marjosports.com.br/hackathon`, {
      headers: {
        'api-key': 'HACKATON_UNIESP_MARJO_2024'
      }
    })
    .then(response => {
      return response.data; // Retorna apenas os dados da resposta
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
      throw new Error('Ocorreu um erro ao processar a requisição. Por favor, tente novamente.'); // Lança um novo erro para ser capturado externamente
    });
  }
  