package com.decolatech.apibancaria.repository;

import com.decolatech.apibancaria.domain.model.FinancialGoal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IFinancialGoalRepository extends JpaRepository<FinancialGoal, Long> {
    Optional<FinancialGoal> findByUserId(Long id);
}
