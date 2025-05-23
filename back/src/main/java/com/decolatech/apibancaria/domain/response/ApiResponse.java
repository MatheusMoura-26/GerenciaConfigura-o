package com.decolatech.apibancaria.domain.response;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class ApiResponse {

    public Object data;

    public ErrorResponse error;

    public int statusCode;

}
