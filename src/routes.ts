import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

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
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create)
routes.get("/settings/:username", settingsController.findByUsername)
routes.put("/settings/:username", settingsController.update)

routes.post("/users", usersController.create)

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

// app.post("/", (req, res) => {
//   return res.json({message: 'Usuário salvo com sucesso!'})
// })


export { routes };