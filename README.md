🌐 Portafolio Web Personal — Migración a Astro + TailwindCSS
🧩 1. Descripción General
Este proyecto consiste en la creación de un portafolio web personal.
Inicialmente, se desarrolló a partir de una plantilla base HTML/CSS, la cual fue personalizada y posteriormente migrada a Bootstrap.
Finalmente, se migró a Astro con TailwindCSS, para mejorar la organización, el rendimiento y la facilidad de mantenimiento.

🚀 2. Tecnologías utilizadas
Etapas del proyecto
EtapaTecnologías principalesDescripciónVersión inicialHTML5, CSS3, JSPlantilla base brindada por el docenteVersión intermediaBootstrap 5Reestructuración con componentes y diseño responsiveVersión finalAstro, TailwindCSSMigración completa con arquitectura modular y optimización

⚙️ 3. Estructura del proyecto en Astro
📁 src/
┣ 📁 components/
┣ 📁 layouts/
┃ ┗ 📄 Base.astro
┣ 📁 pages/
┃ ┣ 📄 index.astro
┃ ┣ 📄 sobremi.astro
┃ ┣ 📄 proyectos.astro
┃ ┣ 📄 habilidades.astro
┃ ┗ 📄 contacto.astro
┣ 📁 styles/
┃ ┗ 📄 global.css
┗ 📁 public/
  ┗ 📁 img/

🔧 4. Proceso de Migración
🔹 Paso 1: Análisis de la plantilla original

Se revisó la estructura del HTML original (etiquetas <header>, <section>, <footer>).
Se identificaron los estilos repetidos y las partes que podían modularizarse.

🔹 Paso 2: Conversión a Bootstrap

Se reemplazaron los estilos personalizados por clases de Bootstrap (container, row, col, btn, etc.).
Se mejoró la adaptabilidad (responsive design).
Se mantuvo la misma paleta de colores y estructura visual.

🔹 Paso 3: Migración a Astro

Se creó el proyecto Astro con el comando:

bash  npm create astro@latest

Se trasladaron las secciones del portafolio a páginas individuales (index.astro, sobremi.astro, etc.).
Se implementó un layout principal (Base.astro) para reutilizar el encabezado y pie de página.
Se configuró la carpeta public/ para alojar las imágenes del portafolio.

🔹 Paso 4: Integración de TailwindCSS
Instalación y configuración:
bashnpx astro add tailwind

Se integró Tailwind con Astro añadiendo las directivas en global.css:

css@tailwind base;
@tailwind components;
@tailwind utilities;

Se reemplazaron las clases de Bootstrap por utilidades de Tailwind:

Bootstrap: container, row, col-md-6, btn btn-primary
Tailwind: container mx-auto, grid grid-cols-1 md:grid-cols-2, bg-blue-600 px-4 py-2 rounded


Se añadieron animaciones y transiciones personalizadas para mejorar la experiencia visual.

🔹 Paso 5: Optimización final

Se eliminaron archivos innecesarios (JS de Bootstrap, archivos CSS individuales por página).
Se consolidaron todos los estilos personalizados en global.css usando las directivas de Tailwind.
Se probaron las rutas y la compatibilidad en distintos dispositivos.
Se mejoró el SEO mediante el uso de metadatos en Base.astro.


✨ 5. Cambios principales realizados
ElementoAntes (Bootstrap)Después (Astro + Tailwind)Estructura HTMLArchivos .html separadosPáginas .astro con sistema de enrutamientoEstilosArchivos .css y clases BootstrapClases utilitarias de Tailwind y global.cssNavegaciónNavbar de BootstrapNavbar personalizada en Base.astroAnimacionesLimitadasTransiciones con hover:, transform, transitionLayoutRepetido en cada páginaReutilización con Base.astro y sistema de slotsCSS5 archivos individuales1 archivo global.css centralizado

📋 6. Detalle de archivos migrados
Layout Base (src/layouts/Base.astro)
Cambios implementados:

Eliminación completa de Bootstrap CSS y JS
Implementación de navbar responsivo con Tailwind
Sistema de menú hamburguesa para móviles usando Alpine.js o JavaScript vanilla
Footer reutilizable con información de contacto
Meta tags para SEO y responsive design
Slot de Astro para contenido dinámico de cada página

Página Principal (src/pages/index.astro)
Conversiones realizadas:

Grid system: row col-md-6 → grid grid-cols-1 md:grid-cols-2 gap-8
Botones: btn btn-primary → bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg
Cards: card → bg-white rounded-xl shadow-lg p-6
Espaciado: mt-5 mb-4 → mt-8 mb-6

Sobre Mí (src/pages/sobremi.astro)
Transformaciones:

