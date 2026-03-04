const inputCasseteMain = document.getElementById("inputCassete");
const token = sessionStorage.getItem("token");

const body = document.getElementById("body");
const casettes = document.getElementById("tubos_lista");
const muestras = document.getElementById("muestras");
const organos = document.getElementById("tipo_tubos");
const numMuestra = document.getElementById("numTubo");

// Botón Modal modificar datos Usuario
const btnformmodificarUser = document.getElementById("btnformmodificarUser");
const modalupdateUser = document.getElementById("modalupdateUser");
const btnformcerrarmodificarUser = document.getElementById(
  "btnformcerrarmodificarUser"
);

const inputUpdateNombreUser = document.getElementById("inputUpdateNombreUser");
const inputUpdateApellidosUser = document.getElementById(
  "inputUpdateApellidosUser"
);
const inputUpdateCorreoUser = document.getElementById("inputUpdateCorreoUser");
const inputUpdatePass1User = document.getElementById("inputUpdatePass1User");
const inputUpdatePass2User = document.getElementById("inputUpdatePass2User");
const inputUpdateCentroUser = document.getElementById("inputUpdateCentroUser");

const btnborrar = document.getElementById("btnborrar");
const modalnuevoMuestra = document.getElementById("modalnuevaTubo");
const btnformnuevomuestra = document.getElementById("btnformnuevotubo");
const btnformmodificarmuestra = document.getElementById(
  "btnformmodificartubo"
);
const btnformcerrarnuevoMuestra = document.getElementById(
  "btnformcerrarnuevaTubo"
);
const btnformcerrarmodificarMuestraMain = document.getElementById(
  "btnformcerrarmodificarTubo"
);
const btnmodificar = document.getElementById("btnmodificar");
const nuevoMuestraForm = document.getElementById("nuevaTubo");
const nuevaMuestraForm = document.getElementById("nuevaTubo");

const tuboTecnicoId = document.getElementById("tubo__tecnico_id");
const muestraDescripcion = document.getElementById("tubo__descripcion");
const muestraTincion = document.getElementById("tubo__tincion");
const muestraMuestra = document.getElementById("tubo__id");
const muestraFecha = document.getElementById("tubo__fecha");
const muestraObservaciones = document.getElementById(
  "tubo__observaciones"
);

const muestraImagen = document.getElementById("muestra__imagen");
const eliminarMuestraModal = document.getElementById("eliminarMuestraModal");

// Detalle Muestra
let currentMuestraId = null;
const btnGuardarInforme = document.getElementById("btnGuardarInforme");
const btn__imprimrqr = document.getElementById("btn__imprimirqr");

// Modal qr
const imgmuestra__qr = document.getElementById("imgmuestra__qr");
const inputmuestra__qr = document.getElementById("inputmuestra__qr");

// Todos los bioquimica
const todosMuestras = document.getElementById("todosTubos");

// Nuevo Cassete
const inputFecha = document.getElementById("inputFecha");
const inputDescripcion = document.getElementById("inputDescripcion");
const inputNumMuestra = document.getElementById("inputNumMuestra");
const inputCaracteristicas = document.getElementById("inputCaracteristicas");
const inputObservaciones = document.getElementById("inputObservaciones");
const inputClinica = document.getElementById("inputClinica");
const inputMicroscopia = document.getElementById("inputMicroscopia");
const inputDiagnostico = document.getElementById("inputDiagnostico");
const inputPatologo = document.getElementById("inputPatologo");
const inputSelect = document.getElementById("inputSelect");
const inputImagenes = document.getElementById("inputImagenes");

// Modificar Bioquímica
const modalupdateMuestra = document.getElementById("modalmodificarTubo");

const inputDescripcionUpdate = document.getElementById(
  "inputmodificardescripcionTubo"
);
const inputTipoUpdate = document.getElementById("inputmodificartipoTubo");
const inputFechaUpdate = document.getElementById("inputmodificarfechaTubo");
const inputSelectUpdate = document.getElementById("selectTincionTubo_mod"); // Need to check this
const inputCitologiaUpdate = document.getElementById("inputmodificarMuestraTubo");
const inputCaracteristicasUpdate = document.getElementById(
  "inputmodificarcaracteristicasTubo"
);
const inputObservacionesUpdate = document.getElementById(
  "inputmodificarobservacionesTubo"
);
const modificarMuestraForm = document.getElementById("modificarTubo");

// Crear una muestra
const btnformnuevaMuestra = document.getElementById("btnformnuevaMuestra");
const btnformcerrarnuevaMuestra = document.getElementById(
  "btnformcerrarnuevaMuestra"
);

const modalnuevaMuestra = document.getElementById("modalnuevaMuestra");

// Nueva Muestra
const inputdescripcionMuestra = document.getElementById(
  "inputdescripcionMuestra"
);
const inputFechaMuestra = document.getElementById("inputFechaMuestra");
const selectTincionMuestra = document.getElementById("selectTincionMuestra");
const inputObservacionesMuestra = document.getElementById(
  "inputObservacionesMuestra"
);
const inputImagenesMuestra = document.getElementById("inputImagenesMuestra");

// Detalle Muestra
const muestra__descripcion = document.getElementById("muestra__descripcion");
const muestra__fecha = document.getElementById("muestra__fecha");
const muestra__observaciones = document.getElementById(
  "muestra__observaciones"
);
const muestra__tincion = document.getElementById("muestra__tincion");

