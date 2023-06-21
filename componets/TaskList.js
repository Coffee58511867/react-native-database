import { useState , useEffect} from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
  } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
export default function TaskListScreen({ navigation }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      getMoviesFromApiAsync();
    }, []);
  
    const getMoviesFromApiAsync = async () => {
      try {
        const response = await instance.get("/api/v1/items");
        const data = await response.json();
        setMovies(data.movies);
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <View style={styles.container}>
            <FlatList
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.list}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
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
  },
  list: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    padding: 10,
    marginTop: 10,
    height: 100,
    borderColor: "#cccccc",
    width: 300,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
  subtitle: {
    fontSize: 15,
  },
});
