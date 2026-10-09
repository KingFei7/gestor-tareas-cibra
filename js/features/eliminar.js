/**
 * @file eliminar.js
 * @description Módulo encargado de gestionar la funcionalidad de eliminar tareas en el gestor.
 */

/**
 * Activa la funcionalidad de eliminar tareas mediante delegación de eventos en la lista.
 * 
 * @param {Function} render - Función callback encargada de repintar la interfaz de usuario.
 */
export function activarEliminar(render) {
    // Seleccionamos el contenedor principal de la lista de tareas
    const taskList = document.querySelector('#task-list');
    
    // Verificamos que el contenedor exista en el DOM antes de continuar
    if (!taskList) return;

    // Escuchamos los clics en la lista utilizando delegación de eventos para optimizar el rendimiento
    taskList.addEventListener('click', (event) => {
        // Comprobamos si el elemento clicado o alguno de sus padres cercanos tiene el atributo data-action="delete"
        const deleteButton = event.target.closest('[data-action="delete"]');
        if (!deleteButton) return;

        // Buscamos el elemento contenedor <li> de la tarea que contiene el botón
        const li = deleteButton.closest('li');
        if (!li) return;

        // Extraemos el identificador numérico de la tarea desde el dataset o atributo id del <li>
        const id = Number(li.dataset.id || li.id);
        
        // Validamos que el ID obtenido sea un número válido
        if (isNaN(id)) return;

        // Ejecutamos la función de eliminación y actualizamos la interfaz de usuario
        deleteTarea(id);
        render();
    });
}