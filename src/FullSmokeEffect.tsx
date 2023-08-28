import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, Animated, View, StyleSheet} from 'react-native';

const FullSmokeEffect = ({onFinish}: {onFinish?: () => void}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const moveAnim = useRef(new Animated.Value(-windowHeight)).current;
  const scaleAnim = useRef(new Animated.Value(2)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const runSmokeEffect = () => {
    Animated.parallel([
      Animated.timing(moveAnim, {
        toValue: windowHeight / 3.8 - windowWidth * 0.05, // Adjust the value to start slightly above center
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 3,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start(onFinish);
  };

  useEffect(() => {
    runSmokeEffect();
  }, []);
  return (
    <View style={styles.overlay}>
      <Animated.Image
        source={require('./assets/img/ring_big.png')}
        style={[
          styles.image,
          {
            transform: [
              {translateY: moveAnim},
              {scaleX: scaleAnim},
              {scaleY: scaleAnim},
            ],
            opacity: opacityAnim,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    resizeMode: 'contain',
    width: '50%', // Adjust as needed
    height: 281, // Adjust as needed
  },
});
export default FullSmokeEffect;
