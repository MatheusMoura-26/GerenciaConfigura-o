package com.decolatech.apibancaria.domain.interfaces.service;

import com.decolatech.apibancaria.domain.response.ApiResponse;
import com.decolatech.apibancaria.dto.write.FinancialGoalDTO;

public interface IFinancialGoalService {
    ApiResponse CriarMetaFinanceira(FinancialGoalDTO financialGoalDTO);

    ApiResponse AtualizarMetaFinanceira(Long id, FinancialGoalDTO financialGoalDTO);

    ApiResponse DeletarMetaFinanceiraPorId(Long id);
}
