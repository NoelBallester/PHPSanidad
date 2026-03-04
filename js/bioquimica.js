const inputNumTubo = document.getElementById("inputNumTubo");
const token = sessionStorage.getItem("token");

const body = document.getElementById("body");
const tubos = document.getElementById("tubos_lista");  // tabla de muestras principales
const muestras = document.getElementById("tubos");  // tabla de tubos/análisis
const tipo_tubos = document.getElementById("tipo_tubos");
const numTubo = document.getElementById("numTubo");

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
const modalnuevoTubo = document.getElementById("modalnuevoTubo");
const btnformnuevotubo = document.getElementById("btnformnuevotubo");
const btnformmodificartubo = document.getElementById(
  "btnformmodificartubo"
);
const btnformcerrarnuevoTubo = document.getElementById(
  "btnformcerrarnuevoTubo"
);
const btnformcerrarmodificarTubo = document.getElementById(
  "btnformcerrarmodificarTubo"
);
const btnmodificar = document.getElementById("btnmodificar");
const nuevoTubo = document.getElementById("nuevoTubo");
const nuevaMuestra = document.getElementById("nuevaMuestra");

const tuboDescripcion = document.getElementById("tubo__descripcion");
const tuboTipoMuestra = document.getElementById("tubo__tipo_tubo");
const tuboTubo = document.getElementById("tubo__tubo");
const tuboFecha = document.getElementById("tubo__fecha");
const tuboTecnicoId = document.getElementById("tubo__tecnico_id");
const tuboCaracteristicas = document.getElementById(
  "tubo__caracteristicas"
);
const tuboObservaciones = document.getElementById(
  "tubo__observaciones"
);
const tuboInformeDescripcion = document.getElementById("tubo__informe_descripcion");
const tuboInformeFecha = document.getElementById("tubo__informe_fecha");
const tuboInformeTincion = document.getElementById("tubo__informe_tincion");
const tuboInformeObservaciones = document.getElementById("tubo__informe_observaciones");
const tuboInformeImagen = document.getElementById("tubo__informe_imagen");

const tuboImagen = document.getElementById("tubo__imagen");
const eliminarTuboModal = document.getElementById("eliminarTuboModal");

// Detalle Tubo
let currentTuboId = null;
const btnGuardarInforme = document.getElementById("btnGuardarInforme");
const btn__imprimrqr = document.getElementById("btn__imprimirqr");

// Modal qr
const imgtubo__qr = document.getElementById("imgtubo__qr");
const inputtubo__qr = document.getElementById("inputtubo__qr");

// Todos los tubos
const todosTubos = document.getElementById("todosTubos");

// Nuevo Tubo (Muestra)
const inputFecha = document.getElementById("inputFecha");
const inputDescripcion = document.getElementById("inputDescripcion");
const inputCaracteristicas = document.getElementById("inputCaracteristicas");
const inputObservaciones = document.getElementById("inputObservaciones");
const inputClinica = document.getElementById("inputClinica");
const inputMicroscopia = document.getElementById("inputMicroscopia");
const inputDiagnostico = document.getElementById("inputDiagnostico");
const inputPatologo = document.getElementById("inputPatologo");
const inputSelect = document.getElementById("inputSelect");
const inputImagenes = document.getElementById("inputImagenes");

// Modificar Tubo
const modalupdateTubo = document.getElementById("modalupdateTubo");
const modificarTubo = document.getElementById("modificarTubo");
const btnmodificartubo = document.getElementById("btnformmodificartubo");
const inputFechaUpdate = document.getElementById("inputFechaUpdate");
const inputImagenesUpdate = document.getElementById("inputImagenesUpdate");

const inputDescripcionUpdate = document.getElementById(
  "inputDescripcionUpdate"
);
const inputCaracteristicasUpdate = document.getElementById(
  "inputCaracteristicasUpdate"
);
const inputObservacionesUpdate = document.getElementById(
  "inputObservacionesUpdate"
);
const inputMicroscopiaUpdate = document.getElementById("inputMicroscopiaUpdate");
const inputDiagnosticoUpdate = document.getElementById("inputDiagnosticoUpdate");
const inputPatologoUpdate = document.getElementById("inputPatologoUpdate");
const inputSelectUpdate = document.getElementById("inputSelectUpdate");
const inputClinicaUpdate = document.getElementById("inputClinicaUpdate");

