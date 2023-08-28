import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { BlurView } from '@react-native-community/blur'

export const LeafButtonLeft = ({text, onPress}:{text: string,onPress?:()=>void;}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={{minWidth: 71, height: 50, position: "relative"}}>
        <View
            style={{
            position: 'absolute',
            bottom: 0,
            left: -0.5,
            right: 0,
            top: 0,
            borderBottomWidth: 2,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderTopWidth: 0,
            borderColor: '#595959',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 40,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 70
            }}/>
        <View style={{...styles.buttonLeft, overflow: 'hidden'}}>
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

// export const LeafButtonLeft = ({text, onPress}:{text: string,onPress?:()=>void;}) => {
//   return (
//     <TouchableOpacity onPress={onPress}>
//     <View style={{width: 71, height: 50, position: "relative"}}>
//         <View
//             style={{
//             position: 'absolute',
//             bottom: 0,
//             left: -0.5,
//             right: 0,
//             top: 0,
//             borderBottomWidth: 2,
//             borderLeftWidth: 1,
//             borderRightWidth: 1,
//             borderTopWidth: 0,
//             borderColor: '#595959',
//             borderTopLeftRadius: 15,
//             borderTopRightRadius: 40,
//             borderBottomRightRadius: 20,
//             borderBottomLeftRadius: 70
//             }}/>
//         <View style={{...styles.buttonLeft, overflow: 'hidden'}}>
//             <BlurView
//             style={styles.absolute}
//             blurType="dark"
//             blurAmount={2}
//             reducedTransparencyFallbackColor="red"
//             />
//             <Text style={styles.buttonText}>{text}</Text>
//         </View>
//     </View>
//     </TouchableOpacity>
//   )
// }
