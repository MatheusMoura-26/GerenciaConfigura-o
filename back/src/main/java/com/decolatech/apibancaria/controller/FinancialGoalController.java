package com.decolatech.apibancaria.controller;

import com.decolatech.apibancaria.domain.interfaces.service.IFinancialGoalService;
import com.decolatech.apibancaria.domain.response.ApiResponse;
import com.decolatech.apibancaria.dto.write.FinancialGoalDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Meta Financeira")
@RestController
@RequestMapping("v1/financial-goal")
public class FinancialGoalController {

    private final IFinancialGoalService financialService;

    public FinancialGoalController(IFinancialGoalService financialService) {
        this.financialService = financialService;


    }

    @PostMapping
    @Operation(summary = "Adicionar Meta Financeira")
    public ApiResponse create(@RequestBody FinancialGoalDTO financialGoalDTO) {
        return financialService.CriarMetaFinanceira(financialGoalDTO);

    }


    @PutMapping("/{id}")
    @Operation(summary = "Atualizar Meta Financeira")
    public ApiResponse update(@PathVariable Long id, @RequestBody FinancialGoalDTO financialGoalDTO) {
        return financialService.AtualizarMetaFinanceira(id, financialGoalDTO);

    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Deletar Meta Financeira pelo ID")
    public ApiResponse delete(@PathVariable Long id) {
        return financialService.DeletarMetaFinanceiraPorId(id);


    }


}