document.addEventListener("DOMContentLoaded", function() {
  // Tu código JavaScript aquí, incluyendo la selección de elementos por ID y la manipulación del DOM.

function extraerNombres() {
  const link = document.getElementById("link").value;
  const listaUsuarios = document.getElementById("listaUsuarios");
  const mensajeError = document.getElementById("mensajeError");
  const mensajeExito = document.getElementById("mensajeExito");

  listaUsuarios.innerHTML = ""; // Limpiamos la lista
  mensajeError.textContent = ""; // Limpiamos el mensaje de error

  if (!link) {
    // Si el campo de enlace está vacío, mostramos un mensaje de error
    mensajeError.textContent = "Por favor, ingresa un enlace válido.";
    return;
  }

  fetch(link)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      const userElements = doc.querySelectorAll("span._aacl._aaco._aacw._aacx._aad7._aade");

      if (userElements.length === 0) {
        // Si no se encuentran nombres de usuario, mostramos un mensaje de error
        mensajeError.textContent = "No se encontraron nombres de usuario en el enlace proporcionado.";
        return;
      }

      userElements.forEach(element => {
        const username = element.textContent;
        const listItem = document.createElement("li");
        listItem.textContent = username;
        listaUsuarios.appendChild(listItem);
      });

      // Mostramos un mensaje de éxito
      mensajeExito.textContent = "Nombres de usuario extraídos correctamente.";
    })
    .catch(error => {
      // Mostramos un mensaje de error en caso de un error de red
      mensajeError.textContent = "Hubo un error al cargar el enlace: " + error.message;
    });
}

  });
