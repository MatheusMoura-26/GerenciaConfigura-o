package com.decolatech.apibancaria.mapper;

import com.decolatech.apibancaria.domain.model.Account;
import com.decolatech.apibancaria.dto.read.AccountDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface IAccountMapper {
    IAccountMapper MAP = Mappers.getMapper(IAccountMapper.class);
    AccountDTO toDto(Account account);

    Account toEntityWrite(com.decolatech.apibancaria.dto.write.AccountDTO account);
}
