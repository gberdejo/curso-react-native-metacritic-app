# Context - Curso React Native Metacritic App

## 📋 Descripción del Proyecto

Este es un proyecto de React Native desarrollado con Expo que simula una aplicación estilo Metacritic, pero adaptada para mostrar información sobre razas de perros utilizando The Dog API. La aplicación muestra una lista de perros con información detallada sobre diferentes razas.

## 🏗️ Arquitectura del Proyecto

### Tecnologías Principales
- **React Native**: 0.79.5
- **Expo**: ~53.0.17
- **React**: 19.0.0
- **React Native Safe Area Context**: 5.4.0

### Estructura de Directorios

```
curso-react-native-metacritic-app/
├── 📁 assets/                    # Recursos gráficos
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   ├── splash-icon.png
│   └── 📁 images/               # Imágenes organizadas por formato
│       ├── 📁 svg/              # Imágenes vectoriales SVG
│       │   ├── 📁 icons/        # Iconos SVG
│       │   └── 📁 illustrations/ # Ilustraciones SVG
│       ├── 📁 png/              # Imágenes rasterizadas PNG
│       │   ├── 📁 icons/        # Iconos PNG
│       │   ├── 📁 photos/       # Fotografías y contenido
│       │   └── 📁 backgrounds/  # Fondos e imágenes de fondo
│       └── README.md            # Documentación de estructura de imágenes
├── 📁 components/               # Componentes React Native
│   ├── Main.js                 # Componente principal (activo)
│   ├── Main.jsx               # Archivo vacío (duplicado)
│   ├── OnboardingScreen.js    # Pantalla de bienvenida/onboarding
│   ├── SignUpScreen.js        # Pantalla de registro de usuario
│   └── LoginScreen.js         # Pantalla de inicio de sesión
├── 📁 lib/                     # Utilidades y servicios
│   ├── metacritic.js          # API service para The Dog API
│   └── metacritic,js          # Archivo duplicado (posible error tipográfico)
├── App.js                     # Componente raíz de la aplicación
├── index.js                   # Punto de entrada de la aplicación
├── app.json                   # Configuración de Expo
├── package.json               # Dependencias y scripts
├── eslint.config.js           # Configuración de ESLint
├── context.md                 # Este archivo de documentación
└── .gitignore                 # Archivos excluidos de git
```

## 🔧 Configuración y Scripts

### Scripts Disponibles
```json
{
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios", 
  "web": "expo start --web",
  "lint": "expo lint"
}
```

### Dependencias de Desarrollo
- **ESLint**: ^9.0.0 con configuración de Expo
- **Prettier**: ^3.6.2 para formateo de código
- **Babel Core**: ^7.20.0

## 📱 Funcionalidades

### Componente de Onboarding (OnboardingScreen.js)
- Pantalla de bienvenida con diseño atractivo
- Ilustración personalizada con SVG (persona y teléfono)
- Botón "Sign up" para ir a registro
- Enlace "Log in" para usuarios existentes
- Botón "Skip for now" para omitir registro
- Diseño responsive con SafeArea

### Componente de Registro (SignUpScreen.js)
- Formulario completo de registro con validación
- Campos: Nombre completo, email y contraseña
- Validación de formulario con mensajes de error
- Botón de registro con funcionalidad
- Opciones de login social (Google, Apple, Facebook)
- Navegación hacia atrás al onboarding
- Enlace "Log in" para usuarios existentes
- Diseño estático sin scroll, optimizado para móviles

### Componente de Login (LoginScreen.js)
- Formulario de inicio de sesión con validación
- Campos: Email y contraseña
- Funcionalidad de mostrar/ocultar contraseña
- Enlace "Forgot Password?" para recuperación
- Validación de email y contraseña
- Opciones de login social (Google, Apple, Facebook)
- Navegación hacia atrás al onboarding
- Enlace "Sign up" para nuevos usuarios
- Diseño estático sin scroll, optimizado para móviles

### Componente Principal (Main.js)
- Muestra una lista scrolleable de perros
- Cada tarjeta contiene:
  - Imagen del perro
  - Nombre de la raza
  - Descripción (propósito y temperamento)
  - Esperanza de vida
  - Grupo de la raza
- Implementa Safe Area para evitar solapamiento con elementos del sistema
- Uso de ScrollView para navegación vertical

