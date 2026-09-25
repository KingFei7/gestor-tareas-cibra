import { getFiltro, getTareas } from "./store.js";

export function renderTareas() {
  const lista = document.querySelector("#task-list");
  const filtro = getFiltro();

  const tareasVisibles = getTareas().filter(tarea => {
    if (filtro === "pending") return !tarea.completada;
    if (filtro === "completed") return tarea.completada;
    return true;
  });

  lista.innerHTML = tareasVisibles.map(tarea => `
    <li class="tarea ${tarea.completada ? "completada" : ""}" data-id="${tarea.id}">
      <span class="texto">${escapeHtml(tarea.texto)}</span>
      <span class="acciones">
        <button type="button" data-action="complete">
          ${tarea.completada ? "Reabrir" : "Completar"}
        </button>
        <button type="button" data-action="delete">Eliminar</button>
      </span>
    </li>
  `).join("");
}

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}
