package com.decolatech.apibancaria.repository;

import com.decolatech.apibancaria.domain.model.News;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface INewsRepository extends JpaRepository<News, Long> {
    List<News> findByUserId(Long id);
    void deleteByUserId(Long id);
}
