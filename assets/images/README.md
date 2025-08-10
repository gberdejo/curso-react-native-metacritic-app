# Estructura de Imágenes

Esta carpeta contiene todos los recursos de imagen del proyecto organizados por formato y propósito.

## 📁 Estructura de Carpetas

```
assets/images/
├── 📁 svg/                    # Imágenes vectoriales SVG
│   ├── 📁 icons/             # Iconos SVG (botones, UI elements)
│   └── 📁 illustrations/     # Ilustraciones SVG (onboarding, etc.)
├── 📁 png/                   # Imágenes rasterizadas PNG
│   ├── 📁 icons/            # Iconos PNG (cuando SVG no es compatible)
│   ├── 📁 photos/           # Fotografías y imágenes de contenido
│   └── 📁 backgrounds/      # Fondos e imágenes de fondo
```

## 🎨 Convenciones de Nomenclatura

### Para SVG:
- **Iconos**: `icon-[nombre].svg` (ej: `icon-home.svg`, `icon-search.svg`)
- **Ilustraciones**: `illustration-[nombre].svg` (ej: `illustration-onboarding.svg`)

### Para PNG:
- **Iconos**: `icon-[nombre].png` (ej: `icon-home.png`)
- **Fotografías**: `photo-[descripcion].png` o `[nombre-descriptivo].png`
- **Fondos**: `bg-[nombre].png` (ej: `bg-gradient.png`, `bg-pattern.png`)

## 📐 Recomendaciones de Tamaños

### Iconos:
- SVG: Vectorial (escalable)
- PNG: 24x24, 32x32, 48x48, 64x64, 128x128

### Ilustraciones:
- Mantener proporciones adecuadas para diferentes pantallas
- Considerar versiones @2x y @3x para alta densidad

### Fotografías:
- Tamaños múltiples para diferentes densidades de pantalla
- Optimizar para web y mobile

## 🚀 Uso en el Código

```javascript
// Importar imágenes SVG
import HomeIcon from '../assets/images/svg/icons/icon-home.svg';

// Importar imágenes PNG
import OnboardingBG from '../assets/images/png/backgrounds/bg-onboarding.png';

// Usar en componentes
<Image source={OnboardingBG} />
```

## 🔧 Herramientas Recomendadas

- **Optimización SVG**: SVGO
- **Optimización PNG**: TinyPNG, ImageOptim
- **Generación de iconos**: React Native Vector Icons
- **Gestión de assets**: Expo Asset

---

**Nota**: Recuerda optimizar todas las imágenes antes de incluirlas en el proyecto para mejorar el rendimiento de la aplicación.
