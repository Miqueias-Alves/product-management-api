# Documentação

## Pré-requisitos

- Node 20.\*
- Docker

## Instruções

1. Clone o projeto em um local desejado.

```bash
git clone https://github.com/Miqueias-Alves/product-management-api.git
```

2. Navegue até pasta 'devops/db-docker-confing' que está dentro da raiz do projeto.

```bash
#Considerando que esteja no terminal na raiz do projeto
cd devops/db-docker-confing

#execute o seguinte comando
docker-compose up -d
```

> Obs: No arquivo 'docker-compose.yml' estão todas as configurações do conteiner (nome e imagem do banco).

3. vá até a raiz do projeto e execute os comandos a seguir.

```bash
#baixa todas as dependencias do projeto
npm install

#roda as migrations para criar toda a estrutura das tabelas no banco de dados
npm run prisma:migrate

#exexuta o projeto
npm run dev
```

> Obs: Esses comandos são scripts que estão dentro do 'package.json'

4. Abra no navegador ou em uma aplicação como (insomnia) para testar.

   [Documentação da API](http://localhost:3000/api-docs)

   [URL BASE](http://localhost:3000/api)

   4 . 1 acesse a rora 'http://localhost:3000/api/auth/login' com os seguintes dados no body.

   ```json
   {
     "user": "root",
     "password": "root"
   }
   ```

   > O resultado da requisição gera o token para que tenha acesso as rotas privadas. Copie e cole o token nos cabeçalhos das requisições.

   Obs: Esse 'login' é apenas para efeito de testes.

## Documentação

[Notion](https://www.notion.so/Tecnologias-utilizadas-para-a-API-22cdf118c3ae4e7e857b862be95be0fc#c844e840f61a45b2bd1346e9d32ff6a5)

> Check Lista com todas as tecnologias utilizadas no projeto

## License

[MIT](https://choosealicense.com/licenses/mit/)
