import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
 
export default function App() {
  const [isian, setIsian] = useState('');
  const [hasil, setHasil] = useState('');
 
  const kirim = () => {
    setHasil(isian);
  };
 
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ketik sesuatu..."
        value={isian}
        onChangeText={setIsian}
      />
      <Button title="Submit" onPress={kirim} />
      {hasil !== '' && (
        <Text style={styles.hasil}>Teks yang diinput: {hasil}</Text>
      )}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 24},
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  hasil: {marginTop: 16, fontSize: 18},
});
