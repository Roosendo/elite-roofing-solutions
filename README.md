# Premium Roofing Solutions 🏡🛠️

## Descripción del Proyecto

Este proyecto es una página web responsive diseñada para una empresa ficticia de techado premium, enfocada en transmitir lujo, profesionalismo y alta calidad de servicio.

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

## Instalación y Configuración

1. Clona el repositorio
```bash
git clone https://github.com/tu-usuario/premium-roofing.git
```

2. Instala las dependencias
```bash
npm install
```

3. Inicia el servidor de desarrollo
```bash
npm run dev
```

## Scripts de Desarrollo

- Ejecutar Biome (linting y formatting):
```bash
npm run lint      # Verificar problemas
npm run format    # Formatear código
```

- Generar reporte de Lighthouse:
```bash
npm run lighthouse
```

## Estructura del Proyecto

```
/src
├── assets/           # Recursos gráficos
├── components/       # Componentes reutilizables
├── styles/           # Hojas de estilo
└── scripts/          # Archivos JavaScript/TypeScript
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

## Mejoras Futuras

> [!NOTE]
> Roadmap de mejoras planificadas:

- 🔧 Migración a framework moderno (React, Vue o Angular)
- 🌐 Mejora avanzada de SEO con Lighthouse
- 🔍 Optimización continua basada en reportes de Lighthouse
- 🔒 Implementación de mejores prácticas de accesibilidad
- 📊 Integración de analytics
- 🤖 Implementación de chatbot de soporte

## Rendimiento

- Imágenes completamente optimizadas
- Carga rápida
- Puntuaciones altas en auditorías de Lighthouse
- Código limpio y consistente con Biome.js

## Configuración de Biome

Archivo base de configuración `biome.json`:
```json
{
  "$schema": "https://biomejs.dev/schemas/1.4.1/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2
  }
}
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, lee las guías de contribución antes de enviar un pull request.

## Licencia

[Especificar tipo de licencia]

---

**Desarrollado con ❤️ por [Tu Nombre]**