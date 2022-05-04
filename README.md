# Desafio Eldorado
## Autora
- [@jessikaaguiar](https://github.com/JessikaAguiar)

## Itens avalidos:
- [x] Implementar um aplicativo web de gerenciamento de dispositivos
  simples
- [x] Criação do repositório no GitHub (único para back-end e front-end)
- [x] Criação de uma REST API em Node.js (versão 10 ou superior)
  - Estrutura inicial
  - Conexão com o banco de dados
  - Modelagem das entidades
- [x] Criação da estrutura de banco de dados
  - Utilizar o MySQL
- [x] Modelagem das seguintes entidades
  - Todos os campos são obrigatórios
    - Device:
      - Id: (gerado automaticamente. Inteiro e incremental)
      - Category: uma seleção suspensa que você pode escolher entre
        todas as categorias acessível.
      - Color: Campo de texto, com validação (somente letras, tamanho
        máximo 16)
      - PartNumber: campo inteiro positivo, com validação.
    - Category:
      - Id: (gerado automaticamente, inteiro e incremental)
      - Name: Não deve estar vazio. Todas as categorias devem ter um
        nome. Tamanho máximo 128 caracteres.
- [x] Você deve fornecer o script (SQL ou qualquer script de migração/versão de
  banco de dados) que pode criar o banco de dados do zero.
- [x] Use o GIT, confirme cada progresso que você fez e compartilhe seu código
  em um repositório público do github.
- [x] Criação dos endpoints para criar, ler e excluir
  - Para cada entidade
  - [ ] Utilizando TDD
- [x] Utilizando padrões de projeto (utilizar pelo menos um padrão
  comportamental)
- [x] Criação da autenticação via API
- [x] Criação de uma aplicativo web com Angular 8 ou superior
- [x] Criação da página de login
- [x] O aplicativo web deve ter um menu com duas opções:
  - Gerenciamento de Categoria
  - Dispositivo Gestão
- [ ] Implante seu projeto em um provedor de nuvem (AWS, GCP, Heroku ou
  qualquer outro) e envie a URL do seu aplicativo da web e a URL do seu
  repositório GIT.
- [ ] AWS é o preferido. Nossa recomendação é se inscrever para uma conta
  gratuita e usar:
  - Uma instância T2 micro EC2 (para back-end)
  - Uma micro instância RDS T2 (para banco de dados)
  - O front-end pode ser implantado no bucket estático do S3 ou na
    mesma instância do EC2 usada para o back-end (para evitar custos
    adicionais).
- [x] Caso o projeto não possa ser implantado, ele deve estar pronto para ser
  executado e instalado em uma máquina Linux Ubuntu 18. O processo de
  avaliação seria:
  - Clone o repositório. (crie o banco de dados local com base no script
    fornecido). Execute front-end e back-end localmente

## Sobre o Projeto
* Tema: Device Management
* Foi utilizado o Bootstrap para tratamento de responsividades e algumas estilizações, como 
também outras dependencias para visualização de gráficos.

* Análise da Modelagem do banco
  ![image](https://user-images.githubusercontent.com/61212740/166649131-0868a659-1d0b-44e5-be6c-c4c74b4ee173.png)

* Páginas
  * Página com Login
    * name: admin
    * password: 1234
  
![pgLogin](https://user-images.githubusercontent.com/61212740/166642460-f24abef5-868f-408e-9347-b74defb428a2.png)

  * Página com o Dashboard
    * Os cards estão relacionados as quantidades de dispositivos, categorias, e as principais categorias por dispositivo.
    * O gráficos são somente implementações
![pgDashboard](https://user-images.githubusercontent.com/61212740/166641754-cbd36ab5-21dc-4862-b69a-4be38982b211.png)

  * Página para gestão de dspositivo
    * O usuário poderá criar, editar, e deletar.

![pgDevices](https://user-images.githubusercontent.com/61212740/166643061-ce4ebfba-95a5-4ff7-a98c-f2a8552b1b17.gif)

  * Página para gestão de categorias
    * O usuário poderá criar, editar, e deletar.

![pgCategory](https://user-images.githubusercontent.com/61212740/166643559-f18e74fd-89f5-4b6e-85eb-a48e48dec66b.gif)

