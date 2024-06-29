package br.com.receitafederal.API.repository;

import br.com.receitafederal.API.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User findByCpf(Long cpf);

    User findByUsernameAndEmail(String username, String email);
}
