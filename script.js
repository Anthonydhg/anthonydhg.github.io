// Crear la base de datos
const libros = {};

// Guardar la base de datos en localStorage
localStorage.setItem('libros', JSON.stringify(libros));

// Función para registrar un libro
function registrarLibro() {
    // Obtener los valores del formulario
    const titulo = document.querySelector('.r-titulo input').value;
    const autor = document.querySelector('.r-autor input').value;
    const id = document.querySelector('.r-id input').value;
    const ejemplares = document.querySelector('.r-eje input').value;

    // Crear un objeto para el libro
    const libro = {
        titulo,
        autor,
        id,
        ejemplares
    };

    // Agregar el libro a la base de datos
    libros[id] = libro;

    // Guardar la base de datos en localStorage
    localStorage.setItem('libros', JSON.stringify(libros));

    // Limpiar el formulario
    document.querySelector('.r-titulo input').value = '';
    document.querySelector('.r-autor input').value = '';
    document.querySelector('.r-id input').value = '';
    document.querySelector('.r-eje input').value = '';
}

// Función para mostrar los libros
function mostrarLibros() {
    // Obtener la base de datos desde localStorage
    const libros = JSON.parse(localStorage.getItem('libros'));

    // Crear la tabla
    const tabla = document.createElement('table');
    tabla.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Ejemplares</th>
            </tr>
        </thead>
        <tbody>
    `;

    // Mostrar los libros en la tabla
    Object.keys(libros).forEach((id) => {
        const libro = libros[id];
        tabla.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${libro.titulo}</td>
                <td>${libro.autor}</td>
                <td>${libro.ejemplares}</td>
            </tr>
        `;
    });

    // Agregar la tabla al documento
    document.body.appendChild(tabla);
}

// Ejecutar la función para mostrar los libros
mostrarLibros();
