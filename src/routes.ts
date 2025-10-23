import { Router } from "express"; //Importa o módulo Router do express
import type {Request, Response} from "express"; // Importa os módulos de requisição e resposta
import ClienteController from "./controller/ClienteController.js";
import CarroController from "./controller/CarroController.js";

const router = Router();// cria instancia de Router

router.get("/api", (req: Request, res: Response) => {
    res.status(200).json({mensagem: "Olá, seja bem-vindo!"});
});

router.get("/api/clientes", ClienteController.todos);
router.get("/api/carros", CarroController.todos);

export { router };