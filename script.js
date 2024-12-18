document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const numero = document.getElementById('numero').value.trim();
    const nombre = document.getElementById('nombre').value.trim();

    if (numero && nombre) {
        agregarRegistro(numero, nombre);
        document.getElementById('registroForm').reset();
    } else {
        alert('Por favor, complete ambos campos.');
    }
});

function agregarRegistro(numero, nombre) {
    const tablaBody = document.getElementById('tablaBody');
    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${numero}</td>
        <td>${nombre}</td>
        <td><button onclick="eliminarRegistro(this)">Eliminar</button></td>
    `;

    tablaBody.appendChild(fila);
}

function eliminarRegistro(boton) {
    const fila = boton.closest('tr');
    fila.remove();
}
