import React from 'react';

const Login = () => {
  return (
    <div className="container pt-5 pb-5"> {/* Adicionando margem superior (mt-5) e inferior (mb-5) */}
      <div className="d-flex">
        <div className="col-md-6 gradient-background  pt-5 pb-5">
          <div className="logo d-flex" style={{ justifyContent: 'center', alignItems: 'center'}}>
            <img src='logoReceitaWhite.svg' alt="logo da Receita Federal" className="img-fluid" style={{ width: '400px', height: 'auto' }}/>
          </div>
        </div>
        <div className="col-md-6  pt-5 pb-5">
          <div className="right-screen1  pt-5 pb-5 d-flex flex-column justify-content-center align-items-center">
            <h2>Entrar</h2>

            <form action="/submit" method="post">
              <div className="mb-3">
                <label htmlFor="text" className="form-label">Login</label>
                <input type="text" className="form-control" id="text" name="text" placeholder="nome, cpf, email" required />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Senha</label>
                <input type="password" className="form-control" id="password" name="password" required />
              </div>

              <p>
                Ainda não tem conta? <a href="./tela2.html">Criar conta</a>
              </p>

              <button type="button" className="btn btn-primary">Fazer Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
