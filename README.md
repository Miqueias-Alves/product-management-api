# Documentação

## Pré-requisitos

- Node 20.\*
- Docker

## Instruções

1. Clone o projeto em um local desejado.

```bash
git clone https://github.com/Miqueias-Alves/product-management-api.git
```

2. Navgue até pasta 'devops' que está dentro da raiz do projeto.

```bash
#execute o seguinte comando
docker-compose up -d
```

3. vá até a raiz do projeto e execute os comandos a seguir.

```bash
#baixa todas as dependencias do projeto
npm install

#roda as migrations para criar toda a estrutura das tabelas no banco de dados
npm run prisma:migate

#exexuta o projeto
npm run dev
```

4. Abra no navegador ou em uma aplicação como (insomnia) para testar.

   [Documentação da API](http://localhost:3000/api-docs)

   [URL BASE](http://localhost:3000/api)

## License

[MIT](https://choosealicense.com/licenses/mit/)