// Crear un análisis (Tubos)
const btnformnuevaMuestra = document.getElementById("btnformnuevaTubo");
const btnformcerrarnuevaMuestra = document.getElementById(
  "btnformcerrarnuevaTubo"
);

const modalnuevaMuestra = document.getElementById("modalnuevaTubo");

// Nueva Análisis
const inputdescripcionMuestra = document.getElementById(
  "inputdescripcionMuestra"
);
const inputFechaMuestra = document.getElementById("inputFechaMuestra");
const selectTincionMuestra = document.getElementById("selectTincionMuestra");
const inputObservacionesMuestra = document.getElementById(
  "inputObservacionesMuestra"
);
const inputImagenesMuestra = document.getElementById("inputImagenesMuestra");

// Detalle Análisis
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

// Modificar análisis
const modificarMuestra = document.getElementById("modificarTubo");
const modalmodificarMuestra = document.getElementById("modalmodificarTubo");
const modaldetalleMuestra = document.getElementById("modaldetalleTubo");
const btnformmodificarMuestra = document.getElementById(
  "btnformmodificartubo"
);
const btnformcerrarmodificarMuestra = document.getElementById(
  "btnformcerrarmodificarTubo"
);

// Datos para modificar un análisis
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
// Borrar Análisis
const btnborrarmuestra = document.getElementById("btnborrarmuestra");

// Borrar Imagen Análisis
const btnborrarimagenmuestra = document.getElementById(
  "btnborrarimagenmuestra"
);

const qrMuestraModal = document.getElementById("qrMuestraModal");
const imgmuestra__qr = document.getElementById("imgmuestra__qr");
const inputmuestra__qr = document.getElementById("inputmuestra__qr");
const btn__imprimirqrmuestra = document.getElementById(
  "btn__imprimirqrmuestra"
);

// Consultar por código qr
const btn__consultarqr = document.getElementById("btn__consultarqr");
const input__consultarqr = document.getElementById("input__consultarqr");
const qrConsultaModal = document.getElementById("qrConsultaModal");
let mimodal = new bootstrap.Modal(document.getElementById("qrConsultaModal"));

// Fecha inicio fin para consultas
const fechainicio = document.getElementById("fechainicio");
const fechafin = document.getElementById("fechafin");

// Alert error
const alerttubo = document.getElementById("alerttubo");
const alertfecha = document.getElementById("alertfecha");
const alertfecha_text = document.getElementById("alertfecha_text");

// id del tubo de trabajo
let tuboId = null;

// qr tubo
let tuboqr = null;

// id análisis del tubo
let muestraId = null;

// id imagen seleccionada
let imageId = null;

const files = document.getElementById("files");

// Carga Tubos al inicio
const cargarTubosIndex = async () => {
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

// Crear Tubos (Muestras)
const crearTubo = (event) => {
  event.preventDefault();

  // Validar que tecnico_id esté disponible
  const tecnicoId = sessionStorage.getItem("tecnico_id");
  if (!tecnicoId) {
    alert("Error: Usuario no autenticado. Por favor inicia sesión nuevamente.");
    return;
  }

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
      clinica: inputClinica.value || "",
      microscopia: inputMicroscopia.value || "",
      diagnostico: inputDiagnostico.value || "",
      patologo: inputPatologo.value || "",
      tecnicoIdTecnico: tecnicoId,
      tipo_muestra: inputSelect.value,
    }),
  })
    .then((response) => {
      // Primero verificar si la respuesta es ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Obtener el texto de la respuesta primero
      return response.text().then(text => {
        console.log("Respuesta del servidor:", text);
        try {
          return JSON.parse(text);
        } catch (e) {
          console.error("Error al parsear JSON:", text);
          throw new Error("La respuesta del servidor no es JSON válido: " + text);
        }
      });
    })
    .then((data) => {
      console.log("Muestra creada:", data);
      if (data && data !== -1 && !String(data).includes("ERROR")) {
        // Limpiar formulario
        nuevoTubo.reset();
        // Cerrar modal
        modalnuevoTubo.classList.remove("showmodal");
        modalnuevoTubo.classList.add("hidemodal");
        // Recargar la página para ver el nuevo tubo
        setTimeout(() => {
          location.href = "bioquimica.html";
        }, 500);
      } else {
        alert("Error al crear la muestra: " + data);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error al crear la muestra: " + error.message);
    });
};

