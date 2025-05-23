package com.decolatech.apibancaria.mapper;

import com.decolatech.apibancaria.domain.model.News;
import com.decolatech.apibancaria.dto.read.NewsDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface INewsMapper {
    INewsMapper MAP = Mappers.getMapper(INewsMapper.class);
    List<NewsDTO> toDtoList(List<News> news);

    List<News> toEntityList(List<com.decolatech.apibancaria.dto.write.NewsDTO> news);
    News toEntity(com.decolatech.apibancaria.dto.write.NewsDTO news);
}
