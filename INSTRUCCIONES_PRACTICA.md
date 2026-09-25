# Práctica 1 - Desarrollo colaborativo con Git y GitHub

## Proyecto

Trabajaréis sobre un pequeño gestor de tareas. El proyecto inicial muestra tareas, pero cuatro funcionalidades están sin implementar. Cada funcionalidad se desarrollará en una rama `feature/*` distinta y se integrará en `develop` mediante Pull Request.

## Reparto de funcionalidades

| Rama | Archivo principal | Requisito |
|---|---|---|
| `feature/anadir-tarea` | `js/features/anadir.js` | Añadir tareas no vacías desde el formulario. |
| `feature/eliminar-tarea` | `js/features/eliminar.js` | Eliminar la tarea seleccionada. |
| `feature/completar-tarea` | `js/features/completar.js` | Alternar una tarea entre pendiente y completada. |
| `feature/filtrar-tareas` | `js/features/filtrar.js` | Mostrar todas, pendientes o completadas. |

El objetivo principal no es la dificultad del JavaScript, sino practicar correctamente Git y GitHub.

## Reglas obligatorias

1. El repositorio tendrá `main` y `develop`.
2. Todas las funcionalidades parten de `develop` actualizado.
3. Cada persona trabaja en su propia rama `feature/*`.
4. Cada funcionalidad tendrá al menos **dos commits con mensajes claros**.
5. Cada rama se subirá a GitHub y se integrará con un **Pull Request hacia `develop`**.
6. El Pull Request deberá revisarlo otra persona del grupo.
7. No se trabaja directamente sobre `main` ni se suben funcionalidades directamente a `develop`.
8. Antes de finalizar una rama se incorporarán los cambios recientes de `develop` mediante `fetch` + `merge origin/develop`.
9. Cada persona modificará además la misma línea de `README.md`, en la sección **Estado del proyecto**, para provocar un conflicto real.
10. El conflicto se resolverá conservando una frase consensuada por el equipo.
11. Cuando todas las funcionalidades estén en `develop`, se abrirá un Pull Request `develop -> main`.
12. Tras el merge final se creará y subirá el tag anotado `v1.0`.

## Cambio obligatorio en README para provocar el conflicto

Cada rama reemplazará `Proyecto en desarrollo.` por una frase distinta. Por ejemplo:

- Añadir: `Proyecto preparado para añadir tareas.`
- Eliminar: `Proyecto preparado para eliminar tareas.`
- Completar: `Proyecto preparado para completar tareas.`
- Filtrar: `Proyecto preparado para filtrar tareas.`

Cuando `develop` ya contenga uno de esos cambios, al actualizar otra feature deberá aparecer el conflicto en `README.md`.

## Criterios de aceptación por funcionalidad

### Añadir tareas
- Una tarea con texto válido aparece en la lista.
- Una cadena vacía o solo con espacios no se añade.
- El campo se limpia después de añadir.

### Eliminar tareas
- Pulsar **Eliminar** borra únicamente esa tarea.
- El resto de tareas permanece sin cambios.

### Completar tareas
- Pulsar **Completar** cambia el estado de la tarea.
- Una tarea completada puede volver a estado pendiente.

### Filtrar tareas
- `Todas` muestra todas las tareas.
- `Pendientes` muestra solo las no completadas.
- `Completadas` muestra solo las completadas.

## Evidencias a entregar

Completad `EVIDENCIAS.md` con:

- URL del repositorio.
- URL de cada Pull Request.
- Explicación breve del conflicto resuelto.
- Salida final de `git log --oneline --graph --all --decorate`.
- Confirmación del tag `v1.0`.

## Criterios de evaluación trabajados - RA3

- **CE b)** Se ha utilizado Git para gestionar el control de versiones en proyectos colaborativos.
- **CE c)** Se han gestionado repositorios remotos y se ha colaborado en plataformas de terceros.
- **CE d)** Se han aplicado flujos de trabajo estandarizados como GitFlow y Trunk-based Development para la organización de versiones. En esta práctica se utiliza un flujo tipo GitFlow simplificado: `main`, `develop` y `feature/*`.
- **CE e)** Se han resuelto conflictos de código y realizado fusiones en equipos distribuidos, siguiendo buenas prácticas.



## Evidencias individuales de RA1

Cada integrante debe copiar `evidencias/DEVOPS_PLANTILLA.md`, renombrarla como `evidencias/devops-nombre-apellido.md` y completarla en su propia rama feature. Las respuestas se terminan después de realizar el Pull Request, la revisión y el conflicto obligatorio.
