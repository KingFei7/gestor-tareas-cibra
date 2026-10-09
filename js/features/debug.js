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

// 4. Función Random: Selecciona e inspecciona un elemento o dato al azar
export const random = (coleccion) => {
    // Si pasas un selector CSS (ej. ".item", "button"), elige un elemento HTML aleatorio
    if (typeof coleccion === 'string') {
        const elementos = document.querySelectorAll(coleccion);
        if (elementos.length === 0) return log(`No se encontraron elementos para: ${coleccion}`);
        const elegido = elementos[Math.floor(Math.random() * elementos.length)];
        log(`Elemento aleatorio de '${coleccion}':`, elegido);
        return elegido;
    } 
    // Si pasas un Array o lista, elige un valor al azar
    else if (Array.isArray(coleccion)) {
        const itemElegido = coleccion[Math.floor(Math.random() * coleccion.length)];
        log("Item aleatorio del array:", itemElegido);
        return itemElegido;
    } 
    // Si no se pasa nada, genera un ID/Hash aleatorio para depuración
    else {
        const randId = Math.random().toString(36).substring(2, 9);
        log("ID aleatorio generado:", randId);
        return randId;
    }
};

// Auto-inicialización opcional para registrar errores globales al importar/cargar
if (typeof window !== 'undefined') {
    window.onerror = (msg, url, line) => {
        console.error(`💥 [ERROR] ${msg} en ${url}:${line}`);
    };
    log("Módulo debug.js cargado correctamente");
}