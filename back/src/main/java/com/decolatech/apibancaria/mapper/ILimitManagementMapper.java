package com.decolatech.apibancaria.mapper;

import com.decolatech.apibancaria.domain.model.LimitManagement;
import com.decolatech.apibancaria.dto.read.LimitManagementDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ILimitManagementMapper {
    ILimitManagementMapper MAP = Mappers.getMapper(ILimitManagementMapper.class);
    LimitManagementDTO toDto(LimitManagement limitManagement);

    LimitManagement toEntityWrite(com.decolatech.apibancaria.dto.write.LimitManagementDTO limitManagement);
}
