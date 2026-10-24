# Revisión de seguridad — 2026-10-24

Repositorio: `JulianKizeno/betterTogether`. Rama: `security/review-2026-10-24`.

## Correcciones

- Replace vulnerable Webpack/LibSass/Babel build dependencies with Vite and Dart Sass; remove obsolete unused lint/build configuration

## Auditoría npm después de los cambios

| Proyecto | Críticas | Altas | Moderadas | Bajas | Total |
|---|---:|---:|---:|---:|---:|
| `.` | 0 | 0 | 0 | 0 | 0 |

## Verificación

- `.`: instalación correcta; build correcto; sin pruebas unitarias existentes.

## Límites y configuración

- La auditoría cubre el árbol npm resuelto, no demuestra ausencia de vulnerabilidades de lógica, infraestructura o servicios externos. No se ha desplegado ni fusionado este cambio.
- Migración de herramientas: usar Node 22.22.2+ o Node 24.15+ según engines, reinstalar con npm ci y revisar visualmente los flujos de la aplicación antes de fusionar. Protractor/TSLint obsoletos dejan de ser comandos disponibles donde se retiraron; los archivos e2e se conservan como referencia.
