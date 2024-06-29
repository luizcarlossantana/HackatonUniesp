package br.com.receitafederal.API.controller;


import br.com.receitafederal.API.Model.Usuario;
import br.com.receitafederal.API.Model.dto.UsuarioDTO;
import br.com.receitafederal.API.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody UsuarioDTO objDTO){
        userService.login(objDTO);
        return ResponseEntity.ok().body("Login realizado com sucesso!");
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