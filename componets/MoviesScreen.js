import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function MoviesScreen() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesFromApiAsync();
  }, []);

  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
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
              <Text style={styles.subtitle}>{item.releaseYear}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
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
