package br.com.receitafederal.API.service;

import br.com.receitafederal.API.model.User;
import br.com.receitafederal.API.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserService {

    @Autowired
    UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public boolean validarSenha(User user, String senha) {
        return passwordEncoder.matches(senha, user.getPassword());
    }

    public User findByUsernameAndEmail(String username, String email) {
        return userRepository.findByUsernameAndEmail(username, email);
    }

    public Optional<User> findById(Long id){
        return userRepository.findById(id);
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    public void redefinirSenha(User user, String novaSenha) {
        String senhaCodificada = passwordEncoder.encode(novaSenha);
        user.setPassword(senhaCodificada);
        userRepository.save(user);
    }
}
