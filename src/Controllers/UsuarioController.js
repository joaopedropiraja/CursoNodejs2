const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController {
  async create(req, res) {
    try {
      const usuario = await UsuarioModel.create(req.body);
      res.status(200).json(usuario);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Algo de errado aconteceu", error: error.message });
    }
  }

  async read(req, res) {
    const usuarios = await UsuarioModel.find();

    return res.status(200).json(usuarios);
  }

  async update(req, res) {
    const { id } = req.params;

    const usuario = await UsuarioModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(200).json(usuario);
  }

  async delete(req, res) {
    const { id } = req.params;

    await UsuarioModel.findByIdAndDelete(id);

    return res.status(200).json({ mensagem: "Usuario deletado com sucesso!" });
  }
}

module.exports = new UsuarioController();