// Carga todos los tubos desde el botón
const cargarTodosTubos = async () => {
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

// Carga el detalle del tubo seleccionado
const cargarTubo = async (tuboId) => {
  return await fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "cargarMuestraId",
      muestraId: tuboId,
    }),
  }).then((data) => data.json());
};

// Obtener tubos por tipo de muestra
const cargarPorTipo = async () => {
  return await fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "bioquimicaTipo",
      tipo_muestra: tipo_tubos.value,
    }),
  })
    .then((data) => data.json())
    .catch((error) => console.log("No se esta ejecutando" + error));
};

// Obtener tubos por número
const cargarPorNumero = async () => {
  return await fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "bioquimicaNumero",
      num_muestra: numTubo.value,
    }),
  })
    .then((data) => data.json())
    .catch((error) => console.log("No se esta ejecutando" + error));
};

// Obtener tubos por fecha
const obtenerTubosFecha = async (fechainicio) => {
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

// Obtener tubos por rango de fechas
const obtenerTubosFechaRango = async (fechainicio, fechafin) => {
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

// Borrar un tubo
const borrarTubo = () => {
  fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "borrarMuestra",
      muestraId: tuboId,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Muestra eliminada:", data);
      if (data && data !== -1 && !String(data).includes("ERROR")) {
        eliminarTuboModal.classList.remove("showmodal");
        eliminarTuboModal.classList.add("hidemodal");
        setTimeout(() => {
          location.href = "bioquimica.html";
        }, 500);
      } else {
        alert("Error al eliminar la muestra: " + data);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error al eliminar la muestra: " + error.message);
    });
};

// Consulta tubos en una fecha
const consultaFechaInicio = async () => {
  alertfecha.classList.add("ocultar");
  let respuesta;
  if (!fechafin.value) {
    respuesta = await obtenerTubosFecha(fechainicio.value);
  } else {
    if (new Date(fechainicio.value) > new Date(fechafin.value)) {
      alertfecha.classList.add("ocultar");
      alertfecha_text.textContent = "La fecha de inicio debe ser menor";
      alertfecha.classList.remove("ocultar");
    } else {
      alertfecha.classList.add("ocultar");
      respuesta = await obtenerTubosFechaRango(
        fechainicio.value,
        fechafin.value
      );
    }
  }
  imprimirTubos(respuesta, false);
};

// Consulta tubos entre dos fechas
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
      const respuesta = await obtenerTubosFechaRango(
        fechainicio.value,
        fechafin.value
      );
      imprimirTubos(respuesta, false);
    }
  }
};

