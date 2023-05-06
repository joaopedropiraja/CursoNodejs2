const mongoose = require("mongoose");

async function startDB() {
  await mongoose.connect(
    "mongodb+srv://IZT:sirius2023@izt.s5jrxet.mongodb.net/Curso?retryWrites=true&w=majority"
  );

  console.log("Banco de dados inicializado");
}

module.exports = startDB;
