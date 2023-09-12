# [PT-BR] Loja de Itens Medievais API Restful

Este projeto consiste em uma API RESTful para uma loja de itens medievais, como espadas feitas sob encomenda para uma pessoa específica. A API foi desenvolvida em Typescript e Sequelize, seguindo o padrão REST, e oferece operações para criação, leitura e atualização de informações relacionadas a pessoas usuárias, produtos e pedidos.

## Tecnologias Utilizadas

- Node.js: plataforma de desenvolvimento em JavaScript do lado do servidor.
- Typescript: linguagem que adiciona tipagem estática ao JavaScript.
- Sequelize: ORM (Object-Relational Mapping) para interagir com o banco de dados e gerenciar models e migrations.
- Express.js: framework web para construção de APIs RESTful.
- JSON Web Tokens (JWT) para autenticação.
- Docker: plataforma para empacotar, distribuir e executar aplicações em containers.
- Mocha e Chai para testes automatizados.

## Funcionalidades

A API oferece as seguintes funcionalidades:

1. **Cadastro de Usuário:**
   - Endpoint: `POST /api/users`
   - Descrição: Permite criar uma nova pessoa usuária com informações como nome, e-mail e senha.

2. **Autenticação de Usuário:**
   - Endpoint: `POST /api/auth/login`
   - Descrição: Permite autenticar uma pessoa usuária e obter um token JWT para acesso às rotas protegidas.

3. **Gerenciamento de Usuários:**
   - Endpoint: `GET /api/users/:id`
   - Descrição: Obtém informações de uma pessoa usuária específica por ID.
   - Endpoint: `PUT /api/users/:id`
   - Descrição: Atualiza informações de uma pessoa usuária por ID.
   - Endpoint: `DELETE /api/users/:id`
   - Descrição: Exclui uma pessoa usuária por ID.

4. **Gerenciamento de Produtos:**
   - Endpoint: `POST /api/products`
   - Descrição: Permite criar um novo produto.
   - Endpoint: `GET /api/products`
   - Descrição: Obtém a lista de todos os produtos disponíveis.
   - Endpoint: `GET /api/products/:id`
   - Descrição: Obtém informações de um produto específico por ID.
   - Endpoint: `PUT /api/products/:id`
   - Descrição: Atualiza informações de um produto por ID.
   - Endpoint: `DELETE /api/products/:id`
   - Descrição: Exclui um produto por ID.

5. **Gerenciamento de Pedidos:**
   - Endpoint: `POST /api/orders`
   - Descrição: Permite criar um novo pedido.
   - Endpoint: `GET /api/orders`
   - Descrição: Obtém a lista de todos os pedidos.
   - Endpoint: `GET /api/orders/:id`
   - Descrição: Obtém informações de um pedido específico por ID.
   - Endpoint: `PUT /api/orders/:id`
   - Descrição: Atualiza informações de um pedido por ID.
   - Endpoint: `DELETE /api/orders/:id`
   - Descrição: Exclui um pedido por ID.

## Configuração do Ambiente

Antes de iniciar a API, você precisa configurar o ambiente e o banco de dados.

1. **Configuração das Variáveis de Ambiente:**
   - Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente, incluindo as credenciais do banco de dados.

2. **Configuração do Banco de Dados:**
   - Certifique-se de que o banco de dados esteja configurado corretamente no arquivo `.env`.
   - Execute as migrações e os seeders para criar as tabelas e inserir dados iniciais:

   ```bash
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```
## Testes
- Para executar os testes automatizados, utilize o seguinte comando:
  ```bash
  npm test
  
## Contato

- LinkedIn: [AlissonTassi](https://www.linkedin.com/in/alissontassi/)
- GitHub: [AlissonSeraphim](https://github.com/AlissonSeraphim)

## Licença

Este projeto não possui licença.

# [EN] Medieval Items Store RESTful API

This project consists of a RESTful API for a medieval items store, such as custom-made swords for specific individuals. The API was developed in Typescript and Sequelize, following the REST standard, and offers operations for creating, reading, and updating information related to users, products, and orders.

## Technologies Used

- Node.js: a server-side JavaScript development platform.
- Typescript: a language that adds static typing to JavaScript.
- Sequelize: an ORM (Object-Relational Mapping) for interacting with the database and managing models and migrations.
- Express.js: a web framework for building RESTful APIs.
- JSON Web Tokens (JWT) for authentication.
- Docker: a platform for packaging, distributing, and running applications in containers.
- Mocha and Chai for automated testing.

## Features

The API offers the following features:

1. **User Registration:**
   - Endpoint: `POST /api/users`
   - Description: Allows creating a new user with information such as name, email, and password.

2. **User Authentication:**
   - Endpoint: `POST /api/auth/login`
   - Description: Allows authenticating a user and obtaining a JWT token for access to protected routes.

3. **User Management:**
   - Endpoint: `GET /api/users/:id`
   - Description: Retrieves information about a specific user by ID.
   - Endpoint: `PUT /api/users/:id`
   - Description: Updates information about a user by ID.
   - Endpoint: `DELETE /api/users/:id`
   - Description: Deletes a user by ID.

4. **Product Management:**
   - Endpoint: `POST /api/products`
   - Description: Allows creating a new product.
   - Endpoint: `GET /api/products`
   - Description: Retrieves a list of all available products.
   - Endpoint: `GET /api/products/:id`
   - Description: Retrieves information about a specific product by ID.
   - Endpoint: `PUT /api/products/:id`
   - Description: Updates information about a product by ID.
   - Endpoint: `DELETE /api/products/:id`
   - Description: Deletes a product by ID.

5. **Order Management:**
   - Endpoint: `POST /api/orders`
   - Description: Allows creating a new order.
   - Endpoint: `GET /api/orders`
   - Description: Retrieves a list of all orders.
   - Endpoint: `GET /api/orders/:id`
   - Description: Retrieves information about a specific order by ID.
   - Endpoint: `PUT /api/orders/:id`
   - Description: Updates information about an order by ID.
   - Endpoint: `DELETE /api/orders/:id`
   - Description: Deletes an order by ID.

## Environment Setup

Before starting the API, you need to configure the environment and the database.

1. **Environment Variables Setup:**
   - Rename the `.env.example` file to `.env` and configure the environment variables, including the database credentials.

2. **Database Setup:**
   - Ensure the database is configured correctly in the `.env` file.
   - Execute migrations and seeders to create tables and insert initial data:

   ```bash
   npx sequelize db:migrate
   npx sequelize db:seed:all

## Testing
- To run automated tests, use the following command:
  ```bash
  npm test

## Contact

- LinkedIn: [AlissonTassi](https://www.linkedin.com/in/alissontassi/)
- GitHub: [AlissonSeraphim](https://github.com/AlissonSeraphim)

## License

This project has no license.
