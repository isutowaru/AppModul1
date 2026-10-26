import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
 
export default function Home({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Halaman Home</Text>
      <Button
        title="Pergi ke Halaman About"
        onPress={() => navigation.navigate('About')}
      />
      <View style={{height: 12}} />
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
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
