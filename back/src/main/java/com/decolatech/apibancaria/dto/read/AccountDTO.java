package com.decolatech.apibancaria.dto.read;

import java.math.BigDecimal;

public class AccountDTO {

    public Long id;

    public Long userId;

    public String number;

    public String agency;

    public BigDecimal balance;

    public BigDecimal limit;

}
// Read -> Leitura - Consultas
// Mapeamos a dto no método get, então quando vamos mapear a entity no GET chamamos a DTO do READ