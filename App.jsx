import { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { Movies } from './pages/Movies';
import { Movie } from './pages/Movie';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: false,
      }),
    ).start();
  }, []);

  const rotationAnimation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1080deg'],
  });

  return (
    <View style={styles.app}>
      <Text style={styles.appTitle}>
        Movie{'   '}
        <Animated.View
          style={{
            width: 36,
            height: 36,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ rotate: rotationAnimation }],
          }}
        >
          <FontAwesome style={styles.appTitleLogo} name='film' />
        </Animated.View>
        {'   '}
        Rater
      </Text>
      <View style={styles.appContent}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Movies' component={Movies} />
            <Stack.Screen name='Movie' component={Movie} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100%',
    padding: 20,
    backgroundColor: '#282c34',
  },
  appTitle: {
    marginBottom: 10,
    fontSize: 36,
    color: 'white',
    textAlign: 'center',
  },
  appTitleLogo: {
    fontSize: 32,
    color: '#48c78e',
  },
  appContent: {
    flex: 1,
    backgroundColor: 'inherit',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#48c78e',
    borderRadius: 5,
    overflow: 'hidden',
  },
});
