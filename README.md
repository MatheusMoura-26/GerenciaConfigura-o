# 💳 API de Conta Bancária + Frontend

Projeto simples de uma aplicação web para gerenciamento de contas bancárias, com backend em Spring Boot e frontend em React + TypeScript.

---
## Diagrama de Classes
  
```mermaid
classDiagram
    class User {
        +string profilePicture
        +string accountCreationDate
        +Long id (DTO)
        +string name (DTO)
        +string email (DTO)
        +string phone (DTO)
        +string cpf (DTO)
        +LocalDate birthDate(DTO)
        +string password(DTO)
    }

    class Account {
        +double accountLimit
        +string accountNumber(DTO)
        +string accountAgency(DTO)
        +double accountBalance(DTO)
    }

    class Card {
        +LocalDate expirationDate
        +string cvv
        +Long id(DTO)
        +string number(DTO)
        +BigDecimal limit(DTO)
    }

    class LimitManagement {
        +Long id(DTO)
        +double maxLimitAllowed(DTO)
        +double requestedIncrease(DTO)
        +double increaseStatus(DTO)
    }

    class FinancialGoal {
        +Long id(DTO)
        +double goalAmount(DTO)
        +double savedAmount(DTO)
        +double remainingAmount(DTO)
    }

    class News {
        +Long id(DTO)
        +string title(DTO)
        +string content(DTO)
    }

    User "1" --> "1" Account
    User "1" --> "1" Card
    User "1" --> "1" LimitManagement
    User "1" --> "1" FinancialGoal
    User "1" --> "0..*" News
```
---
## 🧱 Arquitetura do Projeto

### 🔧 Backend - Spring Boot

**Tecnologias:**  
Java 17, Spring Boot, Swagger, PostgreeSQL

**Camadas:**

- `config/` – configurações (Swagger, CORS)
- `controller/` – endpoints REST
- `domain/`
  - `model/` – entidades (User, Account, Card, etc.)
  - `interfaces/` – interfaces de serviço (ex: IUserService)
  - `response/` – estrutura para retorno de erros
- `dto/` – objetos de transferência de dados
- `mapper/` – mapeamento entre entidades e DTOs
- `repository/` – interfaces JPA para banco de dados
- `service/` – regras de negócio
- `adapter/` – integração entre camadas
- `DatabaseInitializer/` – dados iniciais

**Entidades:**

- User
- Account
- Card
- FinancialGoal
- LimitManagement
- News

**Funcionalidades:**

- CRUD completo de usuários
- CRUD de metas financeiras
- Associação de conta e cartão ao usuário
- Retorno de notificações
- Tratamento de exceções com mensagens padronizadas

---

### 🖥️ Frontend - React + TypeScript

**Tecnologias:**  
React, TypeScript, Axios, React Router, TailwindCSS (ou styled-components)

**Páginas e Componentes:**

- Login e cadastro
- Dashboard com resumo do usuário
- Formulários para metas financeiras
- Lista de contas e cartões
- Notificações visuais

**Pastas principais:**

- `components/` – componentes reutilizáveis
- `pages/` – páginas da aplicação
- `services/` – comunicação com API
- `context/` – controle global (ex: login)
- `interfaces/` – tipagens dos dados

---

## 🚀 Release v0.0.0

📅 **Data:** 23/05/2025  
🎯 **Objetivo:** Entrega inicial com as funcionalidades básicas da aplicação.

**Inclui:**

- API REST com operações de usuário, conta, cartão e metas
- Frontend funcional com login, cadastro e dashboard
- Integração completa entre front e back
- Estrutura modular e escalável

**Rodar o projeto:**

**Backend:**
- Rodar Spring Boot (`localhost:8080`)
- Testar via Swagger (`/swagger-ui.html`)

**Frontend:**
```bash
npm install
npm run dev
