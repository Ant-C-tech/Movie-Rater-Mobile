import { Text, View, StyleSheet } from 'react-native';

export const Movie = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.movieTitle}>{movie.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#282c35',
  },
  movieTitle: {
    margin: 10,
    paddingBottom: 10,
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#48c78e',
  },
});
