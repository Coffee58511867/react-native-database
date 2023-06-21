import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DetailsScreen() {
  const [name, setName] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserInfo").then((value) => {
        if (value != null) {
            let user = JSON.parse(value);
          setName(user.Name);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const udateData = async () => {
    if (name.length == 0) {
      Alert.alert("Warning", "Please enter your details ");
    } else {
      try {
        await AsyncStorage.setItem("Name", name);
        Alert.alert("Success", "Your data has been updated");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {name}</Text>

      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTex} onPress={udateData}>
          Update
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
    justifyContent: "center",
  },
  btn: {
    height: 40,
    marginTop: 10,
    backgroundColor: "blue",
    width: 250,
    borderRadius: 6,
  },
  text: {
    fontSize: 25,
    fontWeight: 700,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    height: 45,
    margin: 20,
    marginTop: 200,
  },
  btnTex: {
    color: "white",
    textAlign: "center",
    marginTop: 9,
    fontSize: 16,
  },
});
