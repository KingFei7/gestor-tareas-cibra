import { addTarea } from "../store.js";

// Función auxiliar para comprobar si el texto es válido
function validarTexto(texto) {
    return texto.trim() !== "";
}

export function activarAnadir(render) {
    const form = document.querySelector('#task-form');
    const input = document.querySelector('#task-input');

    if (!form || !input) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const texto = input.value;

        // Usamos la función auxiliar
        if (validarTexto(texto)) {
            addTarea(texto.trim());
            input.value = '';
            input.focus(); // Mejora de experiencia de usuario: mantiene el cursor en el input
            render();
        }
    });
}
