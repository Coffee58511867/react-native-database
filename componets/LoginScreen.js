import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function LoginScreen() {

    const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text>Welcome Back</Text>
      <TextInput
       placeholder='Enter your name'
       value={name}
       onChangeText={value => setName(value)}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
