# NonStop Gym 24H

Landing page estática publicada en Vercel desde la rama `main`.

- `public/`: lo único que se publica (`index.html`, CSS compilado, favicon, imagen OG, `robots.txt`, `sitemap.xml`).
- `src/input.css` + `tailwind.config.js`: fuente de los estilos.
- `DESIGN.md`: sistema de diseño (Kinetic Obsidian).
- `serve.ps1`: servidor local sin dependencias → `powershell -ExecutionPolicy Bypass -File serve.ps1 -Port 8080`.

## Recompilar el CSS

Tras cambiar clases en `public/index.html`, regenera `public/assets/styles.css` con el
[CLI standalone de Tailwind v3.4.17](https://github.com/tailwindlabs/tailwindcss/releases/tag/v3.4.17)
(`tailwindcss-windows-x64.exe`, no necesita Node):

```
tailwindcss-windows-x64.exe -c tailwind.config.js -i src/input.css -o public/assets/styles.css --minify
```
