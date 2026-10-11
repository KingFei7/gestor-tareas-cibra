# Reflexión Final - Ejercicio 14: DevOps y CI/CD

Este documento recoge la reflexión grupal correspondiente a la Práctica 1 de Introducción a DevOps (DAW2), dando respuesta a los bloques de colaboración DevOps, Integración y Entrega Continua (CI/CD), y selección de herramientas.

---

## 14.1. Colaboración DevOps (RA1.a)

A continuación se explica cómo cada una de las acciones realizadas durante la práctica mejora la colaboración en el equipo:

* **Trabajar en ramas `feature`:** Permite desarrollar funcionalidades de forma aislada y en paralelo sin interferir en la versión común o estable del proyecto, evitando romper el código de los compañeros mientras se trabaja.
* **Pull Request + revisión:** Hace visibles los cambios realizados y fomenta la comunicación y el control de calidad, permitiendo que otro miembro del equipo revise el código y valide la funcionalidad antes de integrarla en la rama de desarrollo.
* **Resolver un conflicto en equipo:** Obliga a coordinar decisiones de manera conjunta cuando dos trabajos afectan simultáneamente a la misma parte del código, garantizando que el resultado final sea coherente y consensuado.

---

## 14.2. De las comprobaciones manuales a CI/CD (RA1.b)

### Definiciones breves
* **CI (Integración Continua):** Proceso automatizado en el que el código de los desarrolladores se valida, compila y prueba de forma automática cada vez que se realiza un `push` o se abre un `Pull Request`, detectando errores de forma temprana.
* **CD (Entrega/Despliegue Continuo):** Fase posterior donde el software, tras superar de manera satisfactoria todas las comprobaciones automáticas del pipeline de CI, se prepara y despliega de forma automática en los entornos correspondientes (producción o preproducción).

### Comprobaciones manuales susceptibles de automatización
En un pipeline de CI futuro, tendría especial sentido automatizar las siguientes comprobaciones realizadas en esta práctica:
1. **Validación de sintaxis y calidad del código:** Ejecutar linters automáticos para comprobar que el código JavaScript sigue las reglas y estilos definidos sin necesidad de revisión visual manual.
2. **Pruebas automáticas de integración/funcionalidad:** Comprobar mediante scripts automatizados que las interacciones básicas (como añadir, eliminar o filtrar tareas) responden correctamente tras cada fusión de código.

---

## 14.3. Selección de herramientas (RA1.e)

### Contexto 1: Equipo pequeño que ya aloja su proyecto en GitHub y quiere automatizar pruebas al abrir un Pull Request.
* **Herramienta seleccionada:** **GitHub Actions**
* **Justificación:** Al encontrarse el código alojado en GitHub, GitHub Actions se integra de forma nativa sin necesidad de configurar servidores externos. Permite disparar flujos de trabajo automáticos (workflows) directamente al abrir un `Pull Request`, facilitando una configuración rápida y ligera ideal para equipos pequeños.

### Contexto 2: Empresa que quiere controlar su propio servidor de automatización y conectar diferentes repositorios y entornos internos.
* **Herramienta seleccionada:** **Jenkins** (pudiéndose complementar opcionalmente con **SonarQube** para el análisis estático de calidad).
* **Justificación:** Jenkins ofrece un control total sobre la infraestructura propia de la empresa mediante un servidor autogestionado. Permite una gran flexibilidad y personalización para orquestar pipelines complejos que conecten múltiples repositorios internos, herramientas de seguridad y diversos entornos de despliegue corporativos.
