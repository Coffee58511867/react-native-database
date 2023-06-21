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
export default function AddTaskScreen({ navigation }) {
  const [name, setName] = useState("");
  const [description , setDescription] = useState("");

  const handleSubmit = async () => {
    if (name.length == 0) {
      Alert.alert("Warning", "Please enter your details ");
    } else {
      try {
        var userData = {
          Name: name,
          Description: description,
        };
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter task title"
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="Enter task description"
        style={styles.input}
        value={description}
        onChangeText={(value) => setDescription(value)}
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTex} onPress={handleSubmit}>
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
    marginTop: 20,
    backgroundColor: "#0080ff",
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
    marginTop: 10,
    height: 45,
    margin: 5,
  },
});
