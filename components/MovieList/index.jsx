import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export const MovieList = ({ movies }) => {
  return (
    <View style={styles.movieListWrapper}>
      <FlatList
        style={styles.movieList}
        data={movies}
        renderItem={({ item }) => {
          return (
            <View style={styles.movieListItem}>
              <Text style={styles.movieListItemContent}>{item.title}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  movieListWrapper: {
    padding: 10,
  },
  movieList: {
    margin: '10px 0',
    paddingRight: 30,
  },
  movieListItem: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    listStyleType: 'none',
    marginBottom: 15,
  },
  movieListItemContent: {
    fontSize: 20,
    color: 'white',
  },
});
