import { BlurView } from '@react-native-community/blur';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const LeafButtonRight = ({text, onPress}:{text:string; onPress?:()=>void;}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={{minWidth: 49, height: 49, position: "relative"}}>
        <View
            style={{
            position: 'absolute',
            bottom: 0,
            left: -1.2,
            right: 0,
            top: 0,
            borderBottomWidth: 2,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderTopWidth: 0,
            borderColor: '#595959',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 48,
            borderBottomLeftRadius: 10,
            }}/>
        <View style={{...styles.buttonRight, overflow: 'hidden'}}>
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
  )
}

export default LeafButtonRight;