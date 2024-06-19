// Función para agregar un libro
function agregarLibro() {
    // Obtener los valores del formulario
    const id = document.getElementById('txtId').value;
    const titulo = document.getElementById('txtTitulo').value;
    const autor = document.getElementById('txtAutor').value;
    const ejemplares = document.getElementById('txtEjemplares').value;

    // Crear un objeto para el libro
    const libro = {
        id,
        titulo,
        autor,
        ejemplares
    };

    // Agregar el libro a la base de datos local
    agregarLibroABaseDeDatos(libro);

    // Crear una nueva fila en la tabla
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${id}</td>
        <td>${titulo}</td>
        <td>${autor}</td>
        <td>${ejemplares}</td>
        <td>
            <button onclick="editarLibro(${id})">Editar</button>
            <button onclick="eliminarLibro(${id})">Eliminar</button>
        </td>
    `;

    // Agregar la fila a la tabla
    document.getElementById('tblLibros').querySelector('tbody').appendChild(fila);

    // Limpiar el formulario
    document.getElementById('frmLibro').reset();
}

// Función para editar un libro
function editarLibro(id) {
    // Obtener la fila correspondiente al libro con el ID especificado
    const fila = document.querySelector(`#tblLibros tr:nth-child(${id + 1})`);

    // Obtener los valores actuales del libro
    const tituloActual = fila.querySelector('td:nth-child(2)').textContent;
    const autorActual = fila.querySelector('td:nth-child(3)').textContent;
    const ejemplaresActual = fila.querySelector('td:nth-child(4)').textContent;

    // Crear un formulario para editar los campos
    const formulario = document.createElement('form');
    formulario.innerHTML = `
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" value="${tituloActual}">
        <br>
        <label for="autor">Autor:</label>
        <input type="text" id="autor" value="${autorActual}">
        <br>
        <label for="ejemplares">Ejemplares:</label>
        <input type="number" id="ejemplares" value="${ejemplaresActual}">
        <br>
        <button type="submit">Guardar cambios</button>
    `;

    // Reemplazar la fila con el formulario
    fila.innerHTML = '';
    fila.appendChild(formulario);

    // Manejar el evento de submit del formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        // Obtener los nuevos valores de los campos
        const nuevoTitulo = document.getElementById('titulo').value;
        const nuevoAutor = document.getElementById('autor').value;
        const nuevosEjemplares = document.getElementById('ejemplares').value;

        // Actualizar los valores en la fila correspondiente
        fila.querySelector('td:nth-child(2)').textContent = nuevoTitulo;
        fila.querySelector('td:nth-child(3)').textContent = nuevoAutor;
        fila.querySelector('td:nth-child(4)').textContent = nuevosEjemplares;

        // Actualizar el libro en la base de datos local
        actualizarLibroEnBaseDeDatos(id, {
            titulo: nuevoTitulo,
            autor: nuevoAutor,
            ejemplares: nuevosEjemplares
        });

        // Eliminar el formulario
        formulario.remove();
    });
}

// Función para eliminar un libro
function eliminarLibro(id) {
    // Obtener la tabla
    const tabla = document.getElementById('tblLibros');

    // Obtener la fila correspondiente al libro con el ID especificado
    const fila = tabla.querySelector(`tr:nth-child(${id + 1})`);

    // Confirmar la eliminación
    if (confirm(`¿Estás seguro de eliminar el libro "${fila.querySelector('td:nth-child(2)').textContent}"?`)) {
        // Eliminar el libro de la base de datos local
        eliminarLibroDeBaseDeDatos(id);

        // Eliminar la fila
        fila.remove();
    }
}

// Función para agregar un libro a la base de datos local
function agregarLibroABaseDeDatos(libro) {
    // Implementar la lógica para agregar el libro a la base de datos local
    // Por ejemplo, utilizando localStorage o una base de datos IndexedDB
}

// Función para actualizar un libro en la base de datos local
function actualizarLibroEnBaseDeDatos(id, actualizaciones) {
    // Implementar la lógica para actualizar el libro en la base de datos local
    // Por ejemplo, utilizando localStorage o una base de datos IndexedDB
}

// Función para eliminar un libro de la base de datos local
function eliminarLibroDeBaseDeDatos(id) {
    // Implementar la lógica para eliminar el libro de la base de datos local
    // Por ejemplo, utilizando localStorage o una base de datos IndexedDB
}