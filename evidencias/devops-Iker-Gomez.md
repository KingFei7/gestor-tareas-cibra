# DEVOPS_GRUPO.md

Reflexión del grupo sobre la Práctica 1: desarrollo colaborativo con Git y GitHub (gestor de tareas).

## 14.1 Colaboración DevOps (RA1.a)

| Acción realizada | Qué nos ha aportado |
|---|---|
| Trabajar en ramas feature | Al tener una rama por funcionalidad pudimos trabajar a la vez sin pisarnos y sin tocar la versión estable. Si algo salía mal en una rama, `develop` y `main` seguían intactas. |
| Pull Request + revisión | El Pull Request nos obligó a enseñar el cambio antes de integrarlo. Un compañero lo revisaba en GitHub y, si hacía falta, pedía correcciones sobre la misma rama, de modo que solo entraba en `develop` código ya comprobado. |
| Resolver un conflicto en equipo | Al modificar todos la misma línea del `README.md`, Git no pudo fusionar los cambios solo. Tuvimos que hablar, elegir una frase común y dejar el fichero coherente, lo que demuestra que cuando dos trabajos afectan a lo mismo hace falta coordinarse. |

## 14.2 De las comprobaciones manuales a CI/CD (RA1.b)

**CI (Integración Continua):** consiste en automatizar las comprobaciones del código (pruebas, validaciones) para que se ejecuten solas cada vez que alguien sube cambios con `push` o abre un Pull Request. Sirve para detectar errores enseguida, antes de que el cambio llegue a la rama común.

**CD (Entrega Continua):** es lo que sucede una vez que el código ha pasado las comprobaciones de CI: la nueva versión se prepara y se entrega o despliega automáticamente, en lugar de hacerlo a mano.

**Dos comprobaciones de esta práctica que podríamos automatizar:**

1. Verificar que la página carga sin errores y que añadir, eliminar, completar y filtrar tareas funciona, en lugar de probarlo a mano en cada Pull Request.
2. Detectar que no han quedado marcadores de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`) en los ficheros antes de aprobar un merge.

## 14.3 Selección de herramientas (RA1.e)

### Contexto 1: equipo pequeño con el proyecto en GitHub que quiere automatizar pruebas al abrir un Pull Request

**Elección: GitHub Actions.**

Como el proyecto ya está en GitHub, esta herramienta viene integrada y no hay que instalar ni mantener nada más. Permite lanzar las pruebas automáticamente cuando se abre o se actualiza un Pull Request, así que encaja con lo que necesita un equipo pequeño.

### Contexto 2: empresa que quiere su propio servidor de automatización y conectar varios repositorios y entornos internos

**Elección: Jenkins.**

La empresa puede instalarlo y administrarlo en sus propios servidores, manteniendo el control total. Además se puede conectar con distintos repositorios y entornos internos, lo que lo hace adecuado cuando hay varios proyectos y no se quiere depender de una plataforma externa.

### Herramientas que podríamos añadir (opcional)

- **SonarQube:** revisaría la calidad del código de forma automática y avisaría de errores o malas prácticas antes de integrar.
- **OWASP ZAP:** lanzaría pruebas de seguridad automáticas sobre la aplicación web para encontrar vulnerabilidades antes de entregar.