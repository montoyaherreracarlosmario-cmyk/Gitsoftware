export const PRACTICE_MARKER = "git-branching-practice";

export const MENSAJE_SALUDO = "Saludo desde la rama feature/saludo";
export const MENSAJE_DESPEDIDA = "Despedida desde la rama feature/despedida";
export const MENSAJE_CONFLICTO_RAMA = "Mensaje escrito en la rama feature/conflicto";
export const MENSAJE_CONFLICTO_MAIN = "Mensaje escrito directamente en main";

export const missions = [
  {
    id: 1,
    title: "Hacer tu primer commit en main",
    summary: "Poner tu nombre en la bitácora y guardarlo con tu primer commit.",
    body: `## Objetivo
Tu primer commit propio en \`main\`.

## Pasos
1. Clona el repo y entra a la carpeta. Si es tu primera vez con Git en este equipo, configúralo:

\`\`\`bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-correo@ejemplo.com"
git config --global push.autoSetupRemote true
\`\`\`

2. En \`bitacora.md\`, reemplaza la línea de ejemplo por una con tu nombre:

\`\`\`text
- Ana Pérez - Empiezo la práctica - 2026-08-15
\`\`\`

3. Guarda y publica:

\`\`\`bash
git add .
git commit -m "Agrega mi nombre a la bitacora"
git push
\`\`\`

## Criterio de cierre
\`bitacora.md\` publicado en \`main\` con una línea real en vez del ejemplo.`
  },
  {
    id: 2,
    title: "Publicar varios commits con git push",
    summary: "Hacer dos commits pequeños y subirlos juntos con un push.",
    body: `## Objetivo
Practicar el ciclo \`add\` → \`commit\` → \`push\` con dos cambios.

## Pasos
1. En \`main\`, agrega una línea al \`## Registro\` de \`bitacora.md\` y confirma:

\`\`\`bash
git add .
git commit -m "Registra el avance de la mision 2"
\`\`\`

2. Agrega **otra** línea distinta y haz un segundo commit:

\`\`\`bash
git add .
git commit -m "Anota una segunda nota en la bitacora"
\`\`\`

3. Publica los dos de una vez:

\`\`\`bash
git push
\`\`\`

## Criterio de cierre
Al menos dos commits nuevos publicados en \`main\` después de crearse esta misión.`
  },
  {
    id: 3,
    title: "Crear y publicar la rama feature/saludo",
    summary: "Crear tu primera rama de trabajo y publicarla en GitHub.",
    body: `## Objetivo
Crear \`feature/saludo\` a partir de \`main\` y publicarla.

## Pasos
\`\`\`bash
git checkout main
git checkout -b feature/saludo
git push
\`\`\`

Si el push responde \`has no upstream branch\`, actívalo una vez y repite \`git push\`:

\`\`\`bash
git config --global push.autoSetupRemote true
\`\`\`

## Criterio de cierre
La rama \`feature/saludo\` existe en GitHub.`
  },
  {
    id: 4,
    title: "Hacer commits dentro de feature/saludo",
    summary: "Agregar el mensaje de saludo desde tu rama, sin tocar `main`.",
    body: `## Objetivo
Modificar \`mensajes.txt\` desde \`feature/saludo\` y publicarlo.

## Pasos
1. Confirma la rama (debe decir \`On branch feature/saludo\`):

\`\`\`bash
git status
\`\`\`

2. Agrega **al final** de \`mensajes.txt\` esta línea exacta:

\`\`\`text
${MENSAJE_SALUDO}
\`\`\`

3. Guarda y publica:

\`\`\`bash
git add .
git commit -m "Agrega mensaje de saludo"
git push
\`\`\`

## Criterio de cierre
\`feature/saludo\` contiene el saludo publicado. \`main\` todavía no: eso es el aislamiento de las ramas.`
  },
  {
    id: 5,
    title: "Fusionar feature/saludo en main con git merge",
    summary: "Integrar tu rama en `main` con un merge y publicarlo.",
    body: `## Objetivo
Integrar \`feature/saludo\` dentro de \`main\`.

## Pasos
\`\`\`bash
git checkout main
git merge feature/saludo
git push
\`\`\`

El merge dirá \`Fast-forward\`: como \`main\` no había cambiado, Git no combina nada, solo adelanta \`main\` hasta tu commit.

## Criterio de cierre
\`main\` contiene los commits de \`feature/saludo\` y el saludo está publicado en \`main\`.`
  },
  {
    id: 6,
    title: "Crear la rama feature/despedida desde main",
    summary: "Crear una segunda rama partiendo del `main` que ya tiene el saludo.",
    body: `## Objetivo
Crear y publicar \`feature/despedida\` desde \`main\`.

## Pasos
\`\`\`bash
git checkout main
git checkout -b feature/despedida
git push
\`\`\`

Abre \`mensajes.txt\`: debe tener ya el saludo. Si no lo tiene, creaste la rama desde el sitio equivocado.

## Criterio de cierre
\`feature/despedida\` existe en GitHub y contiene el saludo integrado en la misión 5.`
  },
  {
    id: 7,
    title: "Hacer commit y push en feature/despedida",
    summary: "Agregar el mensaje de despedida desde la segunda rama y publicarlo.",
    body: `## Objetivo
Agregar una línea nueva desde \`feature/despedida\`.

## Pasos
1. Confirma la rama:

\`\`\`bash
git status
\`\`\`

2. Agrega **al final** de \`mensajes.txt\` esta línea exacta:

\`\`\`text
${MENSAJE_DESPEDIDA}
\`\`\`

3. Guarda y publica:

\`\`\`bash
git add .
git commit -m "Agrega mensaje de despedida"
git push
\`\`\`

## Criterio de cierre
\`feature/despedida\` contiene el mensaje de despedida publicado.`
  },
  {
    id: 8,
    title: "Fusionar feature/despedida y moverte entre ramas",
    summary: "Integrar la segunda rama en `main` y usar `git checkout` para ver qué contiene cada rama.",
    body: `## Objetivo
Fusionar \`feature/despedida\` en \`main\` y comprobar, moviéndote entre ramas, qué tiene cada una.

## Pasos
1. Integra y publica:

\`\`\`bash
git checkout main
git merge feature/despedida
git push
\`\`\`

2. Cambia de rama y abre \`mensajes.txt\` en cada una: \`main\` tiene **tres** líneas; \`feature/saludo\` sigue con **dos**. Git reemplaza el contenido de tu carpeta al cambiar de rama.

\`\`\`bash
git checkout feature/saludo
git checkout main
\`\`\`

## Criterio de cierre
\`main\` contiene el saludo y la despedida integrados.`
  },
  {
    id: 9,
    title: "Provocar y resolver un conflicto de merge",
    summary: "Cambiar la misma línea en dos ramas y resolver el conflicto conservando ambos cambios.",
    body: `## Objetivo
Crear un conflicto entre \`main\` y \`feature/conflicto\` y resolverlo conservando los dos cambios.

## 1. Rama nueva y cambia la primera línea
\`\`\`bash
git checkout main
git checkout -b feature/conflicto
\`\`\`

En \`mensajes.txt\`, reemplaza la primera línea por:

\`\`\`text
${MENSAJE_CONFLICTO_RAMA}
\`\`\`

\`\`\`bash
git add .
git commit -m "Cambia el mensaje inicial desde la rama"
git push
\`\`\`

## 2. Cambia esa misma línea en main
\`\`\`bash
git checkout main
\`\`\`

En \`mensajes.txt\`, reemplaza esa misma primera línea original por:

\`\`\`text
${MENSAJE_CONFLICTO_MAIN}
\`\`\`

\`\`\`bash
git add .
git commit -m "Cambia el mensaje inicial desde main"
git push
\`\`\`

## 3. Fusiona y mira el conflicto
\`\`\`bash
git merge feature/conflicto
\`\`\`

Git se detiene con \`CONFLICT\`. En \`mensajes.txt\` verás las dos versiones entre las marcas \`<<<<<<<\`, \`=======\` y \`>>>>>>>\`.

## 4. Resuelve conservando ambos
Borra las tres líneas de marcas y deja los dos mensajes:

\`\`\`text
${MENSAJE_CONFLICTO_MAIN}
${MENSAJE_CONFLICTO_RAMA}
\`\`\`

\`\`\`bash
git add .
git commit -m "Resuelve el conflicto conservando ambos mensajes"
git push
\`\`\`

Para cancelar el merge y empezar de cero: \`git merge --abort\`.

## Criterio de cierre
\`main\` incluye los commits de \`feature/conflicto\`, los dos mensajes y sin marcas de conflicto.`
  },
  {
    id: 10,
    title: "Explicar el flujo en tu bitácora",
    summary: "Escribir con tus palabras qué hiciste con commits, push, ramas y merges.",
    body: `## Objetivo
Completar la sección \`## Lo que aprendí\` de \`bitacora.md\`.

## Pasos
1. En \`main\`, reemplaza la línea de ejemplo de \`## Lo que aprendí\` por al menos un párrafo que responda:
   - ¿Qué hace \`git commit\` y qué hace \`git push\`?
   - ¿Para qué te sirvieron las ramas \`feature/saludo\`, \`feature/despedida\` y \`feature/conflicto\`?
   - ¿Qué hace \`git merge\` y qué diferencia notaste entre los merges de las misiones 5 y 8 y el de la 9?
   - ¿Por qué apareció el conflicto y cómo lo resolviste?

2. Publica tu explicación:

\`\`\`bash
git add .
git commit -m "Explica el flujo de ramas y merges en la bitacora"
git push
\`\`\`

## Criterio de cierre
\`bitacora.md\` explica, con tus palabras, commit, push, ramas, merge y el conflicto.`
  }
];

