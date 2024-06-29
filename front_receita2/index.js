// Exemplo de requisição POST usando Axios em script.js
function criarDoacao(){
    const obj = {
        cpf: '12345678910',
        valor:10,
        app_name:"TesteMelhorApi"

    };
    
    axios.post('https://hackathon.marjosports.com.br/hackathon', obj, {
        headers: {
            'api-key':"HACKATON_UNIESP_MARJO_2024",
            
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        const tokenGeral = response.data.token;
        console.log('Token:', tokenGeral);
        // Outras ações após a requisição bem-sucedida
    })
    .catch(error => {
        console.error('Erro ao fazer requisição:', error);
        // Tratamento de erros
    });
    
}