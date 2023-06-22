import {Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import CustomButton from '../shared/button';

export default function HomeScreen({navigation}) {

  const hadleNavigation = () => {
    navigation.push("Movies");
  }
  
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
      <CustomButton text="Custom Button" onPress={hadleNavigation}/>
      
    </View>
  );
}