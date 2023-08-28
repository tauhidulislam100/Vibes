import React, {useState, useEffect} from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import FullSmokeEffect from './FullSmokeEffect';

const FullSmokeEffectScreen = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    setOverlayVisible(true);
  }, []);


  // <View
  //   style={styles.container}>
  //   {overlayVisible && (
  //     <FullSmokeEffect onFinish={() => setOverlayVisible(false)} />
  //   )}
  // </View>
  return (
    <ImageBackground
    source={require('./assets/img/screen_2.png')}
    style={styles.container}>
    {overlayVisible && (
      <FullSmokeEffect onFinish={() => setOverlayVisible(false)} />
    )}
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "green"
  },
});

export default FullSmokeEffectScreen;
