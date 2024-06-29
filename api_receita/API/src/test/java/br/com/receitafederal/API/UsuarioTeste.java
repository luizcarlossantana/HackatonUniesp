package br.com.receitafederal.API;

import br.com.receitafederal.API.Model.Usuario;
import br.com.receitafederal.API.repository.UsuarioRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UsuarioTeste {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Test
    public void criarUsuario(){

        Usuario usuario = new Usuario();
        usuario.setCpf("12345678912");
        usuario.setPassword("12345");
        usuario.setEmail("luiz@gmail.com");
        usuario.setUsuarioname("luiz carlos");

        usuarioRepository.save(usuario);
    }

    @Test
    public void criarUsuarioNull(){

        Usuario usuario = new Usuario();

        usuarioRepository.save(usuario);
    }






}
