import { Link } from "react-router-dom";


const Cadastro = () => {
  return (
    <div className="container pt-5 pb-5">
        <Link to="/"><button className='btn btn-outline-secondary mb-3' >Voltar</button></Link>
      <div className="d-flex shadow">
        <div className="col-md-6 gradient-background pt-5 pb-5 rounded-start">
          <div className="logo d-flex" style={{ justifyContent: 'center', alignItems: 'center'}}>
            <img src='logoReceitaWhite.svg' alt="logo da Receita Federal" className="img-fluid" style={{ width: '400px', height: 'auto' }}/>
          </div>
        </div>
        <div className="col-md-6 pt-5 pb-5 rounded-3 rounded-end shadow">
          <div className="right-screen1 pt-5 pb-5 d-flex flex-column justify-content-center align-items-center">
            <h2>Entrar</h2>

            <form action="/submit" method="post">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Nome" required />
              </div>

              <div className="mb-3">
                <label htmlFor="cpf" className="form-label">CPF</label>
                <input type="text" className="form-control" id="cpf" name="cpf" placeholder="CPF" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
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

export default Cadastro;
