package com.decolatech.apibancaria;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.Statement;
import java.util.Scanner;

@Component // define a classe como um componente gerenciado pelo Spring, ele permite sua injeção e execução automaticamente

public class DatabaseInitializer implements ApplicationListener<ContextRefreshedEvent> { // criamos uma classe DataBaseInitializer que implementa a applicationListener
    @Autowired
    private DataSource dataSource;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        try (Connection connection = dataSource.getConnection()) {
            // Caminho do script SQL a ser executado
            InputStream inputStream = getClass().getResourceAsStream("/db/initializer.sql"); // aqui ele carrega o arquivo
            Scanner scanner = new Scanner(inputStream).useDelimiter("\\A"); //ele vai ler o arquivo
            String sql = scanner.hasNext() ? scanner.next() : ""; //ele transformar o arquivo em uma String SQL

            // Executando o script
            try (Statement statement = connection.createStatement()) {//ele cria o objeto Statement que basicamente é responsável por excutar os comandos SQL
                statement.execute(sql); // Aqui ele executa o script lido no scanner
            }

            System.out.println("Script SQL executado com sucesso!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
