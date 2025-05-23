package com.decolatech.apibancaria.mapper;

import com.decolatech.apibancaria.domain.model.User;
import com.decolatech.apibancaria.dto.read.UserDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface IUserMapper {
    IUserMapper MAP = Mappers.getMapper(IUserMapper.class);
    List<UserDTO> toDtoList(List<User> user);


    User toEntityWrite(com.decolatech.apibancaria.dto.write.UserDTO userDTO);

    com.decolatech.apibancaria.dto.write.UserDTO toDtoWrite(User oldUser);
}