const muestra__img = document.getElementById("muestra__img");
const btncerrardetalleMuestra = document.getElementById(
  "btncerrardetalleMuestra"
);

// Modificar Muestra
const modMuestraElement = document.getElementById("modificarMuestra");
const modalmodificarMuestra = document.getElementById("modalmodificarMuestra");
const modaldetalleMuestra = document.getElementById("modaldetalleTubo");
const btnformmodificarMuestra = document.getElementById(
  "btnformmodificarmuestra"
);
const btnformcerrarmodificarMuestraDetalle = document.getElementById(
  "btnformcerrarmodificarMuestra"
);

// Datos para modicar una muestra
const inputmodificardescripcionMuestra = document.getElementById(
  "inputmodificardescripcionMuestra"
);

const inputmodificarfechaMuestra = document.getElementById(
  "inputmodificarfechaMuestra"
);

const selectmodificartincionMuestra = document.getElementById(
  "selectmodificartincionMuestra"
);

const inputmodificarobservacionesMuestra = document.getElementById(
  "inputmodificarobservacionesMuestra"
);
// Borrar Muestra
const btnborrarmuestra = document.getElementById("btnborrarmuestra");

// Borrar Imagen Muestra
const btnborrarimagenmuestra = document.getElementById(
  "btnborrarimagenmuestra"
);

const qrMuestraModal = document.getElementById("qrMuestraModal");
const imgmuestra__qr_detalle = document.getElementById("imgmuestra__qr");
const inputmuestra__qr_detalle = document.getElementById("inputmuestra__qr");
const btn__imprimirqrmuestra = document.getElementById(
  "btn__imprimirqrmuestra"
);

// Consutar por código qr
const btn__consultarqr = document.getElementById("btn__consultarqr");
const input__consultarqr = document.getElementById("input__consultarqr");
const qrConsultaModal = document.getElementById("qrConsultaModal");
let mimodal = new bootstrap.Modal(document.getElementById("qrConsultaModal"));

// Fecha inicio fin para consultas
const fechainicio = document.getElementById("fechainicio");
const fechafin = document.getElementById("fechafin");

// Alert error
const alertmuestra = document.getElementById("alertmuestra");
const alertfecha = document.getElementById("alertfecha");
const alertfecha_text = document.getElementById("alertfecha_text");

// id del cassete de trabajo
let muestraId = null;

// qr cassete
let muestraqr = null;

// id muestra cassete
let subMuestraId = null;

// id imagene seleccionada
let imageId = null;

const files = document.getElementById("files");

// Carga Muestras al inicio
const cargarMuestrasIndex = async () => {
  return await fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "cargarMuestrasIndex",
    }),
  }).then((data) => data.json());
};

// Crear Muestras
const crearMuestra = (event) => {
  event.preventDefault(); // evita que se envie el formulario y por tanto que se recargue la página

  fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      accion: "crearMuestra",

      fecha: inputFecha.value,
      descripcion: inputDescripcion.value,
      caracteristicas: inputCaracteristicas.value,
      observaciones: inputObservaciones.value,
      clinica: inputClinica.value,
      microscopia: inputMicroscopia.value,
      diagnostico: inputDiagnostico.value,
      patologo: inputPatologo.value,
      tecnicoIdTecnico: sessionStorage.getItem("tecnico_id"),
      organo: inputSelect.value,
    }),
  }).then((response) => response.json());
  location.href = "bioquimica.html";
};

// Carga todos lo bioquimica desde el botón
const cargarTodosMuestras = async () => {
  return await fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "cargarTodosMuestras",
    }),
  }).then((data) => data.json());
};

// Carga el detalle del muestra seleccionado
const cargarMuestra = async (muestraId) => {
  return await fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "cargarMuestraId",
      muestraId: muestraId,
    }),
  }).then((data) => data.json());
};

// Obtener bioquimica por organo
const cargarPorOrgano = async () => {
  return await fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "bioquimicaOrgano",
      organo: organos.value,
    }),
  })
    .then((data) => data.json())
    .catch((error) => console.log("No se esta ejecutando" + error));
};

// Obtener bioquimica por número de muestra
const cargarPorNumero = async () => {
  return await fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "bioquimicaNumero",
      num_muestra: numMuestra.value,
    }),
  })
    .then((data) => data.json())
    .catch((error) => console.log("No se esta ejecutando" + error));
};

// Obtener bioquimica por fecha
const obtenerMuestrasFecha = async (fechainicio) => {
  const response = await fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "bioquimicaFecha",
      fecha: fechainicio,
    }),
  });
  return await response.json();
};

// Obtener bioquimica por rango de fechas
const obtenerMuestrasFechaRango = async (fechainicio, fechafin) => {
  const response = await fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "bioquimicaRangoFechas",

      fechainicio: fechainicio,
      fechafin: fechafin,
    }),
  });

  return await response.json();
};

// Borrar un muestra
const borrarMuestra = () => {
  fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "borrarMuestra",

      muestraId: muestraId,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
  location.href = "bioquimica.html";
};

