document.getElementById('refrescar-btn').addEventListener('click', obtenerPeliculas);

// Función para obtener las películas desde el backend
function obtenerPeliculas() {
  fetch('http://localhost:8080/apisimple/peliculas')
    .then(response => {
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        throw new Error('Respuesta de red incorrecta ' + response.statusText);
      }
      return response.json(); // Parsear la respuesta JSON
    })
    .then(data => {
      // Procesar los datos de las películas
      console.log(data);
      // Llama a la función para mostrar las películas en la tabla
      mostrarPeliculasEnTabla(data);
    })
    .catch(error => {
      // Manejo de errores
      console.error('Problema con la operatoria con la base:', error);
    });
}

// Función para mostrar las películas en la tabla
function mostrarPeliculasEnTabla(peliculas) {
  const tbody = document.getElementById('peliculas-body');
  tbody.innerHTML = ''; // Limpiar el tbody antes de agregar nuevas filas

  peliculas.forEach(pelicula => {
    const fila = document.createElement('tr');

    fila.innerHTML = `
      <th scope="row">${pelicula.idPelicula}</th>
      <td>${pelicula.titulo}</td>
      <td>${pelicula.duracion}</td>
      <td>${pelicula.genero}</td>
      <td><img class="img-fluid img-thumbnail" width="80px" height="80px" src="../assets/img/backend/${pelicula.imagen}" alt="${pelicula.titulo}"></td>
    `;

    tbody.appendChild(fila);
  });
}