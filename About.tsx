import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
 
export default function About({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Halaman About</Text>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 24},
  judul: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});
