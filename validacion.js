function extraerNombresDeUsuario() {
  const link = document.getElementById("link").value;

  // Expresión regular para verificar un formato de enlace válido
  const urlPattern = /^(https?:\/\/)?(www\.)?instagram\.com\/\w+/i;

  if (!urlPattern.test(link)) {
    // Si el enlace no cumple con el formato, muestra un mensaje de error al usuario
    alert("El enlace ingresado no es válido. Debe ser un enlace de Instagram.");
    return; // Sale de la función si el enlace no es válido
  }

  fetch(link)
    .then(response => response.text())
    .then(data => {
      // Resto del código para extraer y mostrar los nombres de usuario
    })
    .catch(error => {
      console.error("Error al cargar el enlace:", error);
    });
}
// Obtén el botón por su ID
const botonExtraer = document.getElementById("extraerBtn");

// Agrega un escuchador de eventos al botón para el evento de clic
botonExtraer.addEventListener("click", extraerNombresDeUsuario);