// Consulta bioquimica en una fecha
const consultaFechaInicio = async () => {
  alertfecha.classList.add("ocultar");
  let respuesta;
  if (!fechafin.value) {
    respuesta = await obtenerMuestrasFecha(fechainicio.value);
  } else {
    if (new Date(fechainicio.value) > new Date(fechafin.value)) {
      alertfecha.classList.add("ocultar");
      alertfecha_text.textContent = "La fecha de inicio debe ser menor";
      alertfecha.classList.remove("ocultar");
    } else {
      alertfecha.classList.add("ocultar");
      respuesta = await obtenerMuestrasFechaRango(
        fechainicio.value,
        fechafin.value
      );
    }
  }
  imprimirCasettes(respuesta, false);
};

// Consulta bioquimica entre dos fechas
const consultaFechaFin = async () => {
  if (!fechainicio.value) {
    alertfecha_text.textContent = "Seleccione una fecha de inicio";
    alertfecha.classList.remove("ocultar");
  } else {
    if (new Date(fechainicio.value) > new Date(fechafin.value)) {
      alertfecha.classList.add("ocultar");
      alertfecha_text.textContent = "La fecha de inicio debe ser menor";
      alertfecha.classList.remove("ocultar");
    } else {
      alertfecha.classList.add("ocultar");
      const respuesta = await obtenerMuestrasFechaRango(
        fechainicio.value,
        fechafin.value
      );
      imprimirCasettes(respuesta, false);
    }
  }
};

// Muestra los datos de los bioquimica por pantalla
const imprimirCasettes = (respuesta, rebuildDropdown = true) => {
  casettes.innerHTML = "";
  if (rebuildDropdown) {
    numMuestra.innerHTML = "<option disabled selected>Nº Tubo</option>";
  }

  let fragmento = document.createDocumentFragment();
  let fragmentselect = document.createDocumentFragment();
  if (respuesta.length > 0) {
    respuesta.map((casete) => {
      // Para cargar los números de muestra
      let option = document.createElement("OPTION");
      option.textContent = casete.muestra;
      fragmentselect.appendChild(option);

      // Para mostrar los bioquimica
      let tr = document.createElement("tr");
      tr.classList.add("table__row");

      // Número de Muestra
      let nmuestra = document.createElement("td");
      nmuestra.textContent = casete.muestra;

      let fecha = document.createElement("td");
      let nuevafecha_val = casete.fecha;

      fecha.textContent =
        nuevafecha_val.substring(8) +
        "-" +
        nuevafecha_val.substring(5, 7) +
        "-" +
        nuevafecha_val.substring(0, 4);
      let descripcion = document.createElement("td");
      descripcion.textContent = casete.descripcion.substring(0, 50);
      descripcion.title = casete.descripcion;

      let organo = document.createElement("td");
      organo.textContent = casete.tipo_muestra;

      let btndetalle = document.createElement("I");
      btndetalle.className =
        "d-inline-block muestra__icon fa-solid fa-file-invoice muestra__icon--infomuestra";
      btndetalle.dataset.id = casete.id_muestra;
      btndetalle.title = "Detalle Muestra";

      let btnCont = document.createElement("td");
      btnCont.appendChild(btndetalle);

      tr.appendChild(nmuestra);
      tr.appendChild(fecha);
      tr.appendChild(descripcion);
      tr.appendChild(organo);
      tr.appendChild(btnCont);

      fragmento.appendChild(tr);
    });
  } else {
    let tr = document.createElement("span");
    tr.classList.add(
      "d-flex",
      "justify-content-center",
      "fw-bold",
      "text-danger",
      "text-opacity-50"
    );
    tr.textContent = "No se ha encontrado nigún muestra";
    fragmento.appendChild(tr);
  }

  casettes.appendChild(fragmento);
  if (rebuildDropdown) {
    numMuestra.appendChild(fragmentselect);
  }
};

//Peticiones de Muestra y Muestras al seleccionar un Muestra y llama a
// mostrar bioquimica y mostrar muestras
const detalleMuestra = async (event) => {
  const icon = event.target.closest("i.fa-file-invoice");
  if (icon) {
    alertmuestra.classList.add("ocultar");
    muestraId = icon.dataset.id;

    let respuesta = await cargarMuestra(muestraId);
    imprimirDataMuestra(respuesta);

    respuesta = await cargarMuestras(muestraId);
    imprimirMuestras(respuesta);

    // Mostrar el panel de detalles
    if (modaldetalleMuestra) {
      modaldetalleMuestra.classList.add("showmodal");
      modaldetalleMuestra.classList.remove("hidemodal");
    }
  }

  if (event.target.closest("i.fa-trash-can")) {
    console.log("trash", event.target.closest("i.fa-trash-can").dataset.id);
  }
};

