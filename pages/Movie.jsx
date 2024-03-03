import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const Movie = ({ route }) => {
  const [temporaryUserRating, setTemporaryUserRating] = useState(0);
  const [userRating, setUserRating] = useState(0);

  const { movie } = route.params;

  useEffect(() => {
    setUserRating(0);
    setTemporaryUserRating(0);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.movieTitle}>{movie.title}</Text>
      <Text style={styles.movieDescription}>{movie.description}</Text>
      <View style={styles.ratingContainer}>
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <FontAwesome
              key={index}
              style={styles.starIcon}
              name={movie.average_rating >= index + 1 ? 'star' : 'star-o'}
            />
          );
        })}
      </View>
      <Text style={styles.movieRatingText}>
        Number of ratings: {movie.number_of_ratings}
      </Text>
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
  movieDescription: {
    marginLeft: 10,
    marginRight: 10,

    fontSize: 18,
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'center',
  },
  starIcon: {
    fontSize: 24,
    color: '#48c78e',
    textAlign: 'center',
    marginLeft: 1,
    marginRight: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  movieRatingText: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,

    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
