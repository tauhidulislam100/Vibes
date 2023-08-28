import React from 'react';
import { View, Animated, ImageBackground, StyleSheet, TouchableOpacity, Text } from 'react-native';
import useHalfSmokeEffect from './hooks/useHalfSmokeEffect';
import { useFocusEffect } from '@react-navigation/native';

const HalfSmokeEffectScreen = ({navigation}: {navigation: any}) => {
  const { moveAnim, scaleAnim, opacityAnim, windowWidth, handlePress, resetValue, } = useHalfSmokeEffect({
    onFinish: () => {
      console.log("Animation finished");
      navigation.navigate('FullEffect', { name: 'Jane' });
    },
  });

  useFocusEffect(
    React.useCallback(() => {
      resetValue();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/img/screen_1.png")}
        style={{ flex: 1, width: windowWidth, display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Animated.Image
          source={require('./assets/img/ring_small.png')}
          style={[
            {
              transform: [
                { translateY: moveAnim },
                { scaleX: scaleAnim },
                { scaleY: scaleAnim },
              ],
              opacity: opacityAnim,
            },
            styles.image,
            {
              position: "relative",
              top: 85,
            }
          ]}
        />
          <TouchableOpacity
          onPress={handlePress}
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <Text style={{ color: 'white' }}>Go</Text>
        </TouchableOpacity>
      </ImageBackground>
        <TouchableOpacity onPress={() => navigation.navigate('ButtonScreen')} style={{width: 200, height: 48, backgroundColor: "red", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 12}}>
          <Text style={{color: "white"}}>View UI Component</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EA21A2"
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
    objectFit: "contain",
  },
});

export default HalfSmokeEffectScreen;
