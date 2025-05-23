package com.decolatech.apibancaria.controller;

import com.decolatech.apibancaria.domain.interfaces.service.IUserService;
import com.decolatech.apibancaria.domain.response.ApiResponse;
import com.decolatech.apibancaria.dto.write.UserDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Usuário")
@RestController
@RequestMapping("/users")
public class UserController {

    private final IUserService userService;

    public UserController(IUserService userService) {
        this.userService = userService;

    }

    @GetMapping
    @Operation(summary = "Listar todos os usuários")
    public ApiResponse findAll() {
        return userService.buscarUsuarios();

    }

    @GetMapping("/{id}")
    @Operation(summary = "Buscar Usuário por ID")
    public ApiResponse findById(@PathVariable Long id) {
        return userService.buscarUsuarioporId(id);

    }


    @PostMapping()
    @Operation(summary = "Adicionar usuário")
    public ApiResponse create(@RequestBody UserDTO userDTO) {
        return userService.CriarUsuario(userDTO);

    }


    @PutMapping("/{id}")
    @Operation(summary = "Atualizar dados pelo ID")
    public ApiResponse update(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        return userService.AtualizarUsuario(userDTO, id);

    }


    @DeleteMapping("/{id}")
    @Operation(summary = "Deletar usúario pelo ID")
    public ApiResponse delete(@PathVariable Long id) {
        return userService.DeletarUsuarioporId(id);

    }
}
