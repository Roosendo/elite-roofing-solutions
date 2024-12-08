# Elite Roofing Solutions 🏡🛠️

## Descripción del Proyecto

Este proyecto es una página web responsive diseñada para una empresa ficticia de techado, enfocada en transmitir lujo, profesionalismo y alta calidad de servicio siguiendo las indicaciones del archivo que se me compartió para evaluación.

> [!IMPORTANT]
> Para ejecutar este proyecto, necesitarás tener configurados previamente `tsconfig.json` para TypeScript y `tailwind.config.js` para TailwindCSS.

## Tecnologías Utilizadas

- **Frontend**: 
  - Vite
  - TypeScript
  - TailwindCSS
  - HTML5
  - CSS3
  - JavaScript

- **Desarrollo y Calidad**:
  - Biome.js (Linting y Formatting)
  - Lighthouse (Métricas de Rendimiento y SEO)

## Características Principales

- 📱 Diseño completamente responsivo
- 🌓 Soporte para modo claro/oscuro
- 🚀 Optimización de rendimiento
- 🖼️ Imágenes optimizadas
- ✅ Formulario de contacto con validación
- 🎨 Esquema de colores premium

> [!NOTE]
> El interruptor del modo claro/oscuro se encuentra en el footer.

## Instalación y Configuración

1. Clona el repositorio
```bash
git clone https://github.com/Roosendo/elite-roofing-solutions.git
```

2. Instala las dependencias
```bash
npm install
```

3. Inicia el servidor de desarrollo
```bash
npm run dev
```
4. Abre el navegador y visita `http://localhost:5173`

5. O también puedes visitar la página en producción [aquí](https://elite-roofing-solutions.vercel.app/)

## Scripts de Desarrollo

- Ejecutar Biome (linting y formatting):
```bash
npm run biome-format    # Formatear código
npm run biome-lint      # Verificar problemas
```

## Estructura del Proyecto

```
/src
├── components/       # Componentes reutilizables
|   |-- icons/        # Iconos SVG
|-- lib/              # Funciones y utilidades
```

## Herramientas de Desarrollo

### Biome.js
- Reemplaza ESLint y Prettier
- Extremadamente rápido
- Configuración minimal
- Soporte para TypeScript, JavaScript, JSON

### Lighthouse
- Auditorías de rendimiento
- Métricas de SEO
- Accesibilidad
- Mejores prácticas web

## Funcionalidades

- Menú de navegación interactivo
- Secciones: Hero, Servicios, Proyectos, Contacto
- Formulario de contacto con validación en tiempo real
- Transiciones y animaciones suaves
- Integración de mapa

## Enfoque de Diseño

 - Me base en diferentes galerías de componentes y sitios web para obtener inspiración y crear un diseño que refleje lujo y profesionalismo.
 - Seguido de mantener una apariencia uniforme y consistente en todo el sitio web, y no disponer de 4 botones diferente que hacen lo mismo en diferentes secciones.
 - Mantener bordes, sombras y que no de la sensación de estar sobrecargado de información.

## Tecnologías Utilizadas

 - Dado que en el archivo de evaluación sólamente dice HTML, CSS Y Javascript, no quise usar un framework para seguir bien las indicaciones, pero si hubiera sido un proyecto real, hubiera usado React o Astro para mejorar la experiencia del usuario y la facilidad de mantenimiento.

 - Aún así, utilicé Typescript por si necesitaba algún tipado y evitar pequeños errores que puedan surgir en el desarrollo.

  - TailwindCSS para el diseño y estilos, ya que es muy fácil de usar y permite crear diseños responsivos de manera rápida.

  - Vite para el desarrollo, siendo muy rápido y permitiendo tener un entorno de desarrollo moderno y eficiente, fué mi decisión para este proyecto.

## Explicación de Código

 - **Componentes**: Cada componente tiene su propio archivo y carpeta, para mantener el código limpio y organizado.
    - Por ejemplo, el componente `Hero` tiene su propio archivo `Hero.ts` y carpeta `components/`.
    - Y cada carpeta dentro tiene un archivo `index.ts` para exportar todos los componentes y mejorar su importación.
 - **Componetización**: Cada sección de la página es un componente, para poder reutilizarlo en otras páginas o secciones.
    - Usando un enfoque parecido a React, cada componente es una función que retorna un elemento HTML, y puede recibir parámetros, que serían las props.
  - **Formulario**: Aunque no es funcional, podría serlo fácilmente con un backend, y tiene validación en tiempo real para los campos requeridos, sólo queda hacerlo y poder unirlos.

## Mejoras Futuras

> [!NOTE]
> Roadmap de mejoras planificadas:

- 🔧 Migración a framework moderno (React, Astro o Angular)
- 🌐 Mejora avanzada de SEO con Lighthouse
- 🔍 Optimización continua basada en reportes de Lighthouse
- 🔒 Implementación de mejores prácticas de accesibilidad
- 📊 Integración de analytics
- 🌍 Internacionalización

## Rendimiento

- Imágenes completamente optimizadas
- Carga rápida
- Puntuaciones altas en auditorías de Lighthouse
- Código limpio y consistente con Biome.js

## Contribuciones

Las contribuciones son bienvenidas, aunque de momento sólo es un ejercicio de evaluación.

---