// Muestra los datos de los tubos por pantalla
const imprimirTubos = (respuesta, rebuildDropdown = true) => {
  tubos.innerHTML = "";
  if (rebuildDropdown) {
    numTubo.innerHTML = "<option disabled selected>Nº Tubo</option>";
  }

  let fragmento = document.createDocumentFragment();
  let fragmentselect = document.createDocumentFragment();
  if (respuesta.length > 0) {
    respuesta.map((tubo) => {
      // Para cargar los números de tubo
      let option = document.createElement("OPTION");
      option.textContent = tubo.muestra;
      fragmentselect.appendChild(option);

      // Para mostrar los tubos
      let tr = document.createElement("tr");
      tr.classList.add("table__row");

      // Muestra / Paciente
      let ntubo = document.createElement("td");
      ntubo.textContent = tubo.muestra;

      let fecha = document.createElement("td");
      let newfecha = tubo.fecha;

      fecha.textContent =
        newfecha.substring(8) +
        "-" +
        newfecha.substring(5, 7) +
        "-" +
        newfecha.substring(0, 4);
      
      let descripcion = document.createElement("td");
      descripcion.textContent = tubo.descripcion.substring(0, 50);
      descripcion.title = tubo.descripcion;

      let tipo_muestra = document.createElement("td");
      tipo_muestra.textContent = tubo.tipo_muestra;

      let btndetalle = document.createElement("I");
      btndetalle.className =
        "d-inline-block tubo__icon fa-solid fa-file-invoice tubo__icon--infotubo";
      btndetalle.dataset.id = tubo.id_muestra;
      btndetalle.title = "Detalle Muestra";

      let btnCont = document.createElement("td");
      btnCont.appendChild(btndetalle);

      tr.appendChild(ntubo);
      tr.appendChild(fecha);
      tr.appendChild(descripcion);
      tr.appendChild(tipo_muestra);
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
    tr.textContent = "No se ha encontrado ninguna muestra";
    fragmento.appendChild(tr);
  }

  tubos.appendChild(fragmento);
  if (rebuildDropdown) {
    numTubo.appendChild(fragmentselect);
  }
};

// Peticiones al seleccionar un tubo
const detalleTubo = async (event) => {
  const icon = event.target.closest("i.fa-file-invoice");
  if (icon) {
    alerttubo.classList.add("ocultar");
    tuboId = icon.dataset.id;

    let respuesta = await cargarTubo(tuboId);
    imprimirDataTubo(respuesta);

    respuesta = await cargarMuestras(tuboId);
    imprimirMuestras(respuesta);
  }
};

// Muestra el detalle de un tubo
const imprimirDataTubo = (respuesta) => {
  if (tuboTecnicoId) tuboTecnicoId.textContent = respuesta.tecnicoIdTecnico || "Desconocido";
  tuboDescripcion.textContent = respuesta.descripcion.substring(0, 50);
  tuboTipoMuestra.textContent = respuesta.tipo_muestra;
  tuboTubo.textContent = respuesta.muestra;

  // Formato Fecha
  let newfecha = respuesta.fecha;
  tuboFecha.textContent =
    newfecha.substring(8) +
    "-" +
    newfecha.substring(5, 7) +
    "-" +
    newfecha.substring(0, 4);

  tuboCaracteristicas.textContent = respuesta.caracteristicas;
  tuboObservaciones.textContent = respuesta.observaciones;
  tuboInformeDescripcion.value = respuesta.informe_descripcion || "";
  tuboInformeFecha.value = respuesta.informe_fecha || "";
  tuboInformeTincion.value = respuesta.informe_tincion || "";
  tuboInformeObservaciones.value = respuesta.informe_observaciones || "";
  currentTuboId = respuesta.id_muestra;

  // Imagen del tubo
  respuesta.imagen
    ? (tuboImagen.src = `data:image/jpeg;base64,${respuesta.imagen}`)
    : (tuboImagen.src = "./assets/images/no_disponible.jpg");

  inputtubo__qr.style.display = "none";
  inputtubo__qr.focus();

  // generamos el codigo QR
  new QRious({
    element: document.querySelector("#imgtubo__qr"),
    value: respuesta.qr_muestra,
    size: 70,
    backgroundAlpha: 0,
    foreground: "#4ca0cc",
    level: "H",
  });
};

// Imprime el QR
const imprimirQR = (elemento) => {
  let qrimprimir;
  if (elemento == "tubo") {
    qrimprimir = imgtubo__qr.src;
  } else {
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

// Cargamos el modal datos tubo para modificar
const cargarTuboUpdateModal = async (event) => {
  if (!tuboId) {
    if (event) event.preventDefault();
    alerttubo.classList.remove("ocultar");
  } else {
    let tubo = await cargarTubo(tuboId);
    inputDescripcionUpdate.value = tubo.descripcion;
    inputFechaUpdate.value = tubo.fecha;
    inputCaracteristicasUpdate.value = tubo.caracteristicas;
    inputObservacionesUpdate.value = tubo.observaciones;
    inputClinicaUpdate.value = tubo.informacion_clinica || "";
    inputMicroscopiaUpdate.value = tubo.descripcion_microscopica || "";
    inputDiagnosticoUpdate.value = tubo.diagnostico_final || "";
    inputPatologoUpdate.value = tubo.patologo_responsable || "";
    inputSelectUpdate.value = tubo.tipo_muestra;
  }
};

const modificarTuboUpdate = async (event) => {
  event.preventDefault();

  const tecnicoId = sessionStorage.getItem("tecnico_id");
  if (!tecnicoId) {
    alert("Error: Usuario no autenticado. Por favor inicia sesión nuevamente.");
    return;
  }

  await fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "modificarMuestra",
      muestraId: tuboId,
      muestra: numTubo.value,
      fecha: inputFechaUpdate.value,
      descripcion: inputDescripcionUpdate.value,
      caracteristicas: inputCaracteristicasUpdate.value,
      observaciones: inputObservacionesUpdate.value,
      tipo_muestra: inputSelectUpdate.value,
      clinica: inputClinicaUpdate.value,
      microscopia: inputMicroscopiaUpdate.value,
      diagnostico: inputDiagnosticoUpdate.value,
      patologo: inputPatologoUpdate.value,
      tecnicoIdTecnico: tecnicoId,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error en la respuesta del servidor");
      }
    })
    .then((data) => {
      console.log("Muestra actualizada:", data);
      if (data && data !== -1 && !String(data).includes("ERROR")) {
        modalupdateTubo.classList.remove("showmodal");
        modalupdateTubo.classList.add("hidemodal");
        setTimeout(() => {
          location.href = "bioquimica.html";
        }, 500);
      } else {
        alert("Error al actualizar la muestra: " + data);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error al actualizar la muestra: " + error.message);
    });
};

// ANÁLISIS / MUESTRAS

// Carga análisis de un tubo
const cargarMuestras = async (tuboId) => {
  return await fetch("modelo/muestras/muestras.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "cargarMuestras",
      muestraId: tuboId,
    }),
  }).then((data) => data.json());
};

