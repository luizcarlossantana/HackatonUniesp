package br.com.receitafederal.API.repository;

import br.com.receitafederal.API.Model.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByUsuarioname(String username);
    Usuario findByCpf(String cpf);

    Usuario findByUsuarionameAndEmail(String username, String email);


}
