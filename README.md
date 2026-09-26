--Laboratorio 4

App pequeña para practicar consumo de una API publica, manipulacion del DOM y Husky + ESLint

Busca productos  en Open Food y los va mostrando en pantalla conforme uno escribe o le da click a buscar

-- Archivos

- index.html
- style.css
- script.js
- eslint.config.js
- .husky/pre-commit
- package.json / package-lock.json

-- Como correrlo

npm install


Con eso ya queda todo listo, incluyendo Husky (se activa solo por el script `prepare`).

Después simplemente se abre `index.html` en el navegador. Al cargar la página ya trae resultados de "galletas", y desde ahí podés buscar lo que quieras

-- ESLint

npm run lint


Reglas configuradas: nada de `var`, comillas dobles, punto y coma obligatorio, `==` prohibido (hay que usar `===`), y que no queden variables sin usarse

-- Husky

Se instaló así:

npm install husky --save-dev
npx husky init


Y el hook de `pre-commit` corre `npx eslint .` cada vez que uno intenta hacer un commit, si el código tiene algún error, el commit no pasa

Lo probé a propósito, metí una línea con `var` y comillas simples en `script.js` y traté de commitear Husky lo frenó al momento y me tiró los 4 errores de ESLint Corregí el archivo y ahí sí dejó commitear de manera normal

-- De donde se sacan los datos?

API de Open Food Facts