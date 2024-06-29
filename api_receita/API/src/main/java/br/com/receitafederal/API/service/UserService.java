package br.com.receitafederal.API.service;

import br.com.receitafederal.API.Model.Usuario;

import br.com.receitafederal.API.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserService {

    @Autowired
    UsuarioRepository usuarioRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Usuario findByUsername(String username) {
        return usuarioRepository.findByUsuarioname(username);
    }

    public boolean validarSenha(Usuario user, String senha) {
        return passwordEncoder.matches(senha, user.getPassword());
    }

    public Usuario findByUsernameAndEmail(String username, String email) {
        return usuarioRepository.findByUsuarionameAndEmail(username, email);
    }

    public Optional<Usuario> findById(Long id){
        return usuarioRepository.findById(id);
    }

    public void deleteById(Long id) {
        usuarioRepository.deleteById(id);
    }

    public void redefinirSenha(Usuario user, String novaSenha) {
        String senhaCodificada = passwordEncoder.encode(novaSenha);
        user.setPassword(senhaCodificada);
        usuarioRepository.save(user);
    }
}
