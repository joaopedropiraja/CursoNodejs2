const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
  body: z.object({
    nome: z.string({ required_error: "Nome do usuário obrigatório" }),
    email: z
      .string({ required_error: "Email do usuário obrigatório" })
      .email("Email inválido"),
    senha: z.string({ required_error: "Senha do usuário obrigatória" }),
    cargo: z.string({ required_error: "Cargo do usuário obrigatório" }),
    status: z.string().optional(),
  }),
});

const update = validateRequest({
  body: z.object({
    nome: z.string().optional(),
    email: z.string().email("Email inválido").optional(),
    senha: z.string().optional(),
    cargo: z.string().optional(),
    status: z.string().optional(),
  }),
  params: z.object({
    id: z.string({ required_error: "ID do usuário é obrigatório" }),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.string({ required_error: "ID do usuário é obrigatório" }),
  }),
});

module.exports = {
  create,
  update,
  destroy,
};
