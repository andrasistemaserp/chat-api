import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io"
import path from "path";

import "./database";
import { routes } from "./routes";

const app = express();

// pra que não seja necessário criar o client (ReactJS), essas 4 linhas abaixo
// irão utilizar as próprias views que existem dentro do nodeJS
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile); //renderizar o arquivo html
app.set("view engine", "html");

//criar a rota pro view
app.get("/pages/client", (req, res) => {
  res.render("html/client.html")
});

const http = createServer(app);  //criando protocolo http
const io = new Server(http); //criando protocolo ws (WebSocket)

io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id)
})

app.use(express.json());

routes.get("/", (req, res) => {
  return res.json({ message: 'Olá NLW 05!' })
})

app.use(routes);

export { http, io };