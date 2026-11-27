# Evidencias grupales · Práctica 2 Docker

**Equipo:** Equipo 4  
**Integrantes:** Iker Gómez García, Alvaro Ramos Herrera, Alberto Roiz de la Fuente, Álvaro de Benito 
**Fecha:** 27/11/2026

> No hace falta una captura por comando. Bastan resultados breves y explicaciones comprensibles. Las evidencias son del **equipo**.

## 1. Primeros contenedores

- [X] `docker --version` / `docker compose version` comprobados.
- [X] `hello-world` ejecutado.
- [X] Nginx accesible en `http://localhost:8081`.
- [X] Se ha detenido, iniciado y eliminado el contenedor.

**Comandos utilizados y resultado:**
- docker --version → Docker version 29.7.2
- docker compose version → Docker Compose version v5.5.0
- docker run --rm hello-world → descarga la imagen y muestra "Hello from Docker!"
- docker pull nginx:stable-alpine y docker images → la imagen de Nginx aparece descargada
- docker run -d --name nginx-prueba -p 127.0.0.1:8081:80 nginx:stable-alpine → en http://localhost:8081 aparece "Welcome to nginx!"
- docker ps → el contenedor nginx-prueba aparece en marcha
- docker logs nginx-prueba → muestra los accesos registrados por Nginx
- docker exec -it nginx-prueba sh y ls /usr/share/nginx/html → aparecen index.html y 50x.html
- docker stop, docker start, docker stop y docker rm nginx-prueba → el contenedor se para, arranca y se elimina
- Tras borrarlo, docker ps -a ya no lo muestra, pero docker images sigue mostrando la imagen: borrar un contenedor no borra la imagen.

**¿Qué hace la opción --rm?** Borra el contenedor automáticamente cuando termina, para no acumular contenedores parados.

**¿Qué significa 8081:80?** El puerto 8081 del ordenador se conecta con el puerto 80 del contenedor, donde escucha Nginx. Al indicar 127.0.0.1, solo se puede acceder desde el propio ordenador.


## 2. Nuestra imagen

Instrucciones añadidas para copiar la aplicación en la carpeta que sirve Nginx:

    COPY index.html /usr/share/nginx/html/
    COPY css/ /usr/share/nginx/html/css/
    COPY js/ /usr/share/nginx/html/js/



- [X] Imagen construida con `docker build`.
- [X] Aplicación accesible en `http://localhost:8080`.
- [X] Cambio visual comprobado tras reconstruir y recrear el contenedor.

**Comandos y resultados:** 

- Completamos el Dockerfile para copiar la aplicación en la carpeta que sirve Nginx:
  COPY index.html /usr/share/nginx/html/, COPY css/ /usr/share/nginx/html/css/ y COPY js/ /usr/share/nginx/html/js/
- docker build -t gestor-tareas:2.0 . → construye nuestra imagen a partir del Dockerfile
- docker images → aparece la imagen gestor-tareas con la etiqueta 2.0
- docker run -d --name gestor-tareas -p 127.0.0.1:8080:80 gestor-tareas:2.0 → en http://localhost:8080 funciona el gestor de tareas
- Cambiamos el título a "Gestor de tareas · Docker" y volvimos a ejecutar docker build: el contenedor antiguo seguía mostrando el título anterior.
- Tras docker stop gestor-tareas, docker rm gestor-tareas y un nuevo docker run, apareció el título nuevo.

*¿Para qué sirve .dockerignore?*
Indica qué archivos y carpetas no se envían a Docker al construir la imagen (por ejemplo .git o los archivos de documentación). Así la imagen es más pequeña, se construye más rápido y no incluye archivos innecesarios.


**¿Por qué el contenedor antiguo no cambia al reconstruir la imagen?** Un contenedor se crea a partir de la imagen que existía en ese momento. Al reconstruir se genera una imagen nueva, pero el contenedor antiguo sigue usando la anterior. Para ver los cambios hay que crear un contenedor nuevo con la imagen nueva.

## 3. Persistencia de datos

- [X] Volumen creado.
- [X] Un contenedor escribe un archivo en el volumen.
- [X] Otro contenedor recupera el archivo tras eliminar el primero.

**Comandos y resultado:** 

- docker volume create datos-devops y docker volume ls → se crea el volumen y aparece en la lista.
- docker run --rm -v datos-devops:/datos alpine:3.24 sh -c "echo datos persistentes > /datos/prueba.txt" → un contenedor temporal escribe el archivo prueba.txt en el volumen y se elimina al terminar.
- docker run --rm -v datos-devops:/datos alpine:3.24 cat /datos/prueba.txt → otro contenedor distinto lee el archivo y muestra datos persistentes.

El archivo se conserva aunque el primer contenedor haya desaparecido, porque no está guardado dentro del contenedor sino en el volumen, que Docker gestiona de forma independiente.

Las tareas del gestor se guardan en el localStorage del navegador, no en este volumen.

**¿Qué relación tiene esto con las bases de datos?** Los datos que se guardan dentro de un contenedor se pierden al eliminarlo. Si una base de datos (por ejemplo MySQL) guarda sus datos en un volumen, se conservan aunque el contenedor se borre, se actualice a otra versión o se vuelva a crear.

## 4. Docker Compose

