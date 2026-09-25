import { renderTareas } from "./render.js";
import { activarAnadir } from "./features/anadir.js";
import { activarEliminar } from "./features/eliminar.js";
import { activarCompletar } from "./features/completar.js";
import { activarFiltro } from "./features/filtrar.js";

renderTareas();

activarAnadir(renderTareas);
activarEliminar(renderTareas);
activarCompletar(renderTareas);
activarFiltro(renderTareas);
