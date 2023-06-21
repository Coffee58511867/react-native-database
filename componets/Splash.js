import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";

export default function Splashcreen() {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/favicon.png")} />
      <Text style={styles.text}>To Do Application</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: 'center',

    alignItems: "center",
  },
  text: {
     color: 'white',
     fontSize: 25,
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 50,
    marginBottom: 200,
  },


});