// Muestra el detalle de un muestra
const imprimirDataMuestra = (respuesta) => {
  if (tuboTecnicoId) tuboTecnicoId.textContent = respuesta.tecnicoIdTecnico || "Desconocido";
  if (muestraDescripcion) muestraDescripcion.textContent = respuesta.descripcion.substring(0, 50);
  muestraOrgano.textContent = respuesta.organo;
  muestraMuestra.textContent = respuesta.muestra;

  // Formato Fecha
  let nuevafecha_val = respuesta.fecha;
  muestraFecha.textContent =
    nuevafecha_val.substring(8) +
    "-" +
    nuevafecha_val.substring(5, 7) +
    "-" +
    nuevafecha_val.substring(0, 4);

  muestraCaracteristicas.textContent = respuesta.caracteristicas;
  muestraObservaciones.textContent = respuesta.observaciones;
  muestraInformeDescripcion.value = respuesta.informe_descripcion || "";
  muestraInformeFecha.value = respuesta.informe_fecha || "";
  muestraInformeTincion.value = respuesta.informe_tincion || "";
  muestraInformeObservaciones.value = respuesta.informe_observaciones || "";
  // muestraInformeImagen handling would require image logic depending on how it's sent
  currentMuestraId = respuesta.id_casette;

  // Le paso la imagen al visor de imagenes
  // Si tiene o no imagen
  respuesta.imagen
    ? (muestraImagen.src = `data:image/jpeg;base64,${respuesta.imagen}`)
    : (muestraImagen.src = "./assets/images/no_disponible.jpg");

  inputmuestra__qr.style.display = "none";
  inputmuestra__qr.focus();

  // generamos el codigo QR
  new QRious({
    element: document.querySelector("#imgmuestra__qr"),
    value: respuesta.qr_casette, // La URL o el texto
    size: 70,
    backgroundAlpha: 0, // 0 para fondo transparente
    foreground: "#4ca0cc", // Color del QR
    level: "H", // Puede ser L,M,Q y H (L es el de menor nivel, H el mayor)
  });
};

//Saca por impresora codigo QR
const imprimirQR = (elemento) => {
  let qrimprimir;
  if (elemento == "muestra") {
    qrimprimir = imgmuestra__qr.src;
  } else {
    // Por si acaso ;)
    if (elemento == "muestra") {
      qrimprimir = imgmuestra__qr.src;
    }
  }

  let printWindow = window.open("", "Imprimir imagen");
  printWindow.document.write(
    "<html><head><title>Imprimir imagen</title></head><body><img src='" +
    qrimprimir +
    "'></body></html>"
  );
  printWindow.print();
  printWindow.close();
};

// Cargamos el modal datos cassete modificar
const cargarMuestraUpdateModal = async (event) => {
  if (!muestraId) {
    if (event) event.preventDefault();
    alertmuestra.classList.remove("ocultar");
  } else {
    let muestraData = await cargarMuestra(muestraId);
    inputDescripcionUpdate.value = muestraData.descripcion;
    inputCitologiaUpdate.value = muestraData.muestra;
    inputFechaUpdate.value = muestraData.fecha;
    inputTipoUpdate.value = muestraData.tipo_muestra;
    inputCaracteristicasUpdate.value = muestraData.caracteristicas;
    inputObservacionesUpdate.value = muestraData.observaciones;
    // Bioquímica specific fields
    inputClinica.value = muestraData.informacion_clinica || "";
    inputMicroscopia.value = muestraData.descripcion_microscopica || "";
    inputDiagnostico.value = muestraData.diagnostico_final || "";
    inputPatologo.value = muestraData.patologo_responsable || "";
    // inputSelectUpdate.value = muestraData.tincion; // Bioquímica uses tincion?
  }
};

const modificarMuestraUpdate = async (event) => {
  event.preventDefault();
  await fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "modificarMuestra",

      muestraId: muestraId,

      muestra: inputCitologiaUpdate.value,
      fecha: inputFechaUpdate.value,
      descripcion: inputDescripcionUpdate.value,
      caracteristicas: inputCaracteristicasUpdate.value,
      observaciones: inputObservacionesUpdate.value,
      tipo_muestra: inputTipoUpdate.value,
      clinica: inputClinica.value,
      microscopia: inputMicroscopia.value,
      diagnostico: inputDiagnostico.value,
      patologo: inputPatologo.value,
      tecnicoIdTecnico: sessionStorage.getItem("tecnico_id"),
    }),
  })
    .then((response) => {
      if (response.ok) {
        location.href = "bioquimica.html";
      }
    })

    .catch((error) => console.log(error));
};

// MUESTRAS

// Carga Muestras de un Muestra
const cargarMuestras = async (muestraId_val) => {
  return await fetch("modelo/muestras/muestras.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "cargarMuestras",
      muestraId: muestraId_val,
    }),
  }).then((data) => data.json());
};

// Crear nueva muestra (detalle/imagen)
const crearMuestraDetalle = async (event) => {
  event.preventDefault();

  // SI QUEREMOS GUARDAR UNA IMAGEN CON PDO NECESITAMOS UN FormData
  let newMuestra = new FormData();
  newMuestra.append("accion", "crearMuestra");
  newMuestra.append("descripcion", inputdescripcionMuestra.value);
  newMuestra.append("fecha", inputFechaMuestra.value);
  newMuestra.append("observaciones", inputObservacionesMuestra.value);
  newMuestra.append("tincion", selectTincionMuestra.value);
  newMuestra.append("imagen", inputImagenesMuestra.files[0]);
  newMuestra.append("muestraIdMuestra", muestraId);

  await fetch("modelo/muestras/muestrasimagenes.php", {
    method: "POST",
    body: newMuestra,
  })
    .then(async () => {
      modalnuevaMuestra.classList.remove("showmodal");
      modalnuevaMuestra.classList.add("hidemodal");
      limpiarModalMuestra();
      imprimirMuestras(await cargarMuestras(muestraId));
    })
    .catch((error) =>
      console.log("No se esta ejecutando correctamente la inserción" + error)
    );
};