### Servicio API (metacritic.js)
- **getLatestDogs()**: Obtiene 10 perros aleatorios con información de raza
- **getDogDetails(dogId)**: Obtiene detalles específicos de un perro (no utilizada actualmente)
- Integración con The Dog API
- Transformación de datos para adaptarlos al formato de la aplicación
- Manejo de casos edge para razas sin información completa

## 🎨 Diseño y Estilos

### Tema Visual
- Fondo blanco principal
- Tarjetas con fondo gris claro (#f9f9f9)
- Bordes redondeados y sombras sutiles
- Tipografía clara y jerárquica

### Responsive Design
- Imágenes adaptativas (400x200px)
- Márgenes y padding consistentes
- Uso de SafeAreaProvider para diferentes dispositivos

## �️ Gestión de Assets e Imágenes

### Estructura de Imágenes
- **SVG**: Imágenes vectoriales escalables
  - `svg/icons/`: Iconos de UI (botones, navegación)
  - `svg/illustrations/`: Ilustraciones complejas (onboarding, etc.)
- **PNG**: Imágenes rasterizadas
  - `png/icons/`: Iconos en formato bitmap
  - `png/photos/`: Fotografías y contenido visual
  - `png/backgrounds/`: Fondos e imágenes de fondo

### Convenciones de Nomenclatura
- **SVG Icons**: `icon-[nombre].svg`
- **SVG Illustrations**: `illustration-[nombre].svg`
- **PNG Icons**: `icon-[nombre].png`
- **PNG Backgrounds**: `bg-[nombre].png`

### Optimización
- Todas las imágenes deben optimizarse antes de incluirse
- SVGs: usar SVGO para optimización
- PNGs: usar TinyPNG o similar
- Considerar densidades de pantalla (@2x, @3x)

## �🔌 APIs y Servicios

### The Dog API
- **URL Base**: https://api.thedogapi.com/v1/
- **Endpoint Principal**: `/images/search` con parámetros:
  - size: med
  - mime_types: jpg
  - has_breeds: true
  - order: RANDOM
  - limit: 10
- **Autenticación**: API Key incluida en headers

## 🚀 Configuración de Expo

### Configuración de la App (app.json)
```json
{
  "name": "curso-react-native-metacritic-app",
  "slug": "curso-react-native-metacritic-app",
  "version": "1.0.0",
  "orientation": "portrait",
  "newArchEnabled": true,
  "userInterfaceStyle": "light"
}
```

### Configuración de Plataformas
- **iOS**: Soporte para tablets
- **Android**: Adaptive icon y edge-to-edge habilitado
- **Web**: Favicon personalizado

## 🔍 Código de Calidad

### ESLint
- Configuración basada en expo/flat
- Integración con Prettier
- Reglas personalizadas para formateo
- Exclusión de carpeta dist/

### Estructura del Código
- Separación clara entre componentes y servicios
- Uso de hooks (useState, useEffect)
- Manejo de errores con try-catch
- Nomenclatura descriptiva de variables y funciones

## 🗂️ Gestión de Estado

- **Estado de Navegación**: currentScreen para manejar flujo entre pantallas
- **Estado Local**: useState para formularios y datos de usuario
- **Efectos**: useEffect para carga inicial de datos
- **Manejo de Errores**: Alert para feedback de usuario y console.error para debugging

## 🔒 Seguridad

- API Key expuesta en código (consideración para mejora futura)
- Uso de HTTPS para todas las llamadas a la API
- Validación de respuestas de API con valores por defecto

## 🚨 Posibles Mejoras Identificadas

1. **Archivos Duplicados**: Eliminar `metacritic,js` y `Main.jsx` vacío
2. **Seguridad**: Mover API key a variables de entorno
3. **Manejo de Estados**: Implementar estados de carga y error en UI
4. **Navegación**: Integrar React Navigation para detalles de perros
5. **Performance**: Implementar lazy loading para imágenes
6. **Testing**: Agregar tests unitarios y de integración

## 📚 Documentación de Referencia

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [The Dog API Documentation](https://thedogapi.com/)
- [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)

---

**Última actualización**: Agosto 10, 2025
**Versión del proyecto**: 1.0.0
**Estado**: En desarrollo activo
