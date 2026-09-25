let tareas = [
  { id: 1, texto: "Crear rama develop", completada: true },
  { id: 2, texto: "Crear una rama feature", completada: false },
  { id: 3, texto: "Abrir un Pull Request", completada: false }
];

let filtro = "all";

export function getTareas() {
  return [...tareas];
}

export function addTarea(texto) {
  const tarea = {
    id: Date.now(),
    texto,
    completada: false
  };
  tareas.push(tarea);
}

export function deleteTarea(id) {
  tareas = tareas.filter(tarea => tarea.id !== id);
}

export function toggleTarea(id) {
  tareas = tareas.map(tarea =>
    tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
  );
}

export function setFiltro(nuevoFiltro) {
  filtro = nuevoFiltro;
}

export function getFiltro() {
  return filtro;
}
