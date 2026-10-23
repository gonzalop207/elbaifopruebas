param([string]$Tailwind = (Join-Path $PSScriptRoot 'tools\tailwindcss.exe'))

# Compila el CSS y le pone en el nombre un hash de su contenido (styles.<hash>.css).
# Así /assets se puede cachear como immutable: un CSS nuevo siempre tiene un nombre nuevo.
$ErrorActionPreference = 'Stop'
$assets = Join-Path $PSScriptRoot 'public\assets'
$html = Join-Path $PSScriptRoot 'public\index.html'
$tmp = Join-Path $assets 'styles.tmp.css'

if (-not (Test-Path $Tailwind)) {
  throw "No encuentro el CLI de Tailwind en $Tailwind. Descarga tailwindcss-windows-x64.exe v3.4.17 y ponlo en tools\tailwindcss.exe (o pasa -Tailwind <ruta>)."
}

& $Tailwind -c (Join-Path $PSScriptRoot 'tailwind.config.js') -i (Join-Path $PSScriptRoot 'src\input.css') -o $tmp --minify
if ($LASTEXITCODE -ne 0) { throw 'Tailwind ha fallado' }

$hash = (Get-FileHash $tmp -Algorithm SHA1).Hash.Substring(0, 8).ToLower()
$name = "styles.$hash.css"
Get-ChildItem $assets -Filter 'styles*.css' | Where-Object { $_.Name -ne 'styles.tmp.css' } | Remove-Item
Move-Item $tmp (Join-Path $assets $name)

$page = [IO.File]::ReadAllText($html, [Text.Encoding]::UTF8)
$page = [regex]::Replace($page, '/assets/styles[^"]*\.css(\?v=\d+)?', "/assets/$name")
[IO.File]::WriteAllText($html, $page, (New-Object Text.UTF8Encoding $false))

Write-Host "CSS listo: public/assets/$name"
