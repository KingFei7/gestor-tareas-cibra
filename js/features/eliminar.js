/**
 * Activa la funcionalidad de eliminar tareas mediante delegación de eventos.
 * @param {Function} render - Función encargada de repintar la interfaz.
 */
export function activarEliminar(render) {
    const taskList = document.querySelector('#task-list');
    if (!taskList) return;

    // Escuchar clics en la lista utilizando delegación de eventos
    taskList.addEventListener('click', (event) => {
        // Actuar solo si el elemento clicado tiene data-action="delete"
        const deleteButton = event.target.closest('[data-action="delete"]');
        if (!deleteButton) return;

        // Obtener el elemento <li> que contiene el botón
        const li = deleteButton.closest('li');
        if (!li) return;

        // Obtener el id numérico del <li>
        const id = Number(li.dataset.id || li.id);
        if (isNaN(id)) return;

        // Eliminar la tarea y actualizar la interfaz
        deleteTarea(id);
        render();
    });
}