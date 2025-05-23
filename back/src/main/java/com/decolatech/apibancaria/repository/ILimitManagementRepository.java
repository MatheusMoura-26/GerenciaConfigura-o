package com.decolatech.apibancaria.repository;

import com.decolatech.apibancaria.domain.model.LimitManagement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ILimitManagementRepository extends JpaRepository<LimitManagement, Long> {
    LimitManagement findByUserId(Long id);
    void deleteByUserId(Long id);
}
