export function activarEliminar(render) {
    const taskList = document.querySelector('#task-list');
    if (!taskList) return;

    taskList.addEventListener('click', (event) => {
        const deleteButton = event.target.closest('[data-action="delete"]');
        if (!deleteButton) return;

        const li = deleteButton.closest('li');
        if (!li) return;

        const id = Number(li.dataset.id || li.id);
        if (isNaN(id)) return;

        deleteTarea(id);
        render();
    });
}