// Crear nuevo análisis
const crearMuestra = async (event) => {
  event.preventDefault();

  let newMuestra = new FormData();
  newMuestra.append("accion", "crearMuestra");
  newMuestra.append("descripcion", inputdescripcionMuestra.value);
  newMuestra.append("fecha", inputFechaMuestra.value);
  newMuestra.append("observaciones", inputObservacionesMuestra.value);
  newMuestra.append("tincion", selectTincionMuestra.value);
  newMuestra.append("imagen", inputImagenesMuestra.files[0]);
  newMuestra.append("muestraIdMuestra", tuboId);

  await fetch("modelo/muestras/muestrasimagenes.php", {
    method: "POST",
    body: newMuestra,
  })
    .then(async () => {
      modalnuevaMuestra.classList.remove("showmodal");
      modalnuevaMuestra.classList.add("hidemodal");
      limpiarModalMuestra();
      imprimirMuestras(await cargarMuestras(tuboId));
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

// Cargamos el modal datos análisis a modificar
const cargarMuestraUpdateModal = async (event) => {
  if (!tuboId) {
    if (event) event.preventDefault();
    alerttubo.classList.remove("ocultar");
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

    let muestra = await response.json();
    inputmodificardescripcionMuestra.value = muestra.descripcion;
    inputmodificarfechaMuestra.value = muestra.fecha;
    selectmodificartincionMuestra.value = muestra.tincion;
    inputmodificarobservacionesMuestra.value = muestra.observaciones;
  }
};

// Modificar análisis
const modificarMuestraUpdate = async (event) => {
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
      // Actualizamos los datos del detalle del análisis
      muestra__descripcion.textContent = inputmodificardescripcionMuestra.value;
      let newfecha = inputmodificarfechaMuestra.value;
      muestra__fecha.textContent =
        newfecha.substring(8) +
        "-" +
        newfecha.substring(5, 7) +
        "-" +
        newfecha.substring(0, 4);

      muestra__observaciones.textContent =
        inputmodificarobservacionesMuestra.value;
      muestra__tincion.textContent = selectmodificartincionMuestra.value;

      // Mostramos los análisis para que se actualicen
      let respuesta = await cargarMuestras(tuboId);
      imprimirMuestras(respuesta);
    })
    .catch((error) => console.log(error));

  // Ocultamos el modal
  modalmodificarMuestra.classList.remove("showmodal");
};

// Imprimir análisis
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
      let newfecha = muestra.fecha;
      fecha.textContent =
        newfecha.substring(8) +
        "-" +
        newfecha.substring(5, 7) +
        "-" +
        newfecha.substring(0, 4);

      let tincion = document.createElement("td");
      tincion.textContent = muestra.tincion;

      let btn = document.createElement("td");
      let btndetalle = document.createElement("I");
      btndetalle.className =
        "d-inline-block tubo__icon fa-solid fa-file-invoice tubo__icon--infotubo";
      btndetalle.dataset.id = muestra.id_muestra;
      btndetalle.title = "Detalle Análisis";
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
    tr.textContent = "No se ha encontrado ningún análisis";
    fragmento.appendChild(tr);
  }
  muestras.appendChild(fragmento);
};

