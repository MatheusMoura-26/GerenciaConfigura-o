package com.decolatech.apibancaria.mapper;

import com.decolatech.apibancaria.domain.model.Card;
import com.decolatech.apibancaria.dto.read.CardDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ICardMapper {
    ICardMapper MAP = Mappers.getMapper(ICardMapper.class);
    CardDTO toDto(Card card);

    Card toEntityWrite(com.decolatech.apibancaria.dto.write.CardDTO card);
}
