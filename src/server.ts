import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./config/swagger.json";
import  routes from "./routes/index";
import{ errorMiddleware }  from "./middlewares/erros";
import authRouter from "./routes/authRopute";
import jwt from "jsonwebtoken";

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

// Middleware para tratamento de erros
app.use(errorMiddleware);

// Routas publicas
app.use("/api/auth", authRouter);

// Middleware para a documentação da API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware para verificar o Token
app.use((req, res, next) => {
  const headers = req.headers.authorization;
  const [, token] = headers ? headers.split(" ") : [null, null];

  try {
    if (!token) {
      throw new Error("Token not found");
    }

    const tokenSecret = process.env.TOKEN_SECRET as string;
    jwt.verify(token, tokenSecret);
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalid" });
  }
});

// Middleware para as rotas
app.use("/api", routes);

// Inicializando o servidor
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
