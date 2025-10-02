# 🚀 Comandos para Ejecutar la Aplicación

## 📋 Lista Completa de Comandos

### 1. Instalación de Dependencias
```bash
npm install expo-camera expo-media-library expo-image-manipulator
```

### 2. Iniciar la Aplicación (RECOMENDADO PARA EXPOSICIÓN)
```bash
npm run start --tunnel
```

### 3. Comandos Alternativos de Inicio
```bash
# Inicio normal (red local)
npm run start

# Inicio con red LAN
npm run start --lan

# Inicio directo a Android
npm run android

# Inicio directo a iOS
npm run ios

# Inicio para web (opcional)
npm run web
```

## 📱 Cómo Usar la App

### Paso 1: Ejecutar Comandos
1. Abre terminal en la carpeta del proyecto
2. Ejecuta: `npm run start --tunnel`
3. Espera a que aparezca el QR code

### Paso 2: Conectar Dispositivo
1. **Android**: 
   - Instala "Expo Go" desde Play Store
   - Abre Expo Go y escanea el QR
   
2. **iOS**:
   - Instala "Expo Go" desde App Store
   - Abre Expo Go y escanea el QR
   - O usa la app Cámara nativa para escanear

### Paso 3: Usar la App
1. La app pedirá permisos de cámara y galería
2. Acepta los permisos
3. ¡Ya puedes tomar fotos!

## ⚠️ Solución de Problemas

### Si no funciona la app:
1. **Verifica que tengas Expo Go instalado**
2. **Asegúrate de estar en la misma red WiFi**
3. **Usa el comando con --tunnel si hay problemas de red**
4. **Reinicia la app Expo Go si es necesario**

### Comandos de Diagnóstico:
```bash
# Verificar instalación de Expo
npx expo --version

# Limpiar caché si hay problemas
npx expo start --clear

# Verificar dependencias
npm list
```

## 🎯 Para la Exposición

### Comando Principal:
```bash
npm run start --tunnel
```

### Por qué --tunnel?
- Funciona desde cualquier red
- No requiere que el público esté en la misma WiFi
- Más estable para demostraciones
- Ideal para presentaciones en clase

## 📋 Checklist Pre-Exposición

- [ ] Ejecutar `npm install` (si es primera vez)
- [ ] Ejecutar `npm run start --tunnel`
- [ ] Tener Expo Go instalado en el dispositivo
- [ ] Probar que la cámara funcione
- [ ] Probar que se guarden las fotos
- [ ] Verificar que los filtros funcionen
- [ ] Tener conexión a internet estable

## 🔧 Comandos de Desarrollo

### Si quieres modificar el código:
```bash
# Instalar dependencias adicionales
npm install [nombre-paquete]

# Ver logs en tiempo real
npx expo start --tunnel --dev-client

# Build para producción
npx expo build:android
npx expo build:ios
```

---

**💡 Tip**: Siempre usa `npm run start --tunnel` para la exposición, es la opción más confiable!
