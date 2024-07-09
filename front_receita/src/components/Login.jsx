import { useState } from 'react';
import { Link } from 'react-router-dom';
import { criarVoto, entrar } from '../service/api';


const Login = () => {
  
    const [usuarioname, setUsuarioname] = useState("");
    const [password, setPassword] = useState("");
  
    const handleName = (e) => {
      setUsuarioname(e.target.value);
    };
    const handlePassword = (e) => {
      setPassword(e.target.value);
    };
  
    function  handleSubmit(){
  
      const data = {
        usuarioname,
        password
      }
  
      
      
      console.log(data);
      

      
   
         criarVoto(data).then(response =>{ response
            if(response.status === 200){
                localStorage.setItem('user',JSON.stringify(response.data))
                window.alert("logado com sucesso!");
                window.location.href = "/pagina"
              }

         }).catch( )
       

       
         
        
      
  
    }
  return (
    <div className="container pt-5 pb-5 "> {/* Adicionando margem superior (mt-5) e inferior (mb-5) */}
     

      
      
      <div className="d-flex shadow">
        <div className="col-md-6 gradient-background  pt-5 pb-5 rounded-start " >
          <div className="logo d-flex " style={{ justifyContent: 'center', alignItems: 'center'}}>
            <img src='logoReceitaWhite.svg' alt="logo da Receita Federal" className="img-fluid" style={{ width: '400px', height: 'auto' }}/>
          </div>
        </div>
        <div className="col-md-6  pt-5 pb-5 rounded-3 rounded-end shadow" >
          <div className="right-screen1  pt-5 pb-5 d-flex flex-column justify-content-center align-items-center">
            <h2>Entrar</h2>

            <form action="/submit" method="post">
              <div className="mb-3">
                <label htmlFor="text" className="form-label">Login</label>
                <input type="text" className="form-control" id="text" name="text" placeholder="nome, cpf, email" required onChange={handleName} value={usuarioname} />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Senha</label>
                <input type="password" className="form-control" id="password" name="password" required onChange={handlePassword} value={password}/>
              </div>

              <p>
                Ainda não tem conta? 
                <Link className='m-2' to="/cadastro">Criar conta</Link>
              </p>

              <button type="button" className="btn btn-primary" onClick={handleSubmit}>Fazer Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
