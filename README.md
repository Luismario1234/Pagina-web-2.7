# T-Rex Enterprises — Estructura de Archivos

## Páginas HTML (una por sección del menú)

| Archivo           | Página       | Menú        |
|-------------------|-------------|-------------|
| `index.html`      | Home / Inicio | Inicio     |
| `legacy.html`     | Legado       | Legado      |
| `dominion.html`   | Dominio      | Dominio     |
| `expeditions.html`| Expediciones | Expediciones|
| `contact.html`    | Contacto     | Contacto    |

## Archivos compartidos

| Archivo     | Descripción                                      |
|-------------|--------------------------------------------------|
| `style.css` | Estilos globales (sin cambios)                   |
| `script.js` | JS actualizado para navegación multi-página      |
| `img/`      | Carpeta de imágenes (source.gif del T-Rex, etc.) |

## Cambios respecto al index original

- Se eliminó el sistema SPA (`data-page`, `.page.active`) — ya no necesario.
- Todos los enlaces usan `href="archivo.html"` en lugar de `data-page`.
- El overlay del T-Rex aparece al navegar entre páginas (no en la primera carga).
- Cada página marca su propio enlace de nav como activo con la clase `nav-active`.
- Agregar a `style.css`: `.nav-active { color: var(--amber) !important; }`
