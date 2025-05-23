package com.decolatech.apibancaria.service;

import com.decolatech.apibancaria.domain.response.ApiResponse;
import com.decolatech.apibancaria.domain.response.ErrorResponse;
import com.decolatech.apibancaria.dto.write.FinancialGoalDTO;
import com.decolatech.apibancaria.mapper.IFinancialGoalMapper;
import com.decolatech.apibancaria.repository.IFinancialGoalRepository;
import com.decolatech.apibancaria.domain.interfaces.service.IFinancialGoalService;
import com.decolatech.apibancaria.repository.IUserRepository;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import static com.decolatech.apibancaria.MethodsAdapter.AtualizarDados;

@Service
public class FinancialGoalService implements IFinancialGoalService {
    public FinancialGoalService(IFinancialGoalRepository repository, IUserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }

    private final IFinancialGoalRepository repository;
    private final IUserRepository userRepository;

    @Transactional
    public ApiResponse CriarMetaFinanceira(FinancialGoalDTO financialGoalDTO) {
        var user = userRepository.findById(financialGoalDTO.userId).stream().findFirst();

        if (user.isEmpty())
            return new ApiResponse(null, new ErrorResponse("Usuário não encontrado", "O Id fornecido não corresponde a nenhum usuário cadastrado"), HttpStatus.NOT_FOUND.value());

        var financialGoal = IFinancialGoalMapper.MAP.toEntityWrite(financialGoalDTO);
        repository.findByUserId(financialGoal.getUserId()).map(x->{
            repository.deleteById(x.getId());
            return x;
        });
        financialGoal.setRemainingAmount(financialGoal.getGoalAmount()-financialGoal.getSavedAmount());
        var id = repository.save(financialGoal);
        return new ApiResponse(id, null, HttpStatus.CREATED.value());
    }

    @Transactional
    public ApiResponse AtualizarMetaFinanceira(Long id, FinancialGoalDTO financialGoalDTO) {
        var user = userRepository.findById(financialGoalDTO.userId).stream().findFirst();
        if (user.isEmpty())
            return new ApiResponse(null, new ErrorResponse("Usuário não encontrado", "O Id fornecido não corresponde a nenhum usuário cadastrado"), HttpStatus.NOT_FOUND.value());
        var entity = repository.findById(id).stream().findFirst();
        if (entity.isEmpty())
            return new ApiResponse(null, new ErrorResponse("Meta Financeira não encontrada", "Nenhuma meta foi registrada para o usuário"), HttpStatus.NOT_FOUND.value());

        var oldFinancial = IFinancialGoalMapper.MAP.toDtoWrite(entity.get());
        var financialGoal = AtualizarDados(oldFinancial, financialGoalDTO);
        var result = IFinancialGoalMapper.MAP.toEntityWrite(financialGoal);
        result.setRemainingAmount(result.getGoalAmount()-result.getSavedAmount());

        repository.save(result);

        return new ApiResponse(result, null , HttpStatus.OK.value());
    }

    @Transactional
    public ApiResponse DeletarMetaFinanceiraPorId(Long id) {
        var result = repository.findById(id);
        if (result.isEmpty()) {
            return new ApiResponse(null, new ErrorResponse("Meta Financeira não encontrada", "Sem registro de meta no usuário"), HttpStatus.NOT_FOUND.value());
        }
        repository.deleteById(id);
        return new ApiResponse(id,null, HttpStatus.OK.value());
    }

}
