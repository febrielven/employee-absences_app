import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Platform, Alert} from 'react-native';
import {Camera as ExpoCamera} from 'expo-camera';

type Props = {
  cameraType?: string;
  onDismiss?: () => void;
  onCaptureDone?: () => void;
  onInfo?: () => void;
};
export default function Camera(props: Props) {
  const [type, setType] = useState(ExpoCamera.Constants.Type.front);

  useEffect(() => {
    (async () => {
        if (Platform.OS != 'web') {
            const {status} = await ExpoCamera.requestPermissionsAsync()
            if (status != 'granted') {
                Alert.alert('No access to camera')
            }
        }
    })();
  }, []);

  return <ExpoCamera style={styles.camera} type={type} />;
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});
