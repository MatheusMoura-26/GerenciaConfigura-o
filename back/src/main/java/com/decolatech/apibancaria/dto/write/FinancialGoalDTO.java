package com.decolatech.apibancaria.dto.write;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class FinancialGoalDTO {

    @JsonIgnore
    public Long id;

    public Long userId;

    public double goalAmount;

    public double savedAmount;

    @JsonIgnore
    public double remainingAmount;



    


}


