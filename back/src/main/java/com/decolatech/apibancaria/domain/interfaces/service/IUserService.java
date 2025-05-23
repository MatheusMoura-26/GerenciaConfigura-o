package com.decolatech.apibancaria.domain.interfaces.service;

import com.decolatech.apibancaria.domain.response.ApiResponse;

public interface IUserService {
    ApiResponse buscarUsuarios();

    ApiResponse buscarUsuarioporId(Long id);

    ApiResponse DeletarUsuarioporId(Long id);

    ApiResponse CriarUsuario(com.decolatech.apibancaria.dto.write.UserDTO userDTO);

    ApiResponse AtualizarUsuario(com.decolatech.apibancaria.dto.write.UserDTO userDTO, Long id);
}
