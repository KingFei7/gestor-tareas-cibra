import { toggleTarea } from "../store.js";

export function activarCompletar(render) {
  const taskList = document.getElementById("task-list");

  taskList.addEventListener("click", (e) => {
    const boton = e.target.closest('[data-action="complete"]');
    if (!boton) return;

    const li = boton.closest("li");
    const id = Number(li.dataset.id);

    toggleTarea(id);
    render();
  });
}