import {Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({navigation}) {
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity style={globalStyles.btn}>
        <Text
          style={globalStyles.btnTex}
          onPress={() => navigation.push("Login")}
        >
         Login Now
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.btn}>
        <Text
          style={globalStyles.btnTex}
          onPress={() => navigation.push("Movies")}
        >
         Movie List
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.btn}>
        <Text
          style={globalStyles.btnTex}
          onPress={() => navigation.push("Splash")}
        >
         Splash Screen
        </Text>
      </TouchableOpacity>
      
    </View>
  );
}