# 📱 Guía para Exportar APK - React Native Metacritic App

## 🔧 Método 1: EAS Build (Recomendado - En Proceso)
Este es el método que estamos usando actualmente. EAS Build es la forma moderna y más sencilla de crear builds para aplicaciones Expo.

### ✅ Ventajas:
- Sin necesidad de configurar Android Studio localmente
- Build en la nube de Expo
- Manejo automático de certificados
- Fácil distribución

### 📋 Pasos (Ya realizados):
1. ✅ Instalación de EAS CLI
2. ✅ Configuración inicial con `eas build:configure`
3. ✅ Creación del perfil APK en `eas.json`
4. 🔄 **En proceso**: `eas build --platform android --profile apk`

### ⏱️ Tiempo estimado: 10-15 minutos

---

## 🔧 Método 2: Expo Build (Deprecado pero funcional)
Si tienes problemas con EAS, puedes usar el método clásico:

```bash
expo build:android -t apk
```

---

## 🔧 Método 3: Build Local (Avanzado)
Si prefieres hacer el build localmente necesitarás:

### 📋 Requisitos:
- Android Studio instalado
- Java JDK
- Android SDK configurado

### 📋 Pasos:
```bash
# 1. Ejectar la app a native
npx expo run:android

# 2. Generar el APK desde Android Studio
# O usar gradlew desde la carpeta android/
./gradlew assembleRelease
```

---

## 🔧 Método 4: Expo Application Services (EAS)
### Configuración actual en `eas.json`:
```json
{
  "build": {
    "apk": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

### 📱 Comandos útiles:
```bash
# Ver el progreso del build
eas build:list

# Descargar el APK cuando esté listo
eas build:download [BUILD_ID]

# Verificar el estado
eas build:view [BUILD_ID]
```

---

## 📦 Resultado Esperado
Una vez completado el build, obtendrás:
- **Archivo**: `curso-react-native-metacritic-app.apk`
- **Tamaño aproximado**: 50-80 MB
- **Compatibilidad**: Android 6.0+ (API 23+)
- **Arquitecturas**: arm64-v8a, armeabi-v7a, x86_64

---

## 🔍 Verificación del APK
Después de descargar, puedes:
1. **Instalar** en dispositivo Android
2. **Probar** todas las funcionalidades:
   - Onboarding screen
   - Sign up screen
   - Login screen
   - Lista de perros (requiere internet)

---

## 🚨 Notas Importantes
- **Primera vez**: El build puede tomar más tiempo (15-20 min)
- **Internet requerido**: Para la API de perros
- **Permisos**: Puede requerir "Instalar desde fuentes desconocidas"
- **Debug vs Release**: Este APK es para testing, no para Play Store

---

## 📧 Distribución
Una vez tengas el APK, puedes:
- Enviarlo por email/WhatsApp
- Subirlo a Google Drive/Dropbox
- Usar servicios como Firebase App Distribution
- Instalarlo directamente vía USB/ADB

---

## ⚡ Estado Actual
🔄 **En proceso**: Build de APK en EAS Cloud
📍 **Siguiente paso**: Esperar notificación de build completado
📱 **Resultado**: Link de descarga del APK listo para instalar
