function extraerNombresUsuarios() {
  const link = document.getElementById("link").value;

  // Método 1: Selección de elementos por clases específicas
  function extraerNombres() {
    return new Promise((resolve, reject) => {
      fetch(link)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, "text/html");
          const userElements = doc.querySelectorAll("span._aacl._aaco._aacw._aacx._aad7._aade");
          const listaUsuarios = document.getElementById("listaUsuarios");

          listaUsuarios.innerHTML = ""; // Limpia la lista

          userElements.forEach(element => {
            const username = element.textContent;
            const listItem = document.createElement("li");
            listItem.textContent = username;
            listaUsuarios.appendChild(listItem);
          });

          resolve();
        })
        .catch(error => {
          console.error("Error en método 1:", error);
          reject();
        });
    });
  }

  // Método 2: Selección de elementos por atributos de datos personalizados
  function extraerNombresAtributos() {
    return new Promise((resolve, reject) => {
      const userElements = document.querySelectorAll(".nombre-usuario[data-tipo='nombre']");
      const listaUsuarios = document.getElementById("listaUsuarios");

      userElements.forEach(element => {
        const username = element.textContent;
        const listItem = document.createElement("li");
        listItem.textContent = username;
        listaUsuarios.appendChild(listItem);
      });

      if (userElements.length > 0) {
        resolve();
      } else {
        reject();
      }
    });
  }

  // Método 3: Selección de elementos a través de enlaces, íconos y clases relacionadas
  function extraerNombresVarios() {
    return new Promise((resolve, reject) => {
      fetch(link)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, "text/html");
          const listaUsuarios = document.getElementById("listaUsuarios");
          listaUsuarios.innerHTML = ""; // Limpia la lista de usuarios

          const userByLink = doc.querySelectorAll("a[href*='/']");
          userByLink.forEach(element => {
            const username = element.textContent;
            const listItem = document.createElement("li");
            listItem.textContent = username;
            listaUsuarios.appendChild(listItem);
          });

          const userByVerificationIcon = doc.querySelectorAll("svg[aria-label='Verified']");
          userByVerificationIcon.forEach(icon => {
            const parentElement = icon.parentElement;
            if (parentElement.tagName === "A") {
              const username = parentElement.textContent;
              const listItem = document.createElement("li");
              listItem.textContent = username;
              listaUsuarios.appendChild(listItem);
            }
          });

          const userByRelatedClasses = doc.querySelectorAll(".x1plvlek, .xryxfnj, .x1n2onr6");
          userByRelatedClasses.forEach(element => {
            const username = element.textContent;
            const listItem = document.createElement("li");
            listItem.textContent = username;
            listaUsuarios.appendChild(listItem);
          });

          if (userByLink.length > 0 || userByVerificationIcon.length > 0 || userByRelatedClasses.length > 0) {
            resolve();
          } else {
            reject();
          }
        })
        .catch(error => {
          console.error("Error en método 3:", error);
          reject();
        });
    });
  }

  // Intenta ejecutar los métodos secuencialmente
  extraerNombres()
    .catch(extraerNombresAtributos)
    .catch(extraerNombresVarios);
}

// Asocia la función extraerNombresUsuarios al evento de clic del botón con el ID "extraerBtn"
document.getElementById("extraerBtn").addEventListener("click", extraerNombresUsuarios);
