import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const MovieList = ({ movies }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.movieListWrapper}>
      <FlatList
        style={styles.movieList}
        data={movies}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Movie', { movie: item });
              }}
            >
              <View style={styles.movieListItem}>
                <Text style={styles.movieListItemContent}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
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
