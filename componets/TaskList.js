import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
export default function TaskListScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button}
       onPress={() => {
        navigation.push('Task');
       }}
       >
        <FontAwesome5 
        name={'plus'}
        size={23}
        color='white'
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  btn: {
    height: 40,
    marginTop: 10,
    backgroundColor: "#0080ff",
    width: 250,
    borderRadius: 6,
  },
  button:{
     width: 60,
     height: 60,
     backgroundColor: '#0080ff',
     borderRadius: 50,
     justifyContent: 'center',
     alignItems: 'center',
     position: 'absolute',
     bottom: 10,
     right: 10,
     elevation: 5,
  }
});
