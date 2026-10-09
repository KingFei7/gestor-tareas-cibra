# Evidencias individuales - Práctica 1 DevOps

## 1. Colaboración DevOps - RA1.a

### a) Trabajar en una rama feature

Respuesta:

Trabajar en una rama feature permite desarrollar una funcionalidad por separado sin modificar directamente la versión estable del proyecto. Así, varios compañeros pueden trabajar a la vez con menos riesgo de interferir en el trabajo de los demás.

### b) Abrir un Pull Request y que otro compañero lo revise

Respuesta:

El Pull Request permite mostrar los cambios realizados para que otro compañero los revise antes de integrarlos en develop. Si encuentra algún error, puede pedir que se corrija antes de aprobarlos.

### c) Resolver un conflicto de README.md entre varios cambios

Respuesta:

Cuando varios compañeros modifican la misma parte de un archivo, Git puede detectar un conflicto que hay que resolver manualmente. Esto nos obliga a coordinarnos para elegir una solución común y evitar que se pierdan cambios importantes.

## 2. CI/CD - RA1.b

### a) Integración Continua (CI)

Respuesta:

La Integración Continua permite ejecutar automáticamente comprobaciones y pruebas cuando alguien hace un push o abre un Pull Request. De esta manera, se pueden detectar errores antes de integrar los cambios en la rama común.

### b) Entrega / Despliegue Continuo (CD)

Respuesta:

Después de superar las comprobaciones, se puede preparar automáticamente una nueva versión del proyecto. Según la configuración, también se podría publicar o desplegar en un servidor sin tener que hacerlo manualmente.

### c) Dos comprobaciones de esta práctica que automatizarías en un pipeline futuro

1. Comprobar automáticamente que las funciones de añadir, eliminar, completar y filtrar tareas funcionan correctamente.
2. Detectar si quedan marcadores de conflicto, como `<<<<<<<`, `=======` y `>>>>>>>`, en los archivos del proyecto.

## 3. Selección de herramientas - RA1.e

### Contexto A

Equipo pequeño que ya trabaja en GitHub y quiere ejecutar pruebas automáticamente en cada Pull Request.

**Herramienta principal de CI/CD elegida:**

GitHub Actions.

**Justificación (2-3 líneas):**

GitHub Actions permite automatizar las pruebas directamente desde el repositorio de GitHub. Es una buena opción para un equipo pequeño porque facilita la ejecución de comprobaciones al abrir o actualizar un Pull Request sin tener que administrar un servidor propio.

### Contexto B

Empresa que quiere administrar su propio servidor de automatización y conectarlo con repositorios y entornos internos.

**Herramienta principal de CI/CD elegida:**

Jenkins.

**Justificación (2-3 líneas):**

Jenkins permite configurar y administrar un servidor de automatización propio. Además, puede conectarse con distintos repositorios y entornos internos, por lo que resulta adecuado para una empresa que quiere mantener el control de su infraestructura.

### Herramienta adicional opcional

SonarQube: permite analizar la calidad del código y detectar posibles errores o malas prácticas. Así, el equipo puede revisar estos problemas antes de integrar los cambios en el proyecto.
