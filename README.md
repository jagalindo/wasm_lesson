
# WebAssembly: Más allá de JavaScript

Este repositorio contiene una presentación y ejemplos prácticos para una charla de 30 minutos sobre WebAssembly.

## Estructura del repositorio

- `wasm-charla.md`: Presentación en formato Markdown compatible con Marp.
- `index.html`: Página de inicio con enlaces a los ejemplos.
- `ejemplos/`: Directorio con ejemplos en varios lenguajes que compilan a WebAssembly:
  - `c_cpp`: Ejemplo en C/C++
  - `rust`: Ejemplo en Rust (requiere wasm-pack)
  - `assemblyscript`: Ejemplo en AssemblyScript
  - `pyodide`: Ejemplo usando Pyodide para ejecutar Python en el navegador

## Ver online

Este repositorio está preparado para ser usado con GitHub Pages. Una vez publicado, accede a:

```
https://<tu-usuario>.github.io/<nombre-del-repo>
```

## Requisitos para compilar

Algunos ejemplos requieren herramientas específicas:

- **Emscripten** para compilar C/C++ a WebAssembly
- **wasm-pack** para compilar Rust
- **AssemblyScript** (`npx asc`) para compilar TypeScript a wasm
- **Marp CLI** para generar la presentación HTML desde el Markdown

## Créditos

José A. Galindo  
Charla introductoria a WebAssembly
