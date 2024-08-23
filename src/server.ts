import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from 'express';
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

// Inicializando o servidor
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
