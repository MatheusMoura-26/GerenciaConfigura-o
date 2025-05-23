package com.decolatech.apibancaria;

import com.decolatech.apibancaria.dto.write.FinancialGoalDTO;
import com.decolatech.apibancaria.dto.write.UserDTO;

import java.lang.reflect.Field;
import java.util.Objects;

public class MethodsAdapter {
    public static UserDTO AtualizarDados(UserDTO oldUser, UserDTO newUser) {
        //Utilização de reflection
        var properties = UserDTO.class.getDeclaredFields();

        for (Field field : properties ) {
            try {
                Object oldValue = field.get(oldUser);
                Object newValue = field.get(newUser);

                if (field.getName().equals("id")) continue;
                if (!Objects.equals(oldValue, newValue)) {
                    field.set(oldUser, newValue);
                }
            } catch (IllegalAccessException e) {
                throw new RuntimeException(e);
            }
        }
        return oldUser;
    }
    public static FinancialGoalDTO AtualizarDados(FinancialGoalDTO oldFinancial, FinancialGoalDTO newFinancial) {
        var properties = FinancialGoalDTO.class.getDeclaredFields();

        for (Field field : properties ) {
            try {
                Object oldValue = field.get(oldFinancial);
                Object newValue = field.get(newFinancial);

                if (field.getName().equals("id")) continue;
                if (!Objects.equals(oldValue, newValue)) {
                    field.set(oldFinancial, newValue);
                }
            } catch (IllegalAccessException e) {
                throw new RuntimeException(e);
            }
        }
        return oldFinancial;
    }
}
