import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { API } from '../api/index';

export default function Main() {
  const [movies, setMovies] = useState([]);

  const storeMovies = async () => {
    try {
      const movies = await API.getMovies();
      setMovies(movies);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };

  useEffect(() => {
    storeMovies();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => {
          return <Text key={item.id}>{item.title}</Text>;
        }}
      ></FlatList>
      <StatusBar style='auto' />
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
});
