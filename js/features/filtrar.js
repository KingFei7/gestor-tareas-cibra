import { setFiltro } from "../store.js";

export function activarFiltro(render) {
    const filtro = document.getElementById("filter");

    filtro.addEventListener("change", function () {
        setFiltro(filtro.value);
        render();
    });
}
