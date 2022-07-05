# lista-de-tarefas-Ebytr
Este repositório foi criado para abrigar uma aplicação full stack com o back-end e o front-end criado em pastas separadas. Esta é uma lista de tarefas comum, criadas para que os funcionários da Ebytr possam organizar suas tarefas diarias. A aplicação apresenta uma página de login para que os usuários da empresa possam utilizar a aplicação com seus respectivos dados, bem como realizar um cadastro no banco de dados do servidor. 
Qualquer usuário poderá utilizá-lo no seu servidor local, com as seguintes instruções:

- Caso o usuário deseje realizar qualquer alteração no projeto é recomendado que instale a dependência "cz-conventional-changelog" pelo diretório raiz do repositório, assim ele terá uma interface orientando a criação de novos commits. Para acessar esta funcionalidade basta apenas adicionar qualquer alteração no projeto com o comando "git add" e depois utilizar o comando "git cz" para utilizar a ferramenta.

- Caso deseje o usurário poderá desenvolver o projeto e rodar os servidores em containers docker. Para isso basta entrar nas pastas frontend ou backend e utilizar o comando docker compuse up -d que os arquivos docker-compose irão estalar um container node e um container mysql no caso do backend. As pastas tem arquivos docker-compose separados para o caso do usuário querer usar separadamente as aplicações. Para entrar no container node o usuário poderá usar os comandos "docker exec -it api bash" para o backend e "docker exec -it app bash" para o frontend.

- Caso não opte por usar o docker o usuário deverá lembrar de configurar as variaveis env que estão no arquivo docker-compose do backend DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, SERVER_PORT. Sem estas variaveis não será possivel realizar conecção com o banco de dados.

- O Usuário também deverá criar uma variável JWT_SECRET para utilizar o jsonwebtoken.

OBS: este projet ainda está em fase de desenvolvimento no front-end e por isso ainda não tem todas as funcionalidades esperadas.