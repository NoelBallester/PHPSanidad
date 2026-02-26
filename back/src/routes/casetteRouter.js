const casetteRouter = require("express").Router();
const Controller = require("../controllers/CasetteController");
const Casette = require("../database/models/Casette");
const Muestra = require("../database/models/Muestra");
const Imagen = require("../database/models/Imagen");

// Subir imagenes en memoria, para guardar en la
const multer = require("multer");
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // límite de tamaño de archivo de 5 MB
  },
});

// Configurar Multer para manejar la carga de archivos en disco
/* const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
}); */

casetteRouter.post("/", upload.single("imagen"), async (req, res) => {
  let cassette = req.body;

  cassette = { ...cassette, qr_casette: "--c--" + Date.now() };
  // Si no ha seleccionado imagen
  
  if (req.file) {
    cassette = { ...cassette, imagen: req.file.buffer };
  } else {
    cassette = { ...cassette, imagen: null };
  }

  const newcassette = await Casette.create(cassette);
  return newcassette.id_casette;
});

casetteRouter.get("/", Controller.getCasettes);

casetteRouter.get("/index", async (req, res) => {
  const cassettes = await Casette.findAll({
    order: [["fecha", "DESC"]],
    limit: 20,
  });

  res.json(cassettes);
});

// Obtener cassete por qr, hago un findall para que me devuelva un array y aprovechar lo que ya tengo hecho
casetteRouter.get("/cassetteqr/:qr", async (req, res) => {
  const cassettes = await Casette.findAll({
    where: { qr_casette: `${req.params.qr}` },
  });

  // Damos formato a la imagen o devolvemos null si no hya imagen
  cassettes[0].imagen
    ? (cassettes[0].imagen = cassettes[0].imagen.toString("base64"))
    : (cassettes[0].imagen = null);
  return res.json(cassettes);
});

casetteRouter.get("/organo/:organo", Controller.getPorOrgano);
casetteRouter.get("/fecha/:fecha", Controller.getPorFecha);
casetteRouter.get(
  "/fecharango/:fechainicio/:fechafin",
  Controller.getPorFechaRango
);
casetteRouter.get("/:id", Controller.getUnCasette);

casetteRouter.put("/:id", upload.single("imagen"), async (req, res) => {
  let cassette = req.body;
  let oldcassette;

  oldcassette = await Casette.findOne({
    where: { id_casette: `${req.params.id}` },
  });
  cassette = { ...cassette, tecnicoIdTecnico: oldcassette.tecnicoIdTecnico };

  // Comprobamos si hay imagen. CUIDADIN  con los if, que no comparan igual....
/*   req.file
    ? (cassette = { ...cassette, imagen: req.file.buffer })
    : (cassette = { ...cassette, imagen: oldcassette.imagen }); */

  const updatedcassette = await Casette.update(
    {
      fecha: cassette.fecha,
      descripcion: cassette.descripcion,
      caracteristicas: cassette.caracteristicas,
      observaciones: cassette.observaciones,
      organo: cassette.organo,
     /*  imagen: cassette.imagen, */
      tecnicoIdTecnico: cassette.tecnicoIdTecnico,
    },
    {
      where: {
        id_casette: `${req.params.id}`,
      },
    }
  );
  return updatedcassette.id_casette;
});

casetteRouter.delete("/:id", async (req, res) => {
  await Casette.destroy({
    where: { id_casette: parseInt(req.params.id) },
    force: true,
  });

  await Muestra.destroy({
    where: { casetteIDCasette: parseInt(req.params.id) },
    force: true,
  });

/*   await Imagen.destroy({
    where: { muestraIdMuestra: null },
    force: true,
  }); */
  return res.json({ message: "Cassette borrado" });
});

module.exports = casetteRouter;
