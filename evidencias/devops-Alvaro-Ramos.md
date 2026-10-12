# Reflexión Final - Ejercicio 14: DevOps y CI/CD

**Alumno:** Álvaro Ramos  
**Rama de trabajo:** `debug`  
**Registro de commits individuales:** 2 commits  

---

Este documento recoge la reflexión grupal e individual correspondiente a la Práctica 1 de Introducción a DevOps (DAW2), detallando el enfoque aplicado desde la rama `debug` para el control y depuración del proyecto.

## 1. Colaboración DevOps (RA1.a)

Las acciones realizadas durante el desarrollo del ejercicio han permitido afianzar la cultura colaborativa:

* **Trabajar en ramas `debug` / `feature`:** Permite aislar los trabajos de corrección de errores y nuevas funcionalidades sin comprometer la estabilidad de la rama principal o de integración (`develop`).
* **Pull Request + revisión:** Garantiza la transparencia en los cambios propuestos, permitiendo que el equipo valide el código y aporte mejoras antes de integrarlo.
* **Resolver un conflicto en equipo:** Fomenta la comunicación directa y la toma de decisiones consensuadas cuando concurren modificaciones sobre las mismas líneas de código.

## 2. De las comprobaciones manuales a CI/CD (RA1.b)

### Definiciones
* **CI (Integración Continua):** Automatización de la compilación y pruebas del código cada vez que se actualiza el repositorio (`push` o `Pull Request`), detectando fallos de forma temprana.
* **CD (Entrega/Despliegue Continuo):** Fase automatizada que ocurre tras superar la CI, encargada de empaquetar y desplegar el software hacia los entornos de pruebas o producción.

### Comprobaciones automatizables
1. **Verificación de errores de sintaxis y depuración:** Comprobar automáticamente que los bloques de código en la rama de `debug` no introducen regresiones.
2. **Pruebas funcionales automatizadas:** Ejecutar tests unitarios sobre las tareas de la aplicación web tras cada integración.

## 3. Selección de herramientas (RA1.e)

### Contexto 1: Equipo pequeño con repositorio en GitHub
* **Herramienta:** **GitHub Actions**  
* **Justificación:** Integración nativa y sin coste de infraestructura adicional, ideal para lanzar flujos de prueba automáticos en cada `Pull Request`.

### Contexto 2: Empresa con infraestructura propia y múltiples entornos internos
* **Herramienta:** **Jenkins** (complementado con **SonarQube** para análisis de calidad)  
* **Justificación:** Ofrece control total sobre el servidor de automatización y gran flexibilidad para orquestar pipelines complejos en entornos corporativos cerrados.
