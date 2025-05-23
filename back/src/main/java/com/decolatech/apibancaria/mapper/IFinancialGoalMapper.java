package com.decolatech.apibancaria.mapper;

import com.decolatech.apibancaria.domain.model.FinancialGoal;
import com.decolatech.apibancaria.dto.read.FinancialGoalDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface IFinancialGoalMapper {
    IFinancialGoalMapper MAP = Mappers.getMapper(IFinancialGoalMapper.class);
    FinancialGoalDTO toDto(FinancialGoal financialGoal);

    FinancialGoal toEntityWrite(com.decolatech.apibancaria.dto.write.FinancialGoalDTO financialGoal);

    com.decolatech.apibancaria.dto.write.FinancialGoalDTO toDtoWrite(FinancialGoal entity);
}