// Obtenemos un análisis
const cargarMuestra = async (muestraid) => {
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

// Obtenemos las imágenes de un análisis
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

// Rellenamos los datos del análisis
const rellenarDatosMuestra = async (muestra) => {
  muestra__descripcion.textContent = muestra.descripcion.substring(0, 60);
  muestra__descripcion.title = muestra.descripcion;

  let newfecha = muestra.fecha;
  muestra__fecha.textContent =
    newfecha.substring(8) +
    "-" +
    newfecha.substring(5, 7) +
    "-" +
    newfecha.substring(0, 4);

  muestra__observaciones.textContent = muestra.observaciones;
  muestra__tincion.textContent = muestra.tincion;
};

const mostrarImagenesMuestra = async (muestraId_val) => {
  muestra__img.innerHTML = "";
  let imagenes = await obtenerImagenesMuestra(muestraId_val);
  // Imagen de sustitución si no hay imágenes
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

      // Añadimos cada una de las imágenes
      let newdiv = document.createElement("DIV");
      newdiv.classList.add("container__muestraimg", "border", "m-1");
      newdiv.appendChild(newimg);
      muestra__img.appendChild(newdiv);
    });
  }
};

const borrarMuestra = async () => {
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
      // Mostramos los análisis del tubo
      let muestras = await cargarMuestras(tuboId);
      imprimirMuestras(muestras);
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

// Mostramos detalle del análisis seleccionado
const detailMuestra = async (muestraid) => {
  // Cargamos el análisis
  let muestra = await cargarMuestra(muestraid);
  muestraId = muestra.id_muestra;
  rellenarDatosMuestra(muestra);

  // Generamos el código QR
  new QRious({
    element: imgmuestra__qr,
    value: muestra.qr_muestra,
    size: 70,
    backgroundAlpha: 0,
    foreground: "#4ca0cc",
    level: "H",
  });

  // Mostramos las imágenes del análisis
  mostrarImagenesMuestra(muestraId);

  modaldetalleMuestra.classList.add("showmodal");
  modaldetalleMuestra.classList.remove("hidemodal");
};

// Añadir una imagen al análisis
const aniadirImagenMuestra = async () => {
  try {
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

const consultarTuboQR = async (qr) => {
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
  let tubo = await response.json();

  // Mostrar los datos del tubo
  imprimirTubos(tubo);
  tubo = tubo[0];

  // Mostramos el detalle del tubo
  imprimirDataTubo(tubo);

  // Mostramos los análisis del tubo
  tuboId = tubo.id_muestra;
  let muestras = await cargarMuestras(tuboId);
  imprimirMuestras(muestras);
};

const consultarMuestraQR = async (qr) => {
  // Obtengo el análisis para obtener el id del tubo
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
  let muestra = await response.json();
  // Obtengo el tubo del análisis
  response = await fetch("modelo/bioquimica/bioquimica.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accion: "cargarMuestraId",
      muestraId: muestra[0].muestraIdMuestra,
    }),
  });
  // Mostramos el tubo del análisis
  let tubo = await response.json();
  consultarTuboQR(tubo.qr_muestra);
  detailMuestra(muestra[0].id_muestra);
};

