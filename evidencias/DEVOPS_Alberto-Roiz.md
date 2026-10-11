# Evidencias individuales - Práctica 1 DevOps

Reflexión de Alberto Roiz sobre la Práctica 1: desarrollo colaborativo con Git y GitHub (gestor de tareas).

## 14.1 Colaboración DevOps (RA1.a)

| Acción realizada | Qué nos ha aportado |
|---|---|
| Trabajar en ramas feature | Cada uno desarrolló su funcionalidad en una rama propia (yo en `feature/completar-tarea`), de modo que pudimos trabajar a la vez sin pisarnos. Mientras tanto, `main` y `develop` se mantuvieron estables y, si algo fallaba en una rama, no afectaba al resto del equipo. |
| Pull Request + revisión | El Pull Request hizo visible mi cambio antes de integrarlo en `develop`. Un compañero lo revisó en GitHub y, si hacía falta, pedía correcciones, así que a la rama de integración solo llegaba código ya comprobado por otra persona. |
| Resolver un conflicto en equipo | Al cambiar todos la misma línea del `README.md`, Git no pudo decidir cuál conservar. Tuvimos que ponernos de acuerdo en una frase final, borrar los marcadores del conflicto y dejar el fichero coherente: cuando dos trabajos tocan lo mismo, hace falta coordinarse. |

## 14.2 De las comprobaciones manuales a CI/CD (RA1.b)

**CI (Integración Continua):** consiste en automatizar las comprobaciones del código (pruebas y validaciones) para que se ejecuten solas cada vez que alguien hace `push` o abre un Pull Request. Sirve para detectar los errores pronto, antes de que el cambio llegue a la rama común.

**CD (Entrega Continua):** es lo que ocurre cuando el código ya ha superado las comprobaciones de CI: la nueva versión se prepara y se entrega o despliega automáticamente, en lugar de hacerlo a mano.

**Dos comprobaciones de esta práctica que podríamos automatizar:**

1. Verificar que la página carga sin errores y que añadir, eliminar, completar y filtrar tareas funciona, en lugar de probarlo a mano en cada Pull Request.
2. Detectar que no han quedado marcadores de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`) en los ficheros antes de aprobar un merge.

## 14.3 Selección de herramientas (RA1.e)

### Contexto 1: equipo pequeño con el proyecto en GitHub que quiere automatizar pruebas al abrir un Pull Request

**Elección: GitHub Actions.**

Como el proyecto ya está en GitHub, esta herramienta viene integrada y no hay que instalar ni mantener nada más. Permite lanzar las pruebas automáticamente cuando se abre o se actualiza un Pull Request, así que encaja con lo que necesita un equipo pequeño.

### Contexto 2: empresa que quiere su propio servidor de automatización y conectar varios repositorios y entornos internos

**Elección: Jenkins.**

La empresa puede instalarlo y administrarlo en sus propios servidores, manteniendo el control total. Además, se puede conectar con distintos repositorios y entornos internos, lo que lo hace adecuado cuando hay varios proyectos y no se quiere depender de una plataforma externa.

### Herramientas que podríamos añadir (opcional)

- **SonarQube:** revisaría la calidad del código de forma automática y avisaría de errores o malas prácticas antes de integrar.
- **OWASP ZAP:** lanzaría pruebas de seguridad automáticas sobre la aplicación web para encontrar vulnerabilidades antes de entregar.