const limpiarModalMuestra = () => {
  inputdescripcionMuestra.value = "";
  inputFechaMuestra.value = "";
  inputObservacionesMuestra.value = "";
  selectTincionMuestra.value = "";
  inputImagenesMuestra.value = "";
};

// Cargamos el modal datos muestra a modificar
const cargarMuestraDetalleUpdateModal = async (event) => {
  if (!muestraId) {
    if (event) event.preventDefault();
    alertmuestra.classList.remove("ocultar");
  } else {
    const response = await fetch("modelo/muestras/muestras.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accion: "cargarMuestra",
        muestraId: muestraId,
      }),
    });

    let muestraData = await response.json();
    inputmodificardescripcionMuestra.value = muestraData.descripcion;
    inputmodificarfechaMuestra.value = muestraData.fecha;
    selectmodificartincionMuestra.value = muestraData.tincion;
    inputmodificarobservacionesMuestra.value = muestraData.observaciones;
  }
};

// Modificar muestra
const modificarMuestraDetalleUpdate = async (event) => {
  event.preventDefault();

  await fetch("modelo/muestras/muestras.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "modificarMuestra",

      muestraId: muestraId,

      fecha: inputmodificarfechaMuestra.value,
      descripcion: inputmodificardescripcionMuestra.value,
      observaciones: inputmodificarobservacionesMuestra.value,
      tincion: selectmodificartincionMuestra.value,
    }),
  })
    .then(async () => {
      // Actualizamos los datos del detalle de la muestra
      muestra__descripcion.textContent = inputmodificardescripcionMuestra.value;
      let nuevafecha_val = inputmodificarfechaMuestra.value;
      muestra__fecha.textContent =
        nuevafecha_val.substring(8) +
        "-" +
        nuevafecha_val.substring(5, 7) +
        "-" +
        nuevafecha_val.substring(0, 4);

      muestra__observaciones.textContent =
        inputmodificarobservacionesMuestra.value;
      muestra__tincion.textContent = selectmodificartincionMuestra.value;

      // Mostramos las muestras para que se actulicen los cambios
      let respuesta = await cargarMuestras(muestraId);
      imprimirMuestras(respuesta);
    })

    .catch((error) => console.log(error));

  // Ocultamos el modal de modificación
  modalmodificarMuestra.classList.remove("showmodal");
};

// Imprimir muestras
const imprimirMuestras = (respuesta) => {
  muestras.innerHTML = "";

  let fragmento = document.createDocumentFragment();
  if (respuesta.length > 0) {
    respuesta.forEach((muestra) => {
      let tr = document.createElement("tr");

      tr.classList.add("table__row");
      let descripcion = document.createElement("td");
      descripcion.textContent = muestra.descripcion.substring(0, 80);
      descripcion.title = muestra.descripcion;

      let fecha = document.createElement("td");
      let nuevafecha_val = muestra.fecha;
      fecha.textContent =
        nuevafecha_val.substring(8) +
        "-" +
        nuevafecha_val.substring(5, 7) +
        "-" +
        nuevafecha_val.substring(0, 4);

      let tincion = document.createElement("td");
      tincion.textContent = muestra.tincion;

      let btn = document.createElement("td");
      let btndetalle = document.createElement("I");
      btndetalle.className =
        "d-inline-block muestra__icon fa-solid fa-file-invoice muestra__icon--infomuestra";
      btndetalle.dataset.id = muestra.id_muestra;
      btndetalle.title = "Detalle Muestra";
      btn.appendChild(btndetalle);

      tr.appendChild(fecha);
      tr.appendChild(descripcion);
      tr.appendChild(tincion);
      tr.appendChild(btn);

      fragmento.appendChild(tr);
    });
  } else {
    let tr = document.createElement("span");
    tr.classList.add("fw-bold", "text-danger", "text-opacity-50");
    tr.textContent = "No se ha encontrado ninguna muestra";
    fragmento.appendChild(tr);
  }
  muestras.appendChild(fragmento);
};

// Obtenemos una muestra
const cargarMuestraDetalle = async (muestraid) => {
  const response = await fetch("modelo/muestras/muestras.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "cargarMuestra",
      muestraId: muestraid,
    }),
  });
  return await response.json();
};

// Obtenemos las imagenes de una muestra
const obtenerImagenesMuestra = async (muestraid) => {
  const response = await fetch("modelo/imagenes/imagenes.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "cargarImagenesMuestra",
      muestraId: muestraid,
    }),
  });
  let imagenes = await response.json();
  return imagenes;
};

// rellenamos los datos texto de la muestra
const rellenarDatosMuestra = async (muestra) => {
  muestra__descripcion.textContent = muestra.descripcion.substring(0, 60);
  muestra__descripcion.title = muestra.descripcion;

  let nuevafecha_val = muestra.fecha;
  muestra__fecha.textContent =
    nuevafecha_val.substring(8) +
    "-" +
    nuevafecha_val.substring(5, 7) +
    "-" +
    nuevafecha_val.substring(0, 4);

  muestra__observaciones.textContent = muestra.observaciones;
  muestra__tincion.textContent = muestra.tincion;
};