export function missionNumber(id) {
  return String(id).padStart(2, "0");
}

export function missionMarker(id) {
  return `<!-- ${PRACTICE_MARKER}:mission=${id} -->`;
}

export function missionIssueTitle(mission) {
  return `[Misión ${missionNumber(mission.id)}] ${mission.title}`;
}

export function missionIssueBody(mission) {
  return `${missionMarker(mission.id)}

**Qué harás:** ${mission.summary}

${mission.body}

---
Cuando publiques con \`git push\`, el workflow **Validar progreso de misiones** revisa los criterios: si cumples, comenta el resultado, cierra este issue y crea la siguiente misión; si falta algo, deja una checklist. No cierres el issue a mano: se reabre solo.`;
}

export function getMissionById(id) {
  return missions.find((mission) => mission.id === Number(id));
}

export function getNextMission(id) {
  return getMissionById(Number(id) + 1);
}

export function extractMissionId(text = "") {
  const markerMatch = text.match(/git-branching-practice:mission=(\d+)/i);
  if (markerMatch) {
    return Number(markerMatch[1]);
  }

  const titleMatch = text.match(/\[?Misi[oó]n\s+0?(\d+)\]?/i);
  if (titleMatch) {
    return Number(titleMatch[1]);
  }

  return null;
}
