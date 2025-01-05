# Desafio Eldorado - Backend

Este repositório contém a aplicação **backend** desenvolvida como parte do Desafio Eldorado. A aplicação foi projetada para oferecer suporte à gestão de dados, fornecendo uma API RESTful robusta e eficiente.

---

## 🛠️ Tecnologias Utilizadas

As principais tecnologias e ferramentas utilizadas no projeto são:

- **Node.js**: Ambiente de execução JavaScript para o backend.
- **Express**: Framework para construção de APIs RESTful.
- **MySQL**: Banco de dados relacional para armazenamento dos dados.
- **Sequelize**: ORM para modelagem e manipulação do banco de dados.
- **Dotenv**: Gerenciamento de variáveis de ambiente.
- **Jest** (opcional): Para criação de testes unitários.

---

## 🚀 Funcionalidades

1. **Gerenciamento de Produtos**:

   - Criar, listar, atualizar e excluir produtos.
   - Filtrar produtos por critérios específicos.

2. **Autenticação e Autorização**:

   - Login de usuários utilizando JWT (JSON Web Tokens).
   - Controle de acesso a rotas protegidas.

3. **Integração com Banco de Dados**:

   - Modelagem relacional com Sequelize.
   - Migrações para gerenciamento do esquema do banco.

4. **Manutenção Simples**:
   - Rotas RESTful bem estruturadas.
   - Código modular e organizado.

---

## 📂 Estrutura de Pastas

Abaixo está a estrutura principal do projeto:

backend/
├── src/
│ ├── config/ # Configurações gerais (ex.: banco de dados)
│ ├── controllers/ # Lógica das rotas
│ ├── models/ # Modelos Sequelize
│ ├── routes/ # Definição das rotas da API
│ ├── services/ # Regras de negócio
│ └── utils/ # Funções utilitárias
├── tests/ # Testes unitários
├── .env.example # Variáveis de ambiente (exemplo)
├── package.json # Dependências e scripts do projeto
└── README.md # Documentação do projeto

## ⚙️ Como Configurar o Projeto

### Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js**: [Download](https://nodejs.org/)
- **MySQL**: Banco de dados relacional.
- **npm** ou **yarn**: Gerenciador de pacotes.

### Passos para Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/JessikaAguiar/desafio-eldorado.git
   cd desafio-eldorado/backend
   ```
2. **Instale as dependências:**:
   ```bash
   npm install
   ```
3. **Configure as variáveis de ambiente:**
   Crie um arquivo .env baseado no .env.example fornecido.
   ```bash
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=password
   DB_NAME=eldorado_db
   JWT_SECRET=your_secret_key
   ```
4. **Crie o banco de dados e execute as migrações:**
   ```bash
   npx sequelize db:create
   npx sequelize db:migrate
   ```
5. **Inicie o servidor:**
   ```bash
   npm start
   ```
   O servidor estará disponível em: http://localhost:3000

### 🧪 Testes

Para rodar os testes (caso existam):

```bash
npm test
```

## 📖 Rotas da API

### Produtos

- **GET** `/api/products` - Listar todos os produtos.
- **POST** `/api/products` - Criar um novo produto.
- **PUT** `/api/products/:id` - Atualizar um produto.
- **DELETE** `/api/products/:id` - Deletar um produto.

### Usuários

- **POST** `/api/login` - Autenticação de usuário.

---

## 🛠️ Próximos Passos

- Adicionar testes automatizados para garantir a estabilidade do sistema.
- Implementar documentação da API com Swagger.
- Otimizar consultas

## 📝 Licença

Este projeto é de código aberto e está disponível sob os termos da licença MIT.

---

## 📩 Contato

Caso tenha dúvidas ou sugestões, sinta-se à vontade para entrar em contato:

- **[GitHub](https://github.com/JessikaAguiar)**
- **[LinkedIn](https://www.linkedin.com/in/jessikaaguiar/)**