// Cargamos el modal datos de usuario para modificar
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

  inputUpdateNombreUser.value = user.nombre || user.name || "";
  inputUpdateApellidosUser.value = user.apellidos;
  inputUpdateCentroUser.value = user.centro;
  inputUpdateCorreoUser.value = user.email;
};

// EVENTOS

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

// Consulta Tubos Recientes
document.addEventListener("DOMContentLoaded", async () => {
  body.style.display = "block";
  const respuesta = await cargarTubosIndex();
  imprimirTubos(respuesta);
  let fechaActual = new Date().toISOString().split("T")[0];
  // Para que no se pueda seleccionar una fecha anterior a la actual
  inputFecha.setAttribute("min", fechaActual);
  inputFechaUpdate.setAttribute("min", fechaActual);
  inputFechaMuestra.setAttribute("min", fechaActual);
});

// Consulta por Tipo de Muestra
tipo_tubos.addEventListener("change", async () => {
  const respuesta = await cargarPorTipo();
  imprimirTubos(respuesta, false);
});

// Consulta por Número de Tubo
numTubo.addEventListener("change", async () => {
  const respuesta = await cargarPorNumero();
  imprimirTubos(respuesta, false);
});

// Consulta Detalle Tubo y Análisis
tubos.addEventListener("click", detalleTubo);

// Consulta por fecha
fechainicio.addEventListener("change", consultaFechaInicio);

fechafin.addEventListener("change", consultaFechaFin);

// Todos los tubos
todosTubos.addEventListener("click", async () => {
  const respuesta = await cargarTodosTubos();
  imprimirTubos(respuesta);
});

// Crear nuevos Tubos
btnformnuevotubo.addEventListener("click", () => {
  if (!modalnuevoTubo.classList.contains("showmodal")) {
    modalnuevoTubo.classList.add("showmodal");
    modalnuevoTubo.classList.remove("hidemodal");
  }
});

btnformcerrarnuevoTubo.addEventListener("click", () => {
  if (!modalnuevoTubo.classList.contains("hidemodal")) {
    modalnuevoTubo.classList.add("hidemodal");
    modalnuevoTubo.classList.remove("showmodal");
  }
});

nuevoTubo.addEventListener("submit", crearTubo);

// Modificar Tubo
btnformmodificartubo.addEventListener("click", () => {
  if (!tuboId) {
    alerttubo.classList.remove("ocultar");
  } else {
    cargarTuboUpdateModal();
    if (!modalupdateTubo.classList.contains("showmodal")) {
      modalupdateTubo.classList.add("showmodal");
      modalupdateTubo.classList.remove("hidemodal");
    }
  }
});

btnformcerrarmodificarTubo.addEventListener("click", () => {
  if (!modalupdateTubo.classList.contains("hidemodal")) {
    modalupdateTubo.classList.add("hidemodal");
    modalupdateTubo.classList.remove("showmodal");
  }
});

modificarTubo.addEventListener("submit", modificarTuboUpdate);

// Borrar Tubo
eliminarTuboModal.addEventListener("show.bs.modal", (event) => {
  if (!tuboId) {
    event.preventDefault();
    alerttubo.classList.remove("ocultar");
  }
});

btnborrar.addEventListener("click", borrarTubo);

// Modal QR análisis
qrMuestraModal.addEventListener("show.bs.modal", (event) => {
  inputmuestra__qr.style.display = "none";
  inputmuestra__qr.focus();
});

// Modal QR análisis - segundo listener
qrMuestraModal.addEventListener("show.bs.modal", (event) => {
  if (!muestraId) {
    event.preventDefault();
    alerttubo.classList.remove("ocultar");
  }
});