const mostrarImagenesMuestra = async (muestaId_val) => {
  muestra__img.innerHTML = "";
  let imagenes = await obtenerImagenesMuestra(muestraId);
  // Imagen de sustitución si no hay imagenes para una muestra
  if (imagenes.length == 0) {
    if (typeof visor__img !== 'undefined') visor__img.src = "./assets/images/no_disponible.jpg";
  } else {
    imagenes.forEach((imagen, index) => {
      let newimg = document.createElement("IMG");
      newimg.id = imagen.id_imagen;
      newimg.src = `data:image/jpeg;base64,${imagen.imagen}`;

      newimg.classList.add("muestra__img");

      if (index == 0) {
        if (typeof visor__img !== 'undefined') visor__img.src = newimg.src;
        imageId = newimg.id;
      }

      // Añadimos cada una de las imagenes
      let newdiv = document.createElement("DIV");
      newdiv.classList.add("container__muestraimg", "border", "m-1");
      newdiv.appendChild(newimg);
      muestra__img.appendChild(newdiv);
    });
  }
};

const borrarMuestraDetalle = async () => {
  fetch("modelo/muestras/muestras.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "borrarMuestra",
      muestraId: muestraId,
    }),
  })
    .then(async () => {
      modaldetalleMuestra.classList.remove("showmodal");
      // Mostramos las muestras del muestra
      let muestrasData = await cargarMuestras(muestraId);
      imprimirMuestras(muestrasData);
    })
    .catch((error) => console.log(error));
};

const borrarImagenMuestra = async () => {
  if (imageId != undefined) {
    fetch("modelo/imagenes/imagenes.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accion: "borrarImagen",
        imageId: imageId,
      }),
    }).then(() => {
      mostrarImagenesMuestra(muestraId);
    });
  }
};

// Mostramos Detalle muestra seleccionada
const detailMuestra = async (muestraid) => {
  // Cargamos la muestra
  let muestraData = await cargarMuestra(muestraid);
  muestraId = muestraData.id_muestra;
  rellenarDatosMuestra(muestraData);

  // generamos el codigo QR
  new QRious({
    element: imgmuestra__qr,
    value: muestraData.qr_muestra, // La URL o el texto
    size: 70,
    backgroundAlpha: 0, // 0 para fondo transparente
    foreground: "#4ca0cc", // Color del QR
    level: "H", // Puede ser L,M,Q y H (L es el de menor nivel, H el mayor)
  });

  // Mostramos las imagenes de la muestra seleccionada
  mostrarImagenesMuestra(muestraId);

  modaldetalleMuestra.classList.add("showmodal");
  modaldetalleMuestra.classList.remove("hidemodal");
};

// Añadir una imagen a la muestra
const aniadirImagenMuestra = async () => {
  try {
    // Abrir el cuadro de para seleccionar un archivo,
    // Puede fallar con algún navegador.... con chrome, edge sin problemas
    const [fileHandle] = await window.showOpenFilePicker({
      types: [
        {
          description: "Imágenes",
          accept: { "image/*": [".png", ".gif", ".jpeg", ".jpg"] },
        },
      ],
    });
    const file = await fileHandle.getFile();

    let newImage = new FormData();
    newImage.append("accion", "crearImagenMuestra");
    newImage.append("imagen", file);
    newImage.append("muestraIdMuestra", muestraId);

    fetch("modelo/muestras/muestrasimagenes.php", {
      method: "POST",
      body: newImage,
    }).then(async () => {
      await mostrarImagenesMuestra(muestraId);
    });
  } catch (err) {
    console.error(err);
  }
};

const consultarMuestraQR = async (qr) => {
  const response = await fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      accion: "cargarMuestraQR",
      qr: qr,
    }),
  });
  let muestraData = await response.json();

  // Mostrar los datos del muestra
  imprimirCasettes(muestraData);
  // Obtenemos un array, pq nos viene bien para la consulta de bioquimica que espera un array
  //Obtenemos el primero, aunque sólo nos devuelve uno, para la consulta de un muestra
  let primeraMuestra = muestraData[0];

  // Mostramos el detalle del muestra
  imprimirDataMuestra(primeraMuestra);

  // Mostramos las muestras del muestra
  muestraId = primeraMuestra.id_casette;
  let muestrasData = await cargarMuestras(muestraId);
  imprimirMuestras(muestrasData);
};

const consultarMuestraDetalleQR = async (qr) => {
  // Obtengo la muestra para obtener el id del muestra
  let response = await fetch("modelo/muestras/muestras.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "cargarMuestraQR",
      qr: qr,
    }),
  });
  let muestraDetalleArray = await response.json();
  let muestraDetalle = muestraDetalleArray[0];
  // Obtengo el muestra de la muestra
  response = await fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "cargarMuestraId",
      muestraId: muestraDetalle.muestraIdMuestra,
    }),
  });
  // Mostramos el cassete de la muestra
  let muestraData = await response.json();
  consultarMuestraQR(muestraData.qr_casette);
  detailMuestra(muestraDetalle.id_muestra);
};

// Cargamos el modal datos cassete modificar
const cargarUserUpdateModal = async (event) => {
  let userId = sessionStorage.getItem("tecnico_id");
  const response = await fetch(
    "modelo/tecnicos/tecnicos.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accion: "cargarTecnicoId",
        id_tecnico: userId,
      }),
    }
  );

  let user = await response.json();

  inputUpdateNombreUser.value = user.name;
  inputUpdateApellidosUser.value = user.apellidos;
  inputUpdateCentroUser.value = user.centro;
  inputUpdateCorreoUser.value = user.email;
};
// Eventos

