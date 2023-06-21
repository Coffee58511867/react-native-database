import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

export default function AddTaskcreen({ navigation }) {
  const [name, setName] = useState("");

  const handleLogin = async () => {
    if (name.length == 0) {
      Alert.alert("Warning", "Please enter your details ");
    } else {
      try {
        var userData = {
            Name: name,
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your task name"
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTex} onPress={handleLogin}>
          Submit
        </Text>
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
    backgroundColor: "blue",
    width: 250,
    borderRadius: 6,
  },
  btnTex: {
    color: "white",
    textAlign: "center",
    marginTop: 9,
    fontSize: 16,
  },

  input: {
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    height: 45,
    margin: 5,
    
  },
});
