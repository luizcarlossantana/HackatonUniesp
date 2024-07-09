package br.com.receitafederal.API.service;

import br.com.receitafederal.API.Model.Usuario;

import br.com.receitafederal.API.Model.dto.UsuarioDTO;
import br.com.receitafederal.API.exception.UserNotFoundException;
import br.com.receitafederal.API.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
@Transactional
public class UserService {

    @Autowired
    UsuarioRepository usuarioRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Usuario login(UsuarioDTO objDTO) {
        try {
            boolean compararSenha = false;
            if (objDTO.getUsuarioname() != null && objDTO.getPassword() != null) {

                var user =usuarioRepository.findByUsuarioname(objDTO.getUsuarioname());
                var email =usuarioRepository.findByEmail(objDTO.getUsuarioname());
                var cpf =usuarioRepository.findByCpf(objDTO.getUsuarioname());
                var escolhido = new Usuario();
                if(user.isPresent() ){
                    escolhido = user.get();

                } else if (email.isPresent()) {
                    escolhido = email.get();
                } else if (cpf.isPresent()) {
                    escolhido = cpf.get();
                }

                if(escolhido.getPassword().equals(objDTO.getPassword())){;
                return escolhido;
            }}else {
                throw new UserNotFoundException("senha ou login incorretos");
            }
            return new Usuario();
        }catch (Exception e){
            throw new UserNotFoundException("Usuario ou senha incorreta!");
        }
    }

    public boolean validarSenha(Usuario user, String senha) {
        return passwordEncoder.matches(senha, user.getPassword());
    }

    public Usuario findByUsernameAndEmail(String username, String email) {
        return usuarioRepository.findByUsuarionameAndEmail(username, email).get();
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

    public Usuario creatUser(){
        return null;
    }


}
