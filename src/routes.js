const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesController = require("./Controllers/SessoesController");
const UsuarioValidator = require("./Validators/UsuarioValidator");

const rotas = Router();

//USUARIOS
rotas.get("/usuarios", UsuarioController.read);
rotas.post("/usuarios", UsuarioValidator.create, UsuarioController.create);
rotas.put("/usuarios/:id", UsuarioValidator.update, UsuarioController.update);
rotas.delete(
  "/usuarios/:id",
  UsuarioValidator.destroy,
  UsuarioController.delete
);

//SESSOES
rotas.post("/sessoes", SessoesController.create);
rotas.get("/sessoes", SessoesController.read);
rotas.delete("/sessoes/:id", SessoesController.delete);

module.exports = rotas;
