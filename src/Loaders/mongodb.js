const mongoose = require("mongoose");

async function startDB(){
  await mongoose.connect('mongodb+srv://osbarros:hVXb84r9isgr4pp5@cursonode.xgq8ght.mongodb.net/?retryWrites=true&w=majority')
}

module.exports = startDB;