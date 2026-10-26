import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
 
export default function Profil() {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Halaman Profil</Text>
      <Text>Nama: Komang</Text>
      <Text>Kampus: Universitas Primakara</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  judul: {fontSize: 22, fontWeight: 'bold', marginBottom: 12},
});
