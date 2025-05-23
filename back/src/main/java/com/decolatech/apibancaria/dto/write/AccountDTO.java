package com.decolatech.apibancaria.dto.write;

import java.math.BigDecimal;

public class AccountDTO {

    public Long id;

    public Long userId;

    public String number;

    public String agency;

    public BigDecimal balance;

    public BigDecimal limit;

}

// Write -> Tudo que é escrito (Modificação de dados)
// Mapeamos a dto no método put e post então quando vamos mapear a entity em um desses métodos chamamos a DTO do Write)