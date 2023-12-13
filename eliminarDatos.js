document.getElementById('eliminarDatosBtn').addEventListener('click', eliminarDatos);

function eliminarDatos() {
  try {
    for (let i = 0; i < 3; i++) {
      escribirUnos();
    }

    for (let i = 0; i < 3; i++) {
      escribirCeros();
    }

    for (let i = 0; i < 3; i++) {
      escribirCodigoGobierno();
    }

    mostrarMensaje("Datos eliminados con éxito. ¡Gracias por tu decisión!");
  } catch (error) {
    console.error("Error al eliminar datos:", error.message);
    mostrarMensaje("Se produjo un error al eliminar datos. Por favor, inténtalo de nuevo.", true);
  }
}

function escribirUnos() {
  console.log("1");
}

function escribirCeros() {
  console.log("0");
}

function escribirCodigoGobierno() {
  console.log("246");
}

function mostrarMensaje(mensaje, esError = false) {
  const mensajeDiv = document.getElementById('mensaje');
  mensajeDiv.style.color = esError ? 'red' : 'green';
  mensajeDiv.textContent = mensaje;
                  }