// Modificar Usuario
if (btnformmodificarUser) {
  btnformmodificarUser.addEventListener("click", () => {
    cargarUserUpdateModal();
    if (!modalupdateUser.classList.contains("showmodal")) {
      modalupdateUser.classList.add("showmodal");
      modalupdateUser.classList.remove("hidemodal");
    }
  });
}

if (btnformcerrarmodificarUser) {
  btnformcerrarmodificarUser.addEventListener("click", () => {
    if (!modalupdateUser.classList.contains("hidemodal")) {
      modalupdateUser.classList.add("hidemodal");
      modalupdateUser.classList.remove("showmodal");
    }
  });
}

// Consulta Muestras Recientes
document.addEventListener("DOMContentLoaded", async () => {
  body.style.display = "block";
  const respuesta = await cargarMuestrasIndex();
  imprimirCasettes(respuesta);
  let fechaActual = new Date().toISOString().split("T")[0];
  // Para que no se pueda seleccionar una fecha anterior a la actual
  inputFecha.setAttribute("min", fechaActual);
  inputFechaUpdate.setAttribute("min", fechaActual);
  inputFechaMuestra.setAttribute("min", fechaActual);
});

// Consulta por Organo
organos.addEventListener("change", async () => {
  const respuesta = await cargarPorOrgano();
  imprimirCasettes(respuesta, false);
});

// Consulta por Número de Muestra
numMuestra.addEventListener("change", async () => {
  const respuesta = await cargarPorNumero();
  // Solicitud del usuario: filtrar la tabla pero NO el desplegable de arriba
  imprimirCasettes(respuesta, false);
});

// Consulta Detalle Cassete y Muestras
casettes.addEventListener("click", detalleMuestra);

// Consulta por fecha
fechainicio.addEventListener("change", consultaFechaInicio);

fechafin.addEventListener("change", consultaFechaFin);

// Todos los bioquimica
todosMuestras.addEventListener("click", async () => {
  const respuesta = await cargarTodosMuestras();
  imprimirCasettes(respuesta);
});

// Crear Muestra
btnformnuevomuestra.addEventListener("click", () => {
  if (!modalnuevoMuestra.classList.contains("showmodal")) {
    modalnuevoMuestra.classList.add("showmodal");
    modalnuevoMuestra.classList.remove("hidemodal");
  }
});

btnformcerrarnuevoMuestra.addEventListener("click", () => {
  if (!modalnuevoMuestra.classList.contains("hidemodal")) {
    modalnuevoMuestra.classList.add("hidemodal");
    modalnuevoMuestra.classList.remove("showmodal");
  }
});

nuevoMuestraForm.addEventListener("submit", crearMuestra);

// Modificar Muestra
btnformmodificarmuestra.addEventListener("click", () => {
  if (!muestraId) {
    alertmuestra.classList.remove("ocultar");
  } else {
    cargarMuestraUpdateModal();
    if (!modalupdateMuestra.classList.contains("showmodal")) {
      modalupdateMuestra.classList.add("showmodal");
      modalupdateMuestra.classList.remove("hidemodal");
    }
  }
});

btnformcerrarmodificarMuestraMain.addEventListener("click", () => {
  if (!modalupdateMuestra.classList.contains("hidemodal")) {
    modalupdateMuestra.classList.add("hidemodal");
    modalupdateMuestra.classList.remove("showmodal");
  }
});

modificarMuestraForm.addEventListener("submit", modificarMuestraUpdate);

// Borrar Muestra
eliminarMuestraModal.addEventListener("show.bs.modal", (event) => {
  // comprobamos si ha seleccionado un muestra
  if (!muestraId) {
    event.preventDefault();
    alertmuestra.classList.remove("ocultar");
  }
});

btnborrar.addEventListener("click", borrarMuestra);

// mostrar modal imagen muestra
if (typeof imagenMuestraModal !== 'undefined') {
  imagenMuestraModal.addEventListener("show.bs.modal", (event) => {
    // comprobamos si ha seleccionado un muestra
    if (!muestraId) {
      event.preventDefault();
      alertmuestra.classList.remove("ocultar");
    }
  });
}

// mostrar modal qr muestra
qrMuestraModal.addEventListener("show.bs.modal", (event) => {
  inputmuestra__qr.style.display = "none";
  inputmuestra__qr.focus();
});

// mostrar modal qr muestra (second listener, consolidated)
qrMuestraModal.addEventListener("show.bs.modal", (event) => {
  // comprobamos si ha seleccionado un muestra
  if (!muestraId) {
    event.preventDefault();
    alertmuestra.classList.remove("ocultar");
    inputmuestra__qr_detalle.focus();
  }
});

// Crear Muestra
btnformnuevaMuestra.addEventListener("click", () => {
  if (!muestraId) {
    alertmuestra.classList.remove("ocultar");
  } else {
    if (!modalnuevaMuestra.classList.contains("showmodal")) {
      modalnuevaMuestra.classList.add("showmodal");
      modalnuevaMuestra.classList.remove("hidemodal");
    }
  }
});

btnformcerrarnuevaMuestra.addEventListener("click", () => {
  if (!modalnuevaMuestra.classList.contains("hidemodal")) {
    modalnuevaMuestra.classList.add("hidemodal");
    modalnuevaMuestra.classList.remove("showmodal");
  }
});

