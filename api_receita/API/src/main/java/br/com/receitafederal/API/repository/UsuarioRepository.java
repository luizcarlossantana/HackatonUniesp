package br.com.receitafederal.API.repository;

import br.com.receitafederal.API.Model.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByUsuarioname(String username);
    Optional<Usuario> findByCpf(String cpf);
    Optional<Usuario> findByUsuarionameAndEmail(String username, String email);
    Optional<Usuario> findByEmail(String email);



}
