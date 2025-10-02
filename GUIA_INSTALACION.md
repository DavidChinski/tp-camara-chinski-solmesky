# 🚀 Guía Completa de Instalación - TP Cámara

## 📋 Pasos para Ejecutar en una PC Nueva

### 1️⃣ PREREQUISITOS
Antes de empezar, necesitas tener instalado:

```bash
# Verificar si tienes Node.js (versión 16 o superior)
node --version

# Si no tienes Node.js, descargarlo desde:
# https://nodejs.org/
```

### 2️⃣ INSTALAR EXPO CLI (Solo la primera vez)
```bash
# Instalar Expo CLI globalmente
npm install -g @expo/cli

# Verificar instalación
expo --version
```

### 3️⃣ DESCARGAR EL PROYECTO
```bash
# Si tienes el proyecto en un repositorio Git:
git clone [URL_DEL_REPOSITORIO]
cd tp-camara-chinski-solmesky

# O si tienes el proyecto en una carpeta:
# Navegar a la carpeta del proyecto
cd ruta/a/tu/proyecto
```

### 4️⃣ INSTALAR DEPENDENCIAS
```bash
# Instalar todas las dependencias del proyecto
npm install

# Instalar las dependencias específicas de la cámara
npm install expo-camera expo-media-library expo-image-manipulator
```

### 5️⃣ EJECUTAR LA APLICACIÓN
```bash
# Comando principal para exposición (RECOMENDADO)
npm run start --tunnel

# Alternativas:
npm run start          # Red local
npm run start --lan    # Red LAN
```

### 6️⃣ CONECTAR DISPOSITIVO
1. **Instalar Expo Go** en tu teléfono:
   - Android: [Play Store - Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - iOS: [App Store - Expo Go](https://apps.apple.com/app/expo-go/id982107779)

2. **Escanear QR**:
   - Abrir Expo Go
   - Escanear el código QR que aparece en la terminal
   - ¡Listo!

## 🔧 COMANDOS COMPLETOS (Copia y Pega)

### Para una PC completamente nueva:
```bash
# 1. Instalar Node.js desde https://nodejs.org/

# 2. Instalar Expo CLI
npm install -g @expo/cli

# 3. Navegar al proyecto
cd ruta/a/tu/proyecto

# 4. Instalar dependencias
npm install
npm install expo-camera expo-media-library expo-image-manipulator

# 5. Ejecutar aplicación
npm run start --tunnel
```

### Para una PC que ya tiene Node.js:
```bash
# 1. Navegar al proyecto
cd ruta/a/tu/proyecto

# 2. Instalar dependencias
npm install
npm install expo-camera expo-media-library expo-image-manipulator

# 3. Ejecutar aplicación
npm run start --tunnel
```

## 📱 PREPARACIÓN DEL DISPOSITIVO

### Android:
1. Descargar **Expo Go** desde Play Store
2. Abrir Expo Go
3. Tocar "Scan QR Code"
4. Escanear el código QR de la terminal

### iOS:
1. Descargar **Expo Go** desde App Store
2. Abrir Expo Go
3. Tocar "Scan QR Code"
4. Escanear el código QR de la terminal
5. O usar la app Cámara nativa para escanear

## ⚠️ SOLUCIÓN DE PROBLEMAS

### Si no funciona la instalación:
```bash
# Limpiar caché de npm
npm cache clean --force

# Eliminar node_modules y reinstalar
rm -rf node_modules
npm install
```

### Si no aparece el QR:
```bash
# Usar tunnel explícitamente
npx expo start --tunnel

# O usar LAN
npx expo start --lan
```

### Si hay errores de permisos:
```bash
# En Windows (PowerShell como Administrador)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# En Mac/Linux
sudo npm install -g @expo/cli
```

## 🎯 CHECKLIST PRE-EXPOSICIÓN

- [ ] Node.js instalado (versión 16+)
- [ ] Expo CLI instalado
- [ ] Proyecto descargado
- [ ] Dependencias instaladas (`npm install`)
- [ ] Expo Go instalado en el dispositivo
- [ ] Conexión a internet estable
- [ ] Comando `npm run start --tunnel` ejecutado
- [ ] QR code escaneado exitosamente
- [ ] App funcionando en el dispositivo

## 📋 COMANDOS RÁPIDOS (Para Copiar)

```bash
# Instalación completa
npm install -g @expo/cli
cd tu-proyecto
npm install
npm install expo-camera expo-media-library expo-image-manipulator
npm run start --tunnel
```

## 🔄 PARA CADA NUEVA SESIÓN

Una vez que ya tienes todo instalado, solo necesitas:

```bash
# 1. Navegar al proyecto
cd ruta/a/tu/proyecto

# 2. Ejecutar la app
npm run start --tunnel

# 3. Escanear QR con Expo Go
```

---

**💡 Tip**: Guarda este archivo para futuras instalaciones. Los comandos están listos para copiar y pegar.
