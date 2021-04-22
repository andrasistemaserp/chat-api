import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

// Tipos de parametros:
// Routes Params => Parâmetros de rotas
// http://localhost:3333/settings/1
// Query Params => filtros e buscas
// http://localhost:3333/settings/1?search=algumacoisa
// Body Params => {
//  
// }

const settingsController = new SettingsController();

routes.get("/", (req, res) => {
  return res.json({message: 'Olá NLW 05!'})
})

routes.post("/settings", settingsController.create)

// app.post("/", (req, res) => {
//   return res.json({message: 'Usuário salvo com sucesso!'})
// })


export { routes };