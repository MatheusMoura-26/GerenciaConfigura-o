package com.decolatech.apibancaria.domain.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_limit_management")
public class LimitManagement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "userId")
    private Long userId;

    @Column(name = "max_limit_allowed")
    private double maxLimitAllowed;  //limite máximo que é permitido

    @Column(name = "requested_increase")
    private double requestedIncrease; // aqui a gente pede um aumento

    @Column(name = "increase_status")
    private String increaseStatus; // status se o pedido foi aprovado ou não...
}


