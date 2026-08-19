# Guía para docentes

Documento interno. El estudiante solo necesita el `README.md`.

## Qué cubre la práctica

Cuatro operaciones: **commit, push, creación de ramas y merge**, incluida la resolución de un conflicto real. No hay Pull Requests, releases, tags ni hotfixes: es la versión introductoria previa a una práctica de Git Flow.

Vocabulario cerrado, limitado a lo que se enseña en clase:

```text
git add .        git commit -m "Mensaje"    git push
git checkout -b  git checkout               git merge
```

No se usa `-u`/`--set-upstream` (se asume `push.autoSetupRemote`, que el `README` y la misión 1 configuran), ni `--no-ff`, ni `git pull` (nadie más escribe en el remoto), ni borrado de ramas.

**El estudiante no instala nada.** No hay Node, ni `npm`, ni dependencias: solo Git y un editor de texto. Node solo se usa dentro de GitHub Actions, en el runner.

## Estructura del repositorio

```text
README.md                        guía completa del estudiante
bitacora.md                      lo edita en las misiones 1, 2 y 10
mensajes.txt                     lo edita en las misiones 4, 7 y 9
CLAUDE.md / AGENTS.md            instrucciones de tutoría para asistentes de IA
.github/GUIA-DOCENTE.md          este documento
.github/copilot-instructions.md  gancho de tutoría para Copilot
.github/instructions/tutoria.md  el texto completo de la tutoría
.github/scripts/*.mjs            automatización (5 archivos)
.github/workflows/*.yml          3 workflows
```

`mensajes.txt` es deliberadamente trivial: lo importante es que todas las ramas tocan el mismo archivo, lo que permite que la misión 9 genere un conflicto real y verificable en lugar de simulado.

## La secuencia de misiones

| # | Misión | Criterio automático |
| --- | --- | --- |
| 1 | Primer commit en `main` | `bitacora.md` en `main` tiene una línea real, sin el texto de ejemplo |
| 2 | Publicar varios commits | ≥ 2 commits nuevos en `main` desde que se creó la misión, con mensajes descriptivos |
| 3 | Crear `feature/saludo` | La rama existe en el remoto |
| 4 | Commit en la rama | `mensajes.txt` de la rama contiene el mensaje de saludo |
| 5 | Merge de `feature/saludo` | Los commits están en `main` y el mensaje aparece allí (fast-forward) |
| 6 | Crear `feature/despedida` | La rama existe y ya incluye el saludo (nació del `main` correcto) |
| 7 | Commit en la segunda rama | La rama contiene el mensaje de despedida |
| 8 | Merge y navegación entre ramas | `main` tiene los dos mensajes integrados |
| 9 | Conflicto resuelto | `main` conserva los dos mensajes y no quedan marcas `<<<<<<<` |
| 10 | Reflexión final | `## Lo que aprendí` de `bitacora.md`, con texto propio, menciona commit, push, ramas, merge y conflicto |

Como los merges van sin `--no-ff`, los de las misiones 5 y 8 son *fast-forward* y no dejan commit de fusión. Eso no es un defecto: los diagramas y la checklist lo explican, y el contraste con la misión 9 —único commit de fusión del historial— es justo lo que hace visible qué es una fusión real.

Las misiones 1 y 10 rechazan el texto de la plantilla: no basta con dejar el archivo como venía.

## Los tres workflows

- **Iniciar práctica**: `workflow_dispatch` y `push` a `main`. Crea la primera misión, sin duplicarla si ya existe.
- **Validar progreso de misiones**: escucha `create`, `delete`, `push` a cualquier rama y ejecución manual. En cada ejecución revisa **todas las misiones abiertas**, no solo la que corresponde al evento: los criterios miran el estado publicado del repositorio, así que quien cree la rama, commitee y publique todo en un mismo push no se queda atascado. Al cerrar una misión crea la siguiente en el mismo job y la evalúa en cadena.
- **Proteger cierre de misiones**: reabre los issues cerrados a mano y vuelve a cerrar los que ya tenían validación completada.

Cuando un workflow cierra un issue con `GITHUB_TOKEN`, GitHub no dispara otro workflow por ese cierre. Por eso el de progreso cierra la misión y crea la siguiente dentro del mismo job.

## Puesta en marcha

1. En **Settings > General**, activa **Template repository**.
2. Mantén Actions habilitado y los issues permitidos.
3. En **Settings > Actions > General**, el `GITHUB_TOKEN` necesita permisos de lectura y escritura.

No hacen falta secretos externos.

## Revisar el avance

- Los issues cerrados en orden, con los comentarios de la validación.
- `git log --oneline --graph --all`: debe verse una sola bifurcación, la del conflicto.
- `mensajes.txt` en `main` con los cuatro mensajes y sin marcas de conflicto.
- La reflexión de `bitacora.md`, que es lo menos automatizable y lo más revelador.

Si alguien queda atascado: **Actions > Validar progreso de misiones > Run workflow** revisa todas las misiones abiertas y avanza si el repositorio ya cumple.

## Modificar la práctica

Todo el contenido está en `.github/scripts/practice-missions.mjs`:

1. Edita el arreglo `missions` conservando ids consecutivos y los campos `summary`, `why`, `diagram` y `body`.
2. Ajusta la validación correspondiente en `evaluateMission`, dentro de `.github/scripts/validate-progress.mjs`.
3. Si cambias los textos exactos, hazlo en las constantes `MENSAJE_*`: los issues y las validaciones los toman de ahí.
4. Comprueba la sintaxis:

```bash
node --check .github/scripts/practice-missions.mjs
node --check .github/scripts/validate-progress.mjs
```

## Uso de IA por parte de los estudiantes

`CLAUDE.md`, `AGENTS.md` y `.github/copilot-instructions.md` son los archivos que cada herramienta carga por convención; los tres apuntan a `.github/instructions/tutoria.md`, que instruye al asistente para responder como tutor: explica, interpreta errores y da pistas, pero no ejecuta los comandos ni edita los archivos evaluados. Nada de esto se anuncia en el `README`.

Ten en cuenta su alcance real: es una instrucción que el asistente lee y normalmente respeta, no un bloqueo técnico. Un estudiante decidido puede ignorarla. Conviene complementarla con la evidencia del proceso —el historial de commits, sus fechas y su tamaño, los comentarios de los workflows— y, si tu curso lo permite, con una defensa oral breve.

## Evaluación sugerida

- 25% commits publicados con mensajes claros (misiones 1 y 2).
- 25% creación y uso correcto de ramas (misiones 3, 4, 6 y 7).
- 25% merges correctos y navegación entre ramas (misiones 5 y 8).
- 15% resolución del conflicto (misión 9).
- 10% reflexión final (misión 10).
