-- Criar tabela 'pessoas'
CREATE TABLE IF NOT EXISTS pessoas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela 'telefones'
CREATE TABLE IF NOT EXISTS telefones (
    id SERIAL PRIMARY KEY,
    numero VARCHAR(50) NOT NULL,
    pessoa_id INTEGER NOT NULL REFERENCES pessoas(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir dados na tabela 'pessoas'
INSERT INTO pessoas (nome) VALUES
('Ana Silva'),
('João Pereira'),
('Maria Souza');

-- Inserir dados na tabela 'telefones'
INSERT INTO telefones (numero, pessoa_id) VALUES
('11999990001', 1),
('11999990002', 1),
('11999990003', 2),
('11999990004', 3),
('11999990005', 3);
