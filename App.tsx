import React, {useState} from 'react';
import {
  View, Text, Button, Alert, Image, ScrollView,
  StyleSheet, PermissionsAndroid, Platform,
} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
 
async function mintaIzinGaleri() {
  if (Platform.OS !== 'android') return true;
  const izin =
    Platform.Version >= 33
      ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
      : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
  const hasil = await PermissionsAndroid.request(izin);
  return hasil === PermissionsAndroid.RESULTS.GRANTED;
}
 
export default function App() {
  const [foto, setFoto] = useState<string[]>([]);
 
  const tampilkanAlert = () => Alert.alert('Primakara Luar Biasa');
 
  const tampilkanGaleri = async () => {
    const diizinkan = await mintaIzinGaleri();
    if (!diizinkan) {
      Alert.alert('Izin ditolak', 'Aplikasi tidak dapat membaca galeri.');
      return;
    }
    try {
      const hasil = await CameraRoll.getPhotos({first: 10, assetType: 'Photos'});
      if (hasil.edges.length === 0) {
        Alert.alert('Foto tidak ditemukan');
        return;
      }
      setFoto(hasil.edges.map(e => e.node.image.uri));
    } catch (err) {
      Alert.alert('Terjadi kesalahan', String(err));
    }
  };
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button title="Tampilkan Alert" onPress={tampilkanAlert} />
      <View style={styles.jarak} />
      <Button title="Tampilkan 10 Gambar dari Galeri" onPress={tampilkanGaleri} />
      <Text style={styles.info}>Jumlah foto di state: {foto.length}</Text>
      <View style={styles.grid}>
        {foto.map((uri, i) => (
          <Image key={i} source={{uri}} style={styles.gambar} />
        ))}
      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {padding: 20},
  jarak: {height: 12},
  info: {marginVertical: 12, fontSize: 16},
  grid: {flexDirection: 'row', flexWrap: 'wrap', gap: 8},
  gambar: {width: 100, height: 100},
});