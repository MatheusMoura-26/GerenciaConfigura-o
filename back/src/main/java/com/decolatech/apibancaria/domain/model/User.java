package com.decolatech.apibancaria.domain.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(unique = true)
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(unique = true)
    private String cpf;

    @Column(name = "profile_Picture")
    private String profilePicture;

    @Column(name = "account_creation_date")
    private LocalDateTime accountCreationDate;

    @Column(name = "birthdate")
    private LocalDateTime birthdate;

    @Column(name = "password")
    private String password;


    }

