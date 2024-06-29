import styles from './Login.module.css'; // Importe os estilos do módulo CSS

const Login = () => {
  return (
  <div className={styles.geral}>  
      <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img src="./assets/logoReceitaWhite.svg" alt="logo da Receita Federal" />
        </div>
      </div>

      <div className={styles.rightScreen1}>
        <h2>Entrar</h2>

        <form action="/submit" method="post">
          <label htmlFor="text">Login</label>
          <input type="text" id="text" name="text" placeholder="nome, cpf, email" required />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" required />

          <p>
            Ainda não tem conta? <a href="./tela2.html">Criar conta</a>
          </p>

          <button type="button">Fazer Login</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Login;
