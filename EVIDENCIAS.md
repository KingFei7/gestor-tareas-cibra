## Evidencias del grupo

- URL del repositorio GitHub: https://github.com/KingFei7/gestor-tareas-cibra
- PR feature/anadir-tarea -> develop: https://github.com/KingFei7/gestor-tareas-cibra/pull/1
- PR feature/eliminar-tarea -> develop: https://github.com/KingFei7/gestor-tareas-cibra/pull/2
- PR feature/completar-tarea -> develop: https://github.com/KingFei7/gestor-tareas-cibra/pull/6
- PR feature/filtrar-tareas -> develop: https://github.com/KingFei7/gestor-tareas-cibra/pull/7
- PR debug -> develop: https://github.com/KingFei7/gestor-tareas-cibra/pull/5
- PR develop -> main: (se añade más adelante)
- Conflicto de README.md: apareció al integrar ramas feature en las que se había modificado la misma línea del README. En el historial se ve resuelto en el commit `6c1fa82` ("Resuelto conflicto en README", rama feature/anadir-tarea) y en `5e51fb6` ("Fix README.md by resolving merge conflicts"). Se resolvió acordando una única frase, borrando los marcadores y cerrando el merge con un commit.
- El tag `v1.0` está publicado: https://github.com/KingFei7/gestor-tareas-cibra/releases/tag/v1.0

### Nota sobre el PR #12

El PR #12 (`feature/eliminar-tarea`) se fusionó directamente en `main` y no en `develop`, con el único fin de incluir un último commit de comentarios en `js/features/eliminar.js` (`2a582a7`). La rama `feature/eliminar-tarea` ya había pasado por el flujo correcto `feature -> develop` en el PR #2.

## Historial final

```
*   69b0616 (origin/main, origin/HEAD) Merge pull request #13 from KingFei7/develop
|\
| * 5f514a3 (HEAD -> develop, origin/develop) Cambio de nombre al correcto DEVOPS_Alberto-Roiz.md to devops-Alberto-Roiz.md
| * abe35bc Cambio de nombre DEVOPS_Alvaro-DeBenito.md to devops-Alvaro-DeBenito.md
| * f98c404 Update y cambio de nombre a DEVOPS_Alvaro-Ramos.md to devops-Alvaro-Ramos.md
| * 0e1d2b7 Cambio de nombre al correto DEVOPS_CARLOS-GONZÁLEZ.md to devops-Carlos-González.md
| * a4405d2 Mejora de explicacion y cambio de nombre al correcto DEVOPS_Iker-Gomez.md to devops-Iker-Gomez.md
* |   d8c3be7 Merge pull request #12 from KingFei7/feature/eliminar-tarea
|\ \
| * | 2a582a7 (origin/feature/eliminar-tarea) Update eliminar.js añadiendo comentarios
* | |   d5a4d8e Merge pull request #11 from KingFei7/develop
|\ \ \
| | |/
| |/|
| * | bb28843 Rename DEVOPS_CARLOS_GONZÁLEZ.md to DEVOPS_CARLOS-GONZÁLEZ.md
| * | 184e366 Rename devops-Alberto-Roiz.md to DEVOPS_Alberto-Roiz.md
| * | d39fed1 Rename DEVOPS-Alvaro-Ramos.md to DEVOPS_Alvaro-Ramos.md
| * | ab0320d Rename 2 DEVOPS-Iker-Gomez.md to DEVOPS_Iker-Gomez.md
| * | 5165e4e Rename DEVOPS_Alvaro_DeBenito.md to DEVOPS_Alvaro-DeBenito.md
| * | f10e3d4 Create DEVOPS-Alvaro-Ramos.md
| * | a00fc52 Update and rename devops-Iker-Gomez.md to DEVOPS-Iker-Gomez.md
| * | 044efb6 Añadido el archivo de Alvaro De Benito
| * | 84f2da1 Añadida reflexión DevOps de Alberto Roiz
| * |   dd1144b Ejercicio14.md
| |\ \
| | * | 0f0f318 Create DEVOPS_CARLOS_GONZÁLEZ.md file
| * | | cb5bb5b Ejercicio14.md
* | | | d70b801 Update EQUIPO.md
* | | |   31dd1a1 (main) Merge pull request #10 from KingFei7/develop
|\ \ \ \
| | |/ /
| |/| |
| * | |   a00a0b7 Merge branch 'main' into develop
| |\ \ \
| |/ / /
|/| | |
* | | |   6a2d31b Readme actualizado
|\ \ \ \
| | |_|/
| |/| |
| * | | 0c147c7 Actualizado estado del proyecto en README eliminar tareas
* | | |   a5af2d5 Merge pull request #4 from KingFei7/feature/filtrar-tareas
|\ \ \ \
| | | * \   b948178 md del grupo añadido
| | | |\ \
| | | | * | 5e51fb6 Fix README.md by resolving merge conflicts
| | | | |/
| | | * / 3963519 md del grupo añadido
| | | |/
| | | *   eab1133 Merge pull request #9 from KingFei7/feature/anadir-tarea
| | | |\
| | | | *   6c1fa82 (origin/feature/anadir-tarea) Resuelto conflicto en README
| | | | |\
| | | | |/
| | | |/|
| | | * | 75d01e9 Update project status message in README
| | | * | 8f212cd Preparado para tareas
| | |/ /
| | | * 2c60bb8 Readme actualizado con Proyecto preparado
| | |/
| | *   bbc2fa3 Merge pull request #7 from KingFei7/feature/filtrar-tareas
| | |\
| | |/
| |/|
| * |   56ba852 (origin/feature/filtrar-tareas) Merge branch 'main' into feature/filtrar-tareas
| |\ \
| |/ /
|/| |
* | |   7e5f454 Merge pull request #3 from KingFei7/feature/completar-tarea
|\ \ \
| * | | 38bfe86 (origin/feature/completar-tarea) Actualizado estado del proyecto en README
| * | | 0a35d99 Implementado completar y reabrir tareas
| | * | c2df388 Actualizado del README
| | * | 7a1207b Añadido manejo de filtrar tareas
| |/ /
| | *   bf127c8 Merge pull request #5 from KingFei7/debug
| | |\
| | | * 2959309 (origin/debug) feat: añadir script helper para depuracion
| | | * 4b963f5 feat: añadir script helper para depuracion
| |_|/
|/| |
* | | 1bc97a6 Añadir js de Ramos
* | | 4829ef1 añadir equipo.md
|/ /
| *   b9bbc84 Merge pull request #1 from KingFei7/feature/anadir-tarea
| |\
| | * 2cc6a05 Refactorizada la validación con una función auxiliar y añadido auto-focus
| | * 55df981 Añadida validación y lógica del formulario de tareas
| |/
|/|
| * 4c436d0 Merge pull request #2 from KingFei7/feature/eliminar-tarea
|/|
| * 7d6e100 feat(eliminar): implementar y documentacion mejorada de la funcion activarEliminar
| * 7a60dff Implementar funcion activarEliminar2
|/
* 104cec8 Proyecto inicial
```

## Evidencias individuales RA1

Comprobar que cada integrante ha incluido su fichero `evidencias/devops-nombre-apellido.md`.
Esta todo subido