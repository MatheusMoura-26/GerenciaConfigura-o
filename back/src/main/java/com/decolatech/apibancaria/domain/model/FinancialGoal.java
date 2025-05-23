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
@Table(name = "tb_financial_goal")
public class FinancialGoal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "userId")
    private Long userId;

    @Column(name = "goal_amount")
    private double goalAmount; //Valor total da meta

    @Column(name = "saved_amount")
    private double savedAmount;//Dinheiro Guardado

    @Column(name = "remaining_amount")
    private double remainingAmount;




}