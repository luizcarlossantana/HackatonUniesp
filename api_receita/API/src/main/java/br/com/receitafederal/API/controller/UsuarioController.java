package br.com.receitafederal.API.controller;


import br.com.receitafederal.API.Model.Usuario;
import br.com.receitafederal.API.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        Usuario usuario = userService.findByUsername(username);
        if (usuario != null && userService.validarSenha(usuario, password)) {
            return "Login bem-sucedido!";
        } else {
            return "Senha inválida!";
        }
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteByid(@PathVariable Long id) {
        userService.deleteById(id);
    }

    @PutMapping("/{id}/redefinir-senha")
    public String redefinirSenha(@PathVariable Long id, @RequestParam String novaSenha) {
        Usuario usuario = userService.findById(id).orElse(null);
        if (usuario != null) {
            userService.redefinirSenha(usuario, novaSenha);
            return "Senha redefinida com sucesso!";
        } else {
            return "Usuário não encontrado!";
        }
    }
}