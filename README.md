# NonStop Gym 24H

Landing page estática publicada en Vercel desde la rama `main`.

- `public/`: lo único que se publica (`index.html`, CSS compilado, fuentes, favicon, imagen OG, `robots.txt`, `sitemap.xml`).
- `src/input.css` + `tailwind.config.js`: fuente de los estilos.
- `DESIGN.md`: sistema de diseño (Kinetic Obsidian).
- `serve.ps1`: servidor local sin dependencias → `powershell -ExecutionPolicy Bypass -File serve.ps1 -Port 8080`.

## Compilar el CSS

Tras cambiar clases en `public/index.html` o `src/input.css`:

```
powershell -ExecutionPolicy Bypass -File build.ps1
```

Genera `public/assets/styles.<hash>.css` y actualiza el enlace en `index.html`. Necesita el
[CLI standalone de Tailwind v3.4.17](https://github.com/tailwindlabs/tailwindcss/releases/tag/v3.4.17)
(`tailwindcss-windows-x64.exe`, sin Node) en `tools/tailwindcss.exe`; `tools/` no se sube al repo.

## Caché

Todo lo que hay en `public/assets/` se sirve con `Cache-Control: immutable` durante un año
(`vercel.json`). Por eso cada archivo de ahí lleva un hash en el nombre: si cambia el contenido,
tiene que cambiar el nombre. El CSS lo hace `build.ps1`; las fuentes de `assets/fonts/` ya
llevan el suyo y no deberían tocarse a mano.

## Fuentes

Barlow Condensed (600/700/800) y Plus Jakarta Sans (variable) están alojadas en
`public/assets/fonts/` (licencia OFL), con `preload` de las tres críticas en el `<head>`.
Material Symbols es un subconjunto con solo los iconos que usa la página (licencia Apache 2.0):
para añadir un icono nuevo hay que volver a descargar el subconjunto con su nombre incluido.
