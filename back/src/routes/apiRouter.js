const apirouter = require("express").Router();
const middlewares = require("../middlewares/middlewares");

// Importacion de las distintas rutass
const tecnicorouter = require("./tecnicoRouter");
const casetterouter = require("./casetteRouter");
const muestrarouter = require("./muestraRouter");
const imagenrouter = require("./imagenRouter");

// Uso de las distintas rutas
apirouter.use("/tecnicos", tecnicorouter);
apirouter.use("/cassettes",/*  middlewares.checkToken, */ casetterouter);
apirouter.use("/muestras", middlewares.checkToken, muestrarouter);
apirouter.use("/imagenes", middlewares.checkToken, imagenrouter);

module.exports = apirouter;
