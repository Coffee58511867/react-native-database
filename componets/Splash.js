import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function Splashcreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.push('My Tasks');
    }, 2000);
  }, []);

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
    backgroundColor: "#0080ff",
    justifyContent: 'center',

    alignItems: "center",
  },
  text: {
     color: 'white',
     fontSize: 25,
  },
  image: {
    height: 150,
    width: 150,
    margin: 20,
  },


});
