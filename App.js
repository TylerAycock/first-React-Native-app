import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState("Tyler")
  const [age, setAge] = useState(30)


  return (
    <View style={styles.container}>
      <Text>Enter Name</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='ex. John Doe'
        onChangeText={value => setName(value)}
      />
      <Text>Enter Age</Text>
      <TextInput
        style={styles.input}
        placeholder='ex. 69'
        keyboardType='numeric'
        onChangeText={value => setAge(value)}
      />

      <Text>name: {name}, age {age}</Text>
      <View style={styles.buttoneContainer} >
        <Button title='SUBMIT' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: "bold"
  },
  body: {
    backgroundColor: 'gold',
    padding: 20,
    fontWeight: "bold",
  },
  buttoneContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "777",
    padding: 8,
    width: 200,
  }
});