// Crear Análisis
btnformnuevaMuestra.addEventListener("click", () => {
  if (!tuboId) {
    alerttubo.classList.remove("ocultar");
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

if (btncerrardetalleMuestra) {
  btncerrardetalleMuestra.addEventListener("click", () => {
    if (!modaldetalleMuestra.classList.contains("hidemodal")) {
      modaldetalleMuestra.classList.add("hidemodal");
      modaldetalleMuestra.classList.remove("showmodal");
    }
    muestra__img.innerHTML = "";
  });
}

nuevaMuestra.addEventListener("submit", crearMuestra);

// Modificar Análisis
btnformmodificarMuestra.addEventListener("click", () => {
  if (!tuboId) {
    alerttubo.classList.remove("ocultar");
  } else {
    cargarMuestraUpdateModal();
    if (!modalmodificarMuestra.classList.contains("showmodal")) {
      modalmodificarMuestra.classList.add("showmodal");
      modalmodificarMuestra.classList.remove("hidemodal");
    }
  }
});

if (btnformcerrarmodificarMuestra) {
  btnformcerrarmodificarMuestra.addEventListener("click", () => {
    if (!modalmodificarMuestra.classList.contains("hidemodal")) {
      modalmodificarMuestra.classList.add("hidemodal");
      modalmodificarMuestra.classList.remove("showmodal");
    }
  });
}

// Consulta Detalle Análisis
muestras.addEventListener("click", (event) => {
  if (event.target.nodeName == "I") {
    detailMuestra(event.target.dataset.id);
  }
});

// Visualizamos la imagen seleccionada
if (muestra__img) {
  muestra__img.addEventListener("click", async (event) => {
    if (event.target.nodeName === "IMG") {
      if (typeof visor__img !== 'undefined') visor__img.src = event.target.src;
      imageId = event.target.id;
    }
    if (event.target.nodeName === "I") aniadirImagenMuestra();
  });
}

inputtubo__qr.value = "";
input__consultarqr.value = "";

// Lectura código QR del análisis
qrMuestraModal.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    consultarMuestraQR(inputmuestra__qr.value);
    inputmuestra__qr.value = "";
  } else {
    inputmuestra__qr.value += event.key;
  }
});

qrConsultaModal.addEventListener("show.bs.modal", () => {
  input__consultarqr.style.display = "none";
  input__consultarqr.focus();
});

// Consulta por QR tanto de Tubo como de Análisis
qrConsultaModal.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let tipo = input__consultarqr.value.substring(0, 5);
    if (tipo === "--m--") {
      consultarTuboQR(input__consultarqr.value);
    }
    if (tipo === "--a--") {
      consultarMuestraQR(input__consultarqr.value);
    }
    mimodal.hide();
    input__consultarqr.value = "";
  } else {
    input__consultarqr.value += event.key;
  }
});

btn__imprimrqr.addEventListener("click", () => imprimirQR("tubo"));

btn__imprimirqrmuestra.addEventListener("click", () => imprimirQR("muestra"));

if (btnborrarmuestra) {
  btnborrarmuestra.addEventListener("click", borrarMuestra);
}

if (btnborrarimagenmuestra) {
  btnborrarimagenmuestra.addEventListener("click", borrarImagenMuestra);
}

// Guardar solo el informe de resultados
const guardarInformeMedico = async () => {
  if (!currentTuboId) {
    alert("Por favor, selecciona una muestra primero.");
    return;
  }

  const datosReporte = {
    accion: "actualizarInformeMedico",
    muestraId: currentTuboId,
    descripcion: tuboInformeDescripcion.value,
    fecha: tuboInformeFecha.value,
    tincion: tuboInformeTincion.value,
    observaciones: tuboInformeObservaciones.value,
    imagen: tuboInformeImagen.files.length > 0 ? "" : "",
  };

  if (tuboInformeImagen.files.length > 0) {
    const imgReader = new FileReader();
    imgReader.readAsDataURL(tuboInformeImagen.files[0]);
    imgReader.onload = async function () {
      datosReporte.imagen = imgReader.result.split(',')[1];
      guardarDatosReporteTubo(datosReporte);
    };
    return;
  }
  guardarDatosReporteTubo(datosReporte);
};

const guardarDatosReporteTubo = async (datosReporte) => {
  try {
    const res = await fetch("./modelo/bioquimica/bioquimica.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosReporte),
    });

    const data = await res.json();
    alert(data);
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
