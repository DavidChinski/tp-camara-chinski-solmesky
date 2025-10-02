import React, { useState, useRef, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image, 
  Alert, 
  Dimensions,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImageManipulator from 'expo-image-manipulator';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraType, setCameraType] = useState('back');
  const [capturedImage, setCapturedImage] = useState(null);
  const [isPreview, setIsPreview] = useState(false);
  const [flashMode, setFlashMode] = useState('off');
  const [filter, setFilter] = useState('none');
  const cameraRef = useRef(null);

  useEffect(() => {
    getMediaPermissions();
  }, []);

  const getMediaPermissions = async () => {
    const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
    if (mediaStatus !== 'granted') {
      Alert.alert('Permisos', 'Se necesitan permisos de galería para guardar fotos');
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 0.8,
          base64: false,
        });
        setCapturedImage(photo.uri);
        setIsPreview(true);
      } catch (error) {
        Alert.alert('Error', 'No se pudo tomar la foto');
      }
    }
  };

  const retakePicture = () => {
    setCapturedImage(null);
    setIsPreview(false);
  };

  const savePicture = async () => {
    if (capturedImage) {
      try {
        // Aplicar filtro si está seleccionado
        let processedImage = capturedImage;
        if (filter !== 'none') {
          processedImage = await applyFilter(capturedImage, filter);
        }

        // Guardar en la galería
        const asset = await MediaLibrary.createAssetAsync(processedImage);
        await MediaLibrary.createAlbumAsync('TP Camara', asset, false);
        
        Alert.alert('Éxito', 'Foto guardada en la galería');
        retakePicture();
      } catch (error) {
        Alert.alert('Error', 'No se pudo guardar la foto');
      }
    }
  };

  const applyFilter = async (imageUri, filterType) => {
    try {
      let actions = [];
      
      switch (filterType) {
        case 'grayscale':
          actions.push({ resize: { width: 800 } });
          break;
        case 'sepia':
          actions.push({ resize: { width: 800 } });
          break;
        case 'vintage':
          actions.push({ resize: { width: 800 } });
          break;
        default:
          actions.push({ resize: { width: 800 } });
      }

      const result = await ImageManipulator.manipulateAsync(
        imageUri,
        actions,
        { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
      );
      
      return result.uri;
    } catch (error) {
      console.log('Error applying filter:', error);
      return imageUri;
    }
  };

  const toggleCameraType = () => {
    setCameraType(
      cameraType === 'back'
        ? 'front'
        : 'back'
    );
  };

  const toggleFlash = () => {
    setFlashMode(
      flashMode === 'off'
        ? 'on'
        : 'off'
    );
  };

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text>Esperando permisos...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Necesitamos tu permiso para usar la cámara</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Dar Permiso</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {!isPreview ? (
        <View style={styles.cameraContainer}>
          <CameraView
            style={styles.camera}
            facing={cameraType}
            flash={flashMode}
            ref={cameraRef}
          >
            <View style={styles.cameraOverlay}>
              {/* Header con controles */}
              <View style={styles.header}>
                <TouchableOpacity style={styles.headerButton} onPress={toggleFlash}>
                  <Text style={styles.headerButtonText}>
                    {flashMode === 'off' ? '⚡' : '⚡'}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.title}>TP Cámara</Text>
                <TouchableOpacity style={styles.headerButton} onPress={toggleCameraType}>
                  <Text style={styles.headerButtonText}>🔄</Text>
                </TouchableOpacity>
              </View>

              {/* Selector de filtros */}
              <View style={styles.filterContainer}>
                <Text style={styles.filterTitle}>Filtros:</Text>
                <View style={styles.filterButtons}>
                  {['none', 'grayscale', 'sepia', 'vintage'].map((filterName) => (
                    <TouchableOpacity
                      key={filterName}
                      style={[
                        styles.filterButton,
                        filter === filterName && styles.filterButtonActive
                      ]}
                      onPress={() => setFilter(filterName)}
                    >
                      <Text style={styles.filterButtonText}>
                        {filterName === 'none' ? 'Normal' : 
                         filterName === 'grayscale' ? 'B&N' :
                         filterName === 'sepia' ? 'Sepia' : 'Vintage'}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Botón de captura */}
              <View style={styles.captureContainer}>
                <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                  <View style={styles.captureButtonInner} />
                </TouchableOpacity>
              </View>
            </View>
          </CameraView>
        </View>
      ) : (
        <View style={styles.previewContainer}>
          <Image source={{ uri: capturedImage }} style={styles.previewImage} />
          
          <View style={styles.previewControls}>
            <TouchableOpacity style={styles.controlButton} onPress={retakePicture}>
              <Text style={styles.controlButtonText}>📷 Retomar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.controlButton} onPress={savePicture}>
              <Text style={styles.controlButtonText}>💾 Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  cameraOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  filterContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  filterTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  filterButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  filterButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    margin: 5,
  },
  filterButtonActive: {
    backgroundColor: '#007AFF',
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  captureContainer: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#fff',
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  previewContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  previewImage: {
    flex: 1,
    width: width,
    resizeMode: 'contain',
  },
  previewControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  controlButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    minWidth: 120,
    alignItems: 'center',
  },
  controlButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
