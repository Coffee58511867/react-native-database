import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text
          style={styles.btnTex}
          onPress={() => navigation.push("Login")}
        >
         Login Now
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text
          style={styles.btnTex}
          onPress={() => navigation.push("Movies")}
        >
         Movie List
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
});