btncerrardetalleMuestra.addEventListener("click", () => {
  if (!modaldetalleMuestra.classList.contains("hidemodal")) {
    modaldetalleMuestra.classList.add("hidemodal");
    modaldetalleMuestra.classList.remove("showmodal");
  }
  muestra__img.innerHTML = "";
});

nuevaMuestraForm.addEventListener("submit", crearMuestraDetalle);

// Modificar Muestra
btnformmodificarMuestra.addEventListener("click", () => {
  if (!muestraId) {
    alertmuestra.classList.remove("ocultar");
  } else {
    cargarMuestraDetalleUpdateModal();
    if (!modalmodificarMuestra.classList.contains("showmodal")) {
      modalmodificarMuestra.classList.add("showmodal");
      modalmodificarMuestra.classList.remove("hidemodal");
    }
  }
});

btnformcerrarmodificarMuestraDetalle.addEventListener("click", () => {
  if (!modalmodificarMuestra.classList.contains("hidemodal")) {
    modalmodificarMuestra.classList.add("hidemodal");
    modalmodificarMuestra.classList.remove("showmodal");
  }
});

// modMuestraElement.addEventListener("submit", modificarMuestraDetalleUpdate); // Fixed below

// Consulta Detalle Muestras
muestras.addEventListener("click", (event) => {
  if (event.target.nodeName == "I") {
    detailMuestra(event.target.dataset.id);
  }
});

// Visualizamos la imagen seleccionada
muestra__img.addEventListener("click", async (event) => {
  if (event.target.nodeName === "IMG") {
    if (typeof visor__img !== 'undefined') visor__img.src = event.target.src;
    imageId = event.target.id;
  }
  if (event.target.nodeName === "I") aniadirImagenMuestra();
});
inputmuestra__qr.value = "";
input__consultarqr.value = "";

// Lectura codigo qr
qrMuestraModal.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    consultarMuestraDetalleQR(inputmuestra__qr_detalle.value);
    inputmuestra__qr_detalle.value = "";
  } else {
    inputmuestra__qr.value += event.key;
  }
});

qrConsultaModal.addEventListener("show.bs.modal", () => {
  input__consultarqr.style.display = "none";
  input__consultarqr.focus();
});

// Consulta por QR tanto de Muestra como de Muestra
qrConsultaModal.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let tipo = input__consultarqr.value.substring(0, 5);
    if (tipo === "--c--") {
      consultarMuestraQR(input__consultarqr.value);
    }
    if (tipo === "--m--") {
      consultarMuestraDetalleQR(input__consultarqr.value);
    }
    mimodal.hide();
    input__consultarqr.value = "";
  } else {
    input__consultarqr.value += event.key;
  }
});

btn__imprimrqr.addEventListener("click", () => imprimirQR("muestra"));

btn__imprimirqrmuestra.addEventListener("click", () => imprimirQR("muestra"));

btnborrarmuestra.addEventListener("click", borrarMuestraDetalle);
btnborrarimagenmuestra.addEventListener("click", borrarImagenMuestra);

// Guardar solo el informe de resultados
const guardarInformeMedico = async () => {
  if (!currentMuestraId) {
    alert("Por favor, selecciona un muestra primero.");
    return;
  }

  const datosReporte = {
    accion: "actualizarInformeMedico",
    muestraId: currentMuestraId,
    descripcion: muestraInformeDescripcion.value,
    fecha: muestraInformeFecha.value,
    tincion: muestraInformeTincion.value,
    observaciones: muestraInformeObservaciones.value,
    imagen: muestraInformeImagen.files.length > 0 ? "" : "", // Basic fallback
  };

  if (muestraInformeImagen.files.length > 0) {
    const imgReader = new FileReader();
    imgReader.readAsDataURL(muestraInformeImagen.files[0]);
    imgReader.onload = async function () {
      datosReporte.imagen = imgReader.result.split(',')[1]; // Get base64
      guardarDatosReporteMuestra(datosReporte);
    };
    return;
  }
  guardarDatosReporteMuestra(datosReporte);
};

const guardarDatosReporteMuestra = async (datosReporte) => {
  try {
    const res = await fetch("./modelo/bioquimica/bioquimica.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosReporte),
    });

    const data = await res.json();
    alert(data); // "Informe actualizado correctamente"
  } catch (error) {
    console.error("Error al guardar el informe:", error);
    alert("Error al guardar el informe de resultados.");
  }
};

if (btnGuardarInforme) {
  btnGuardarInforme.addEventListener("click", guardarInformeMedico);
}

// Toggle section views
const sectionMuestras = document.getElementById("sectionMuestras");
const sectionInforme = document.getElementById("sectionInforme");
const btnToggleInforme = document.getElementById("btnToggleInforme");
const btnToggleMuestras = document.getElementById("btnToggleMuestras");

if (btnToggleInforme && sectionMuestras && sectionInforme) {
  btnToggleInforme.addEventListener("click", () => {
    sectionMuestras.classList.add("d-none");
    sectionInforme.classList.remove("d-none");
  });
}

if (btnToggleMuestras && sectionMuestras && sectionInforme) {
  btnToggleMuestras.addEventListener("click", () => {
    sectionInforme.classList.add("d-none");
    sectionMuestras.classList.remove("d-none");
  });
}
