import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./docs/swagger.json";
import routes from "./routes";

// Carrega as variáveis de ambiente
dotenv.config();

// Criando uma instância do express
const app: Express = express();

// Definindo a porta do servidor
const port = process.env.PORT || 4000;

// Middleware para permitir requisições de qualquer origem
app.use(cors());

// Middleware para permitir requisições com corpo JSON
app.use(express.json());

// Middleware para as rotas
app.use("/api", routes);

// Middleware para a documentação da API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Inicializando o servidor
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
