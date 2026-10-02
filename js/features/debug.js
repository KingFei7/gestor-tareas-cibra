// debug.js

// 1. Mensaje rápido con timestamp y estilos en consola
export const log = (mensaje, ...datos) => {
    console.log(`%c[DEBUG ${new Date().toLocaleTimeString()}] %c${mensaje}`, 
        'color: #007acc; font-weight: bold;', 
        'color: inherit;', 
        ...datos
    );
};

// 2. Medidor de tiempo de ejecución
export const time = (nombre, funcion) => {
    console.time(nombre);
    const resultado = funcion();
    console.timeEnd(nombre);
    return resultado;
};

// 3. Inspeccionar elementos o variables en tabla
export const table = (datos) => {
    console.table(datos);
};

// Auto-inicialización opcional para registrar errores globales al importar/cargar
if (typeof window !== 'undefined') {
    window.onerror = (msg, url, line) => {
        console.error(`💥 [ERROR] ${msg} en ${url}:${line}`);
    };
    log("Módulo debug.js cargado correctamente");
}