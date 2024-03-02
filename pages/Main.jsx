import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { API } from '../api/index';

import { MovieList } from '../components/MovieList';

export const Main = () => {
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
      <Text style={styles.movieListTitle}>Movie List</Text>
      <MovieList movies={movies} />
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  movieListTitle: {
    margin: 10,
    paddingBottom: 10,
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#48c78e',
  },
});
