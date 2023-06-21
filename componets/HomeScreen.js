import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity style={styles.btn}>
        <Text
          style={styles.btnTex}
          onPress={() => navigation.push("Login")}
        >
          Bottom Tabs
        </Text>
      </TouchableOpacity>
      
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
  btn: {
    height: 40,
    marginTop: 10,
    backgroundColor: "darkblue",
    width: 250,
    borderRadius: 6,
  },
  btnTex: {
    color: "white",
    textAlign: "center",
    marginTop: 9,
    fontSize: 16,
  },
});
