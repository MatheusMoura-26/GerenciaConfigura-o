-- Inserção de dados para conta
INSERT INTO tb_account (user_id, number, agency, balance, additional_limit) VALUES
(1, '12345-6', '001', 1500.50, 500.00),
(2, '98765-4', '002', 3500.75, 1200.00),
(3, '24680-1', '003', 500.00, 100.00),
(4, '13579-2', '004', 8200.10, 3000.00),
(5, '11223-5', '005', 920.30, 200.00);

-- Inserção de dados para card
INSERT INTO tb_card (user_id, number, available_limit, expiration_date, cvv) VALUES
(1, '4111111111111132', 5000.00, '2026-12-31', '1234'),
(2, '5500000000000094', 12000.00, '2025-05-31', '5678'),
(3, '340000000000039', 2500.50, '2024-10-30', '2345'),
(4, '6011510000000826', 8000.75, '2027-03-15', '9876'),
(5, '300000000000094', 1500.00, '2026-07-31', '4321');

-- Inserção de dados para Financial Goal
INSERT INTO tb_financial_goal (user_id, goal_amount, saved_amount, remaining_amount) VALUES
(1, 10000.00, 2500.00, 7500.00),
(2, 5000.00, 4000.00, 1000.00),
(3, 15000.00, 5000.00, 10000.00),
(4, 20000.00, 12000.00, 8000.00),
(5, 7500.00, 3000.00, 4500.00);

-- Inserção de dados para Limit Management
INSERT INTO tb_limit_management (user_id, max_limit_allowed, requested_increase, increase_status) VALUES
(1, 5000.00, 1500.00, 'Approved'),
(2, 10000.00, 2000.00, 'Pending'),
(3, 7000.00, 3000.00, 'Denied'),
(4, 12000.00, 5000.00, 'Approved'),
(5, 8000.00, 1000.00, 'Pending');

-- Inserção de News
INSERT INTO tb_news (user_id, title, content) VALUES
(1, 'Lançamento de Novo Produto', 'Estamos empolgados em anunciar o lançamento de nosso novo produto que promete revolucionar o mercado!'),
(2, 'Promoção de Férias', 'Aproveite as promoções de férias com descontos especiais em diversos produtos. Não perca essa oportunidade!'),
(3, 'Atualização de Sistema', 'Nosso sistema recebeu uma importante atualização para melhorar a experiência do usuário. A nova versão já está disponível.'),
(4, 'Parceria Internacional', 'Firmamos uma parceria estratégica com empresas internacionais para expandir nossos serviços globalmente.'),
(5, 'Evento Exclusivo para Clientes', 'Você é nosso convidado especial para um evento exclusivo, com muitos benefícios e surpresas. Marque no calendário!');

-- Inserção de User
INSERT INTO tb_user (name, email, phone, cpf, profile_picture, account_creation_date, birthdate, password) VALUES
('Marcos', 'marcos.silva@email.com', '(11) 98765-2030', '123.456.787-76', '/images/profile1.jpg', '2025-03-08 10:15:30', '1990-05-15', 'senha123'),
('Maria Oliveira', 'maria.oliveira@email.com', '(21) 99876-5432', '234.567.890-12', '/images/profile2.jpg', '2025-03-08 11:20:45', '1985-10-22', 'senha456'),
('Carlos Pereira', 'carlos.pereira@email.com', '(31) 91234-5678', '345.678.901-23', '/images/profile3.jpg', '2025-03-08 12:30:50', '1992-02-17', 'senha789'),
('Ana Souza', 'ana.souza@email.com', '(41) 93456-7890', '456.789.012-34', '/images/profile4.jpg', '2025-03-08 13:40:55', '1988-12-05', 'senha101112'),
('Pedro Costa', 'pedro.costa@email.com', '(51) 96789-0123', '567.890.123-45', '/images/profile5.jpg', '2025-03-08 14:50:10', '1995-07-30', 'senha131415');