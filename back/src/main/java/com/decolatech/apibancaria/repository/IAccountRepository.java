package com.decolatech.apibancaria.repository;

import com.decolatech.apibancaria.domain.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAccountRepository extends JpaRepository<Account, Long> {
    Account findByUserId(Long id);


}
