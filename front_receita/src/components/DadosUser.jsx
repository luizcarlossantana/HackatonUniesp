import axios from 'axios';
import { useState } from 'react';

const DadosUser = () => {
  const [dados, setDados] = useState([]);
  const cpf = JSON.parse(localStorage.getItem('user'))?.cpf || '';

  // Função para fazer a requisição GET usando o proxy configurado
  const getApiSport = async () => {
    try {

       

      const response = await axios.get('https://hackathon.marjosports.com.br/hackathon', {
        params: { cpf: cpf },
        headers: {
            'api-key': 'HACKATON_UNIESP_MARJO_2024',
             'Origin': 'http://192.168.103.147:5173'
          }
      });
      setDados(response.data);
    } catch (error) {
      console.error('Erro na requisição:', error);
      // Tratar o erro, se necessário
    }
  };

  const handleButtonClick = () => {
    getApiSport(); // Chama a função assíncrona dentro de um handler
  };

  return (
    <div className="container mt-5">
      <button onClick={handleButtonClick} className='btn btn-outline-secondary mb-3'>Buscar suas Doações</button>
      <h3>Dados do Usuário</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>CPF</th>
            <th>Valor</th>
            <th>Nome do Aplicativo</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.cpf}</td>
              <td>{item.valor}</td>
              <td>{item.app_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DadosUser;
