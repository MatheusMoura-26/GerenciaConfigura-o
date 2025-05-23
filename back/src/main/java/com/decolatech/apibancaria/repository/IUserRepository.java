package com.decolatech.apibancaria.repository;

import com.decolatech.apibancaria.domain.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Long> {
    boolean existsByCpf(String cpf);
}
