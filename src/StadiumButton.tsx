import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { styles } from './styles';

const StadiumButton = ({text, onPress}:{text: string, onPress?: ()=>void;}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View
      style={{
        minWidth: 103,
        height: 50,
        position: 'relative',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 100,
      }}>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: -0.5,
          right: 0.5,
          top: 0,
          borderBottomWidth: 2,
          borderLeftWidth: 0.5,
          borderRightWidth: 0.5,
          borderTopWidth: 0,
          borderColor: '#595959',
          borderRadius: 100,
        }}/>
      <View style={{...styles.buttonCapsul, overflow: 'hidden'}}>
        <BlurView
          style={styles.absolute}
          blurType="dark"
          blurAmount={2}
          reducedTransparencyFallbackColor="red"
        />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};



export default StadiumButton;
