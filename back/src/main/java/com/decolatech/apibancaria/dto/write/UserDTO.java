package com.decolatech.apibancaria.dto.write;


import java.time.LocalDateTime;
import java.util.List;


public class UserDTO {

    public Long id;

    public String name;

    public String cpf;

    public String phone;

    public LocalDateTime birthdate;

    public String email;

    public String password;

    public AccountDTO account;

    public CardDTO card;

    public LimitManagementDTO limitManagement;

    public List<NewsDTO> news;


}







