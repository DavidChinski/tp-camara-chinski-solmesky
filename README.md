# TP Cámara - React Native con Expo

## 📱 Descripción del Proyecto

Aplicación móvil desarrollada con React Native y Expo que permite:
- Tomar fotos con la cámara del dispositivo
- Aplicar filtros básicos a las imágenes
- Guardar las fotos en la galería del dispositivo
- Interfaz intuitiva y moderna

## 🚀 Características Implementadas

### ✅ Funcionalidades Principales
- **Acceso a la cámara**: Captura de fotos con cámara frontal y trasera
- **Almacenamiento**: Guardado automático en la galería del dispositivo
- **Filtros**: Aplicación de efectos básicos (Normal, B&N, Sepia, Vintage)
- **Interfaz moderna**: Diseño atractivo con controles intuitivos
- **Permisos**: Manejo automático de permisos de cámara y galería

### 🎨 Interfaz de Usuario
- Vista de cámara en tiempo real
- Botones de control (flash, cambio de cámara)
- Selector de filtros visual
- Botón de captura estilo nativo
- Vista previa de la foto capturada
- Opciones de retomar o guardar

## 📋 Información Técnica

### Versión de React Native
- **React Native**: 0.81.4
- **Expo SDK**: ~54.0.12
- **React**: 19.1.0

### Librerías Utilizadas

#### 1. expo-camera
- **Versión**: Compatible con Expo SDK 54
- **Propósito**: Acceso nativo a la cámara del dispositivo
- **Alternativas**: react-native-camera (requiere eject), react-native-vision-camera
- **Ventajas**: Fácil integración con Expo, soporte completo para iOS y Android

#### 2. expo-media-library
- **Versión**: Compatible con Expo SDK 54
- **Propósito**: Acceso a la galería de fotos del dispositivo
- **Alternativas**: react-native-fs, react-native-image-picker
- **Ventajas**: Integración nativa con Expo, manejo automático de permisos

#### 3. expo-image-manipulator
- **Versión**: Compatible con Expo SDK 54
- **Propósito**: Manipulación y procesamiento de imágenes
- **Alternativas**: react-native-image-editor, react-native-image-filter-kit
- **Ventajas**: Optimizado para Expo, procesamiento eficiente

## 🛠️ Instalación y Configuración

### Comandos de Instalación

```bash
# Instalar dependencias principales
npm install expo-camera expo-media-library expo-image-manipulator

# Iniciar el proyecto con tunnel (recomendado para exposición)
npm run start --tunnel

# Alternativas de inicio
npm run start          # Inicio normal
npm run start --lan    # Red local
npm run android        # Directo a Android
npm run ios           # Directo a iOS
```

### Configuración de Permisos

#### Android (app.json)
```json
"android": {
  "permissions": [
    "android.permission.CAMERA",
    "android.permission.READ_EXTERNAL_STORAGE",
    "android.permission.WRITE_EXTERNAL_STORAGE"
  ]
}
```

#### iOS (app.json)
```json
"ios": {
  "infoPlist": {
    "NSCameraUsageDescription": "Esta app necesita acceso a la cámara para tomar fotos.",
    "NSPhotoLibraryUsageDescription": "Esta app necesita acceso a la galería para guardar fotos."
  }
}
```

## 📱 Compatibilidad de Plataformas

### Android
- **Versión mínima**: Android 6.0 (API 23)
- **Permisos requeridos**: Cámara, Almacenamiento
- **Características**: Soporte completo para cámara frontal/trasera, flash

### iOS
- **Versión mínima**: iOS 11.0
- **Permisos requeridos**: Cámara, Galería de fotos
- **Características**: Soporte completo, integración nativa con Photos app

## 🎯 Uso de la Aplicación

### Flujo de Trabajo
1. **Inicio**: La app solicita permisos automáticamente
2. **Captura**: Toca el botón circular para tomar una foto
3. **Filtros**: Selecciona un filtro antes de capturar
4. **Vista previa**: Revisa la foto capturada
5. **Guardar**: Toca "Guardar" para almacenar en la galería
6. **Retomar**: Toca "Retomar" para volver a la cámara

### Controles Disponibles
- **🔄 Cambio de cámara**: Alterna entre frontal y trasera
- **⚡ Flash**: Activa/desactiva el flash
- **Filtros**: Normal, B&N, Sepia, Vintage
- **📷 Captura**: Botón principal para tomar foto
- **💾 Guardar**: Almacena en la galería
- **📷 Retomar**: Vuelve a la vista de cámara

## 🔧 Estructura del Código

### Componentes Principales
- **App.js**: Componente principal con toda la lógica
- **Estados**: Manejo de permisos, cámara, filtros, vista previa
- **Funciones**: Captura, guardado, aplicación de filtros

### Puntos Importantes del Código

#### 1. Manejo de Permisos
```javascript
const getPermissions = async () => {
  const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
  const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
  // ...
};
```

#### 2. Captura de Foto
```javascript
const takePicture = async () => {
  const photo = await cameraRef.current.takePictureAsync({
    quality: 0.8,
    base64: false,
  });
  // ...
};
```

#### 3. Guardado en Galería
```javascript
const savePicture = async () => {
  const asset = await MediaLibrary.createAssetAsync(processedImage);
  await MediaLibrary.createAlbumAsync('TP Camara', asset, false);
  // ...
};
```

## 🚀 Comandos para Ejecutar

### Desarrollo
```bash
# Instalar dependencias
npm install

# Iniciar con tunnel (para exposición)
npm run start --tunnel

# Escanear QR con Expo Go
# Android: Expo Go app
# iOS: Camera app o Expo Go
```

### Producción
```bash
# Build para Android
expo build:android

# Build para iOS
expo build:ios
```

## 📚 Recursos Adicionales

- [Expo Camera Documentation](https://docs.expo.dev/versions/latest/sdk/camera/)
- [Expo Media Library Documentation](https://docs.expo.dev/versions/latest/sdk/media-library/)
- [Expo Image Manipulator Documentation](https://docs.expo.dev/versions/latest/sdk/image-manipulator/)
- [React Native Documentation](https://reactnative.dev/)

## 👥 Autores

- Chinski
- Solmesky

## 📄 Licencia

Este proyecto es parte de un trabajo práctico académico.

---

**Nota**: Esta aplicación está optimizada para funcionar con Expo Go y no requiere eject del proyecto Expo.
