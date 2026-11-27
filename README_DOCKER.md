# Despliegue Docker del gestor de tareas

- **Equipo:** Equipo 4
- **Integrantes:** Iker Gómez García, Alvaro Ramos Herrera, Alberto Roiz de la Fuente, Álvaro de Benito
- **Repositorio de GitHub:** https://github.com/KingFei7/gestor-tareas-cibra

## Requisitos

- Docker instalado (comprobar con `docker --version`).
- Docker Compose v2 (comprobar con `docker compose version`).
- Git, para clonar el repositorio.
- El puerto 8080 del ordenador libre.
- No hace falta instalar Nginx ni ningún otro servidor web: todo se ejecuta dentro de los contenedores.

## Ejecutar la aplicación

```bash
git clone https://github.com/KingFei7/gestor-tareas-cibra.git
cd gestor-tareas-cibra
docker compose up -d --build
```

Para comprobar que los dos servicios están levantados:

```bash
docker compose ps
```

**URL de acceso:** http://localhost:8080

## Detener y eliminar los contenedores

```bash
docker compose down
```

Si solo queremos pararlos sin eliminarlos, usamos `docker compose stop`, y para volver a iniciarlos, `docker compose start`.

## Arquitectura

- **web**: contenedor con Nginx (`nginx:stable-alpine`) construido a partir de nuestro `Dockerfile`. Contiene los archivos estáticos del gestor de tareas (`index.html` y las carpetas `css` y `js`) en `/usr/share/nginx/html/`. No publica ningún puerto en el ordenador, solo escucha dentro de la red de Docker.
- **proxy**: contenedor con Nginx (`nginx:stable-alpine`) que es el único servicio accesible desde el ordenador, mediante el puerto `127.0.0.1:8080:80`. Su configuración (`proxy/default.conf`) se monta en modo solo lectura y reenvía todas las peticiones al servicio `web`.
- **Comunicación entre servicios**: Docker Compose crea automáticamente una red para el proyecto con un DNS interno, de modo que el proxy encuentra el servicio web por su nombre (`http://web:80`) sin necesidad de conocer su dirección IP. El flujo es: navegador → `localhost:8080` → proxy → web.

## Posibles problemas

**Puerto 8080 ocupado.** Al intentar arrancar otro contenedor en el puerto 8080 mientras el despliegue estaba activo, Docker devolvió el error `port is already allocated`. La causa era que el proxy de Compose ya estaba usando ese puerto. Lo solucionamos parando el otro contenedor (o publicándolo en un puerto distinto, como el 8082), sin tocar el despliegue que funcionaba.

**Los cambios en el código no aparecen.** Los archivos de la aplicación se copian dentro de la imagen al construirla, así que modificar `index.html`, `css` o `js` no cambia el contenedor que ya está en marcha. Hay que reconstruir con `docker compose up -d --build` y recargar el navegador con Ctrl + F5.

**El proxy no arranca o la página no carga.** Si `proxy/default.conf` apunta a un servicio que no existe, Nginx falla al arrancar y `docker compose logs proxy` muestra `host not found in upstream`. Hay que comprobar que el destino es `http://web:80` y recrear el proxy con `docker compose up -d --force-recreate proxy`.