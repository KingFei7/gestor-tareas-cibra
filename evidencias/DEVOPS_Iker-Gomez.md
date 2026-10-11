# DEVOPS_GRUPO.md

**Práctica 1: Desarrollo colaborativo con Git y GitHub (gestor de tareas)**
**Rama de la que partí:** `feature/eliminar-tarea`

## 14.1 Colaboración DevOps (RA1.a)

**Trabajar en ramas feature.** Mi funcionalidad (eliminar tareas) la desarrollé en `feature/eliminar-tarea`, mientras otros compañeros hacían añadir, completar y filtrar en sus ramas. Como cada cambio estaba aislado, nadie dependía de que otro terminara y ninguna rama inestable llegó a `develop` ni a `main`. Esto reduce el riesgo de romper la versión común y deja claro qué se ha tocado en cada funcionalidad.

**Pull Request + revisión.** Antes de integrar mi rama en `develop` abrí un Pull Request con título y descripción de lo que había hecho y cómo lo probé. Otro compañero lo revisó en GitHub, de forma que el cambio dejó de ser algo privado de mi ordenador y pasó a ser visible y discutible. Si pedía una corrección, bastaba con hacer otro commit en la misma rama, y el Pull Request se actualizaba solo.

**Resolver un conflicto en equipo.** Todos cambiamos la misma línea del `README.md`, así que al hacer `git merge origin/develop` Git marcó el conflicto y no pudo decidir por sí mismo. Hubo que identificar el fichero, acordar una frase final, borrar los marcadores y cerrar el merge con un commit. Esto demuestra que la colaboración no es solo repartirse tareas: cuando dos trabajos tocan lo mismo hay que comunicarse y decidir juntos.

**Relación con la cultura DevOps.** Git y GitHub no son DevOps por sí solos, pero este flujo (ramas, revisión, integración frecuente) aplica sus ideas: trabajo colaborativo, cambios pequeños y trazables, y reproducibilidad.

## 14.2 De las comprobaciones manuales a CI/CD (RA1.b)

### Cómo lo hicimos en la práctica (manual)

Antes de aprobar cada Pull Request, alguien abría `index.html` y probaba a mano que la funcionalidad iba bien. Funciona con un proyecto pequeño, pero depende de que alguien se acuerde de hacerlo y de que lo haga igual cada vez.

### Definiciones

**CI (Integración Continua):** práctica de integrar los cambios en la rama común con frecuencia y ejecutar de forma automática las comprobaciones (pruebas, validaciones) cada vez que se hace `push` o se abre un Pull Request. Su importancia está en que los errores se detectan en minutos y no cuando ya se ha mezclado todo.

**CD (Entrega/Despliegue Continuo):** el paso siguiente: cuando el código ha superado las comprobaciones de CI, la nueva versión se entrega (o se despliega) de forma automática o con una aprobación mínima. Así las versiones salen de forma rápida, repetible y con menos errores humanos.

### Esquema del flujo futuro

```
push / Pull Request  ->  pruebas automáticas (CI)  ->  integración en develop  ->  entrega/despliegue (CD)
```

### Comprobaciones que automatizaría

| Comprobación manual de la práctica | Cómo se automatizaría | Cuándo se ejecutaría |
|---|---|---|
| Abrir la app y probar añadir, eliminar, completar y filtrar | Pruebas automáticas sobre la interfaz y las funciones | Al abrir o actualizar un Pull Request |
| Revisar a ojo que no quedan marcadores de conflicto en los ficheros | Un script que busque `<<<<<<<`, `=======` y `>>>>>>>` y falle si los encuentra | En cada `push` |

## 14.3 Selección de herramientas (RA1.e)

### Contexto 1: equipo pequeño que ya está en GitHub y quiere automatizar pruebas al abrir un Pull Request

**Herramienta principal: GitHub Actions.**

Justificación: el equipo ya usa GitHub, y Actions está integrada en el propio repositorio, por lo que no requiere servidores ni instalación. Se configura con un fichero dentro del repositorio y se lanza solo al abrir o actualizar un Pull Request, de modo que el resultado de las pruebas aparece en la propia página del PR. Para un equipo pequeño es la opción con menos coste de puesta en marcha y mantenimiento.

### Contexto 2: empresa que quiere su propio servidor de automatización y conectar repositorios y entornos internos

**Herramienta principal: Jenkins.**

Justificación: Jenkins puede instalarlo y administrarlo la propia empresa en su infraestructura, de modo que controla dónde se ejecutan los procesos y qué datos salen de la red. Se puede conectar a distintos repositorios y a entornos internos, y se adapta a pipelines personalizados. Es más trabajo de mantener que una solución integrada, pero ofrece el control que se pide en este contexto.

### Comparación resumida

| | GitHub Actions | Jenkins |
|---|---|---|
| Dónde se ejecuta | Integrado en GitHub | Servidor propio de la organización |
| Mantenimiento | Bajo | Lo asume la organización |
| Control sobre la infraestructura | Limitado | Total |
| Encaja mejor en | Contexto 1 | Contexto 2 |

### Herramientas complementarias (opcional)

- **SonarQube:** análisis estático del código; aportaría informes de calidad, errores probables y código duplicado en cada ejecución del pipeline.
- **OWASP ZAP:** pruebas de seguridad automáticas sobre la aplicación web, para detectar vulnerabilidades antes de la entrega.

## Reflexión final personal

Lo que más me ha quedado claro de la práctica es que el valor de Git y GitHub está en el proceso (ramas, revisión, conflictos resueltos entre todos) y no tanto en el código. También veo que muchas de las comprobaciones que hicimos a mano serían buenas candidatas para automatizar en un futuro pipeline de CI/CD.
