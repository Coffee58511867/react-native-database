import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
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
          <View>
            <Text>{item.title}</Text>
            <Text>{item.releaseYear}</Text>
          </View>
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
});
