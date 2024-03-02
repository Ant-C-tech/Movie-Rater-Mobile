import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { Main } from './pages/Main';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
    ).start();
  }, []);

  const rotationAnimation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.app}>
      <Text style={styles.appTitle}>
        Movie{' '}
        <Animated.View
          style={{
            transform: [
              { translateX: 0 },
              { translateY: -8 },
              { rotate: rotationAnimation },
              { translateX: -17 },
              { translateY: -8 },
            ],
          }}
        >
          <FontAwesome style={styles.appTitleLogo} name='film' />
        </Animated.View>{' '}
        Rater
      </Text>
      <View style={styles.appContent}>
        <Main />
      </View>
      <StatusBar style='auto' />
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
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
  },
  appTitleLogo: {
    fontSize: 32,
    color: '#48c78e',
  },
  appContent: {
    position: 'relative',
    height: '90vh',
    maxHeight: '90vh',
    backgroundColor: 'inherit',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#48c78e',
    borderRadius: 5,
  },
});