- [X] Servicios `web` y `proxy` iniciados.
- [X] La aplicación funciona en `http://localhost:8080`.
- [X] Se ha consultado `docker compose ps`.
- [X] Se ha probado la comunicación `proxy` → `web`.

**Comandos y resultado:** 

- En proxy/default.conf cambiamos SERVICIO_WEB por web, de modo que el proxy reenvía las peticiones a http://web:80.
- En compose.yaml añadimos el servicio proxy: imagen nginx:stable-alpine, puerto 127.0.0.1:8080:80, configuración montada en solo lectura (:ro), dependencia de web y reinicio unless-stopped. El servicio web no publica ningún puerto.
- docker stop gestor-tareas y docker rm gestor-tareas → liberamos el puerto 8080.
- docker compose config → muestra la configuración completa sin errores.
- docker compose up -d --build → construye la imagen y arranca los servicios web y proxy.
- docker compose ps → aparecen los dos servicios en marcha; solo proxy publica el puerto 127.0.0.1:8080->80.
- En http://localhost:8080 funciona el gestor de tareas a través del proxy.
- docker compose exec proxy wget -qO- http://web:80/ → devuelve el HTML de la aplicación, lo que demuestra que el proxy llega al servicio web.
- docker compose logs proxy → muestra los mensajes y accesos del proxy.
- docker compose restart web → reinicia solo el servicio web.
- docker compose stop / docker compose start → paran y vuelven a arrancar los contenedores sin eliminarlos.
- docker compose down → para y elimina los contenedores y la red; docker compose up -d los vuelve a crear.

depends_on hace que web arranque antes que proxy, pero por sí solo no garantiza que la aplicación esté lista para aceptar conexiones.

**¿Por qué el proxy se conecta a `web` por su nombre?** 
Docker Compose crea automáticamente una red para el proyecto con un DNS interno. Cada servicio queda registrado con su nombre, así que cuando el proxy pide web, Docker lo traduce a la IP de ese contenedor. Por eso no hace falta conocer ni fijar ninguna IP.

## 5. Incidencias

**Incidencia 1 - Puerto ocupado:**

- **Síntoma:** con el despliegue de Compose activo, al ejecutar docker run -d --name prueba -p 127.0.0.1:8080:80 nginx:stable-alpine apareció el error port is already allocated.
- **Causa:** el puerto 8080 del ordenador ya lo estaba usando el servicio proxy. Dos contenedores no pueden publicar el mismo puerto a la vez.
- **Solución:** eliminamos el contenedor fallido con docker rm prueba y lo creamos en otro puerto libre (127.0.0.1:8082:80). Comprobamos que funcionaba en http://localhost:8082 y que el gestor seguía funcionando en el 8080. Después lo borramos con docker rm -f prueba. No fue necesario parar ni borrar el despliegue principal.

**Incidencia 2 - Imagen no actualizada:**

- **Síntoma:** cambiamos el título de index.html a "Gestor de tareas · Docker Compose", pero al recargar la página seguía apareciendo el título anterior, incluso tras docker compose up -d.
- **Causa:** los archivos de la aplicación se copian dentro de la imagen cuando se construye. El contenedor seguía usando la imagen antigua, y docker compose up -d sin --build no la reconstruye.
- **Solución:** ejecutamos docker compose up -d --build, que reconstruye la imagen y recrea el contenedor web. Al recargar con Ctrl + F5 apareció el título nuevo.

**Incidencia 3 - Servicio incorrecto en Nginx:**

- **Síntoma:** al cambiar web por servicio-inexistente en proxy/default.conf y recrear el proxy con docker compose up -d --force-recreate proxy, la aplicación dejó de cargar en http://localhost:8080 y el proxy se reiniciaba continuamente.
- **Causa:** docker compose logs proxy mostró el error host not found in upstream "servicio-inexistente". Nginx no puede arrancar porque en la red de Compose no existe ningún servicio con ese nombre.
- **Solución:** restauramos proxy_pass http://web:80; en proxy/default.conf y volvimos a recrear el proxy con docker compose up -d --force-recreate proxy. Los dos servicios quedaron en marcha y la aplicación volvió a funcionar.

## 6. Conclusión del equipo

**Dos cosas que hemos aprendido:** 

- La diferencia entre imagen y contenedor: la imagen es la plantilla con nuestra aplicación dentro y el contenedor es una copia en ejecución. Por eso, al cambiar el código hay que reconstruir la imagen y recrear el contenedor.
- Con Docker Compose podemos desplegar varios servicios con un solo comando y hacer que se comuniquen por su nombre, sin instalar Nginx en el ordenador. Cualquiera puede clonar el repositorio y arrancar la aplicación igual que nosotros.

**Una duda o dificultad que hemos tenido:** Al principio el Dockerfile del ejemplo copiaba archivos sueltos (style.css, app.js), pero nuestro proyecto tiene las carpetas css y js. Tuvimos que adaptar las instrucciones COPY para copiar esas carpetas completas y que la aplicación se viera con sus estilos.

## 7. Colaboración

**Enlaces a Pull Requests relevantes:** 

- Integración de Docker y Docker Compose (`feature/docker` → `develop`): https://github.com/KingFei7/gestor-tareas-cibra/pull/15
