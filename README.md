
# Todo List App

Aplicación de lista de tareas desarrollada con **React**, **TypeScript** y **Vite**.

## Características

- Añadir, editar, completar y eliminar tareas
- Persistencia de tareas en `localStorage`
- Modo claro/oscuro automático
- Animaciones con Tailwind y Midudev Animations
- Componentes reutilizables y custom hooks

## Instalación

```bash
pnpm install
```

## Uso

```bash
pnpm dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Estructura del proyecto

```
src/
  components/
    common/
    ui/
  hooks/
  reducers/
  types/
public/
```

## Personalización

- Los colores y el modo oscuro se gestionan con variables CSS y Tailwind v4.
- Puedes modificar los componentes en `src/components/ui` y la lógica en `src/hooks` y `src/reducers`.

## Linting y calidad de código

Incluye configuración ESLint recomendada para React y TypeScript.  
Puedes expandir las reglas siguiendo la documentación oficial de Vite y ESLint.
