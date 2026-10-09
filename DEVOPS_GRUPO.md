# DEVOPS_GRUPO.md

Reflexión grupal de la Práctica 1: Desarrollo colaborativo con Git y GitHub (proyecto gestor-tareas).

## 14.1 Colaboración DevOps (RA1.a)

| Acción realizada | Por qué mejora la colaboración |
|---|---|
| Trabajar en ramas feature | Cada integrante desarrolló su funcionalidad (añadir, eliminar, completar, filtrar) en su propia rama, sin tocar directamente `develop` ni `main`. Así nadie rompió la versión común mientras trabajaba y los cuatro avanzamos a la vez. |
| Pull Request + revisión | Cada cambio quedó visible en GitHub y otro compañero lo revisó antes de integrarlo en `develop`. Esto permitió detectar fallos pronto y dejó registrado quién hizo y quién revisó cada cambio. |
| Resolver un conflicto en equipo | Todos modificamos la misma línea del `README.md`, y al integrar las ramas Git no pudo decidir solo. Tuvimos que ponernos de acuerdo en una única frase final, lo que nos obligó a coordinar decisiones cuando dos trabajos afectan a la misma parte. |

## 14.2 De las comprobaciones manuales a CI/CD (RA1.b)

**CI (Integración Continua):** práctica en la que, cada vez que alguien hace `push` o abre un Pull Request, se ejecutan automáticamente las comprobaciones del proyecto (pruebas, validaciones) para detectar errores cuanto antes y comprobar que el cambio se integra bien con el resto del código.

**CD (Entrega/Despliegue Continuo):** lo que ocurre después de que el software ha superado las comprobaciones de CI: la nueva versión se entrega o se despliega de forma automática (o semiautomática) a un entorno, sin hacerlo a mano.

**Dos comprobaciones de esta práctica que tendría sentido automatizar en un pipeline futuro:**

1. Comprobar que la aplicación carga y que las cuatro funciones (añadir, eliminar, completar/reabrir y filtrar tareas) funcionan, que es lo que hicimos a mano antes de aprobar cada Pull Request.
2. Comprobar que no quedan marcadores de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`) en ningún fichero antes de hacer el merge.

## 14.3 Selección de herramientas (RA1.e)

### Contexto 1: equipo pequeño que ya aloja su proyecto en GitHub y quiere automatizar pruebas al abrir un Pull Request

**Herramienta principal: GitHub Actions.**

Está integrada en el propio repositorio de GitHub, así que no hace falta montar ni mantener ningún servidor aparte. Se puede configurar para que lance las pruebas automáticamente cada vez que se abre o actualiza un Pull Request, que es justo lo que necesita este equipo.

### Contexto 2: empresa que quiere controlar su propio servidor de automatización y conectar diferentes repositorios y entornos internos

**Herramienta principal: Jenkins.**

Es un servidor de automatización que la propia empresa puede instalar y administrar por su cuenta, por lo que mantiene el control sobre dónde se ejecuta. Además permite conectar distintos repositorios y entornos internos y adaptar los pipelines a las necesidades de la organización.

### Herramientas complementarias (opcional)

- **SonarQube:** aportaría análisis estático de la calidad del código en cada ejecución del pipeline, detectando errores y malas prácticas antes de integrar.
- **OWASP ZAP:** aportaría pruebas automatizadas de seguridad sobre la aplicación web, para detectar vulnerabilidades antes de la entrega.