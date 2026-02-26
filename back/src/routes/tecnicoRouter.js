const tecnicoRouter = require("express").Router();
const Controller = require("../controllers/TecnicoController");
const Tecnico = require("../database/models/Tecnico");

tecnicoRouter.get("/", Controller.getTecnicos);
tecnicoRouter.get("/mail/:mail", Controller.getUnTecnicoMail);
tecnicoRouter.post("/register", Controller.registro);
tecnicoRouter.post("/login",   Controller.login);


tecnicoRouter.get("/:id", async (req, res) => {
  console.log("llega")
  const tecnico = await Tecnico.findOne({
    where: { id_tecnico: `${req.params.id}` },
  });
  res.json(tecnico);
});




module.exports = tecnicoRouter;
