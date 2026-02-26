const imagenRouter = require("express").Router();
const Imagen = require("../database/models/Imagen");
const multer = require("multer");

imagenRouter.get("/:id", async (req, res) => {
  let imagenes = await Imagen.findAll({
    where: { muestraIdMuestra: parseInt(req.params.id) },
  });

  imagenes.forEach((imagen) => {
    imagen.imagen
      ? (imagen.imagen = imagen.imagen.toString("base64"))
      : (imagen.imagen = null);
  });
  res.json(imagenes);
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // límite de tamaño de archivo de 5 MB
  },
});

imagenRouter.post("/", upload.single("imagen"), async (req, res) => {
  let newimage = req.body;

  let imagen = null;
  if (req.file) {
    newimage = { ...newimage, imagen: req.file.buffer };
    imagen = await Imagen.create(newimage);
  }

  res.json(imagen);
});

imagenRouter.delete("/:id", async (req, res) => {
  await Imagen.destroy({
    where: { id_imagen: parseInt(req.params.id) },
  });

  res.json(req.params.id);
});

module.exports = imagenRouter;