Eliminación de sobremi.css
Profile cards con flex flex-col md:flex-row items-center
Imágenes con rounded-full w-48 h-48 object-cover
Texto descriptivo con tipografía de Tailwind: text-lg leading-relaxed text-gray-700

Proyectos (src/pages/proyectos.astro)
Mejoras:

Grid de proyectos: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
Cards interactivas con hover:shadow-2xl hover:scale-105 transition-all duration-300
Imágenes responsivas: w-full h-48 object-cover rounded-t-lg
Badges de tecnologías: bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm

Habilidades (src/pages/habilidades.astro)
Actualizaciones:

Sistema de barras de progreso personalizadas con Tailwind
Grid de habilidades: grid grid-cols-2 md:grid-cols-4 gap-4
Iconos de tecnologías con hover effects
Categorización visual (Frontend, Backend, Herramientas)

Contacto (src/pages/contacto.astro)
Cambios:

Formulario con estilos Tailwind forms
Inputs: w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500
Validación visual con estados de error
Botón de envío con loading state


🎨 7. Sistema de diseño implementado
Paleta de colores

Primario: blue-600 (#2563eb), blue-700 (#1d4ed8)
Secundario: gray-600 (#4b5563), gray-800 (#1f2937)
Fondos: gray-50 (#f9fafb), white (#ffffff)
Texto: gray-900 (#111827), gray-600 (#4b5563)

Tipografía

Headings: text-4xl font-bold, text-3xl font-semibold
Body: text-base leading-relaxed
Small: text-sm text-gray-600

Espaciado consistente

Secciones: py-16 md:py-24
Contenedores: container mx-auto px-4 md:px-6
Elementos: Múltiplos de 4 (4, 8, 12, 16, 24, 32)


📱 8. Responsividad
Breakpoints utilizados

sm: 640px - Ajustes menores
md: 768px - Tablets y cambios significativos
lg: 1024px - Desktops pequeños
xl: 1280px - Desktops grandes

Estrategia Mobile-First
Todas las clases base están optimizadas para móvil, con modificadores progressive para pantallas más grandes:
html<!-- Ejemplo -->
<div class="text-center md:text-left grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

⚡ 9. Optimizaciones realizadas
Performance

CSS purgado automáticamente por Tailwind (solo las clases utilizadas)
Componentes de Astro con zero JavaScript en el cliente por defecto
Imágenes optimizadas y lazy loading
Build estático sin runtime de JavaScript

SEO

Meta tags dinámicos en cada página
Estructura HTML5 semántica
URLs limpias gracias al enrutamiento de Astro
Open Graph tags para redes sociales

Mantenibilidad

Código DRY (Don't Repeat Yourself) con layout reutilizable
Estilos centralizados en un solo archivo
Sistema de diseño consistente con Tailwind
Componentes modulares fáciles de actualizar


🛠️ 10. Comandos disponibles
bash# Instalar dependencias
npm install

# Desarrollo (puerto 4321)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

📦 11. Dependencias del proyecto
Principales

astro: ^3.0.0 - Framework principal
@astrojs/tailwind: ^6.0.2 - Integración de Tailwind
tailwindcss: ^3.4.18 - Framework CSS utility-first

Dev Dependencies

autoprefixer: ^10.4.19 - Prefijos CSS automáticos
postcss: ^8.4.38 - Procesador CSS


🚀 12. Configuración de despliegue
Vercel
Archivo vercel.json configurado:
json{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
Variables de entorno
No se requieren variables de entorno para el proyecto básico.

✅ 13. Checklist de migración completada

 Proyecto Astro inicializado
 Tailwind CSS instalado y configurado
 Layout base (Base.astro) creado y funcional
 Todas las páginas migradas (5 páginas)
 Archivos CSS individuales eliminados
 Bootstrap completamente removido
 Sistema de navegación implementado
 Diseño responsivo verificado en múltiples dispositivos
 Optimizaciones de performance aplicadas
 SEO básico implementado
 Configuración de deploy lista
 Documentación actualizada


📝 14. Conclusiones
Ventajas de la migración

Mejor organización: Astro permitió una estructura modular clara con separación de layouts, páginas y estilos.
Rendimiento superior: La generación de sitios estáticos y el CSS optimizado resultaron en tiempos de carga significativamente menores.
Desarrollo más rápido: TailwindCSS facilitó la personalización sin necesidad de escribir CSS personalizado extenso.
Mantenibilidad: El código es más limpio, DRY y fácil de actualizar gracias a los componentes reutilizables.
Experiencia de desarrollo: Hot Module Replacement (HMR) y el tooling moderno mejoraron la productividad.

Lecciones aprendidas

La diferencia entre frameworks CSS (Bootstrap) y utility-first (Tailwind)
Arquitectura de componentes con Astro
Optimización de performance para sitios estáticos
Importancia de la documentación en proyectos de migración
