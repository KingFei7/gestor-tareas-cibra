import { addTarea } from "../store.js";

export function activarAnadir(render) {
    // TODO feature/anadir-tarea
    const form = document.querySelector('#task-form');
    const input = document.querySelector('#task-input');

    if (form && input) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const texto = input.value.trim();
            
            if (texto !== "") {
                addTarea(texto);
                input.value = "";
                render();
            }
        });
    }
}
