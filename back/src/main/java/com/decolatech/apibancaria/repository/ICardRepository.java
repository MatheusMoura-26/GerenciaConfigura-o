package com.decolatech.apibancaria.repository;

import com.decolatech.apibancaria.domain.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICardRepository extends JpaRepository<Card, Long> {
    Card findByUserId(Long id);
}
