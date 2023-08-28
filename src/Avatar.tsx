import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import CircularBorder from './CircularBoder';

const CircularBorderWithGaps = ({borderColor="red", width=46, height=46, blurType="light", blurAmount=10}) => {
  return (
    <View style={avatarStyles.circularBorderContainer}>
      <View style={avatarStyles.circularBorder}>
        <CircularBorder width={width} height={height} color={borderColor}/>
      </View>
      <View style={avatarStyles.circularContent}>
        <BlurView
          style={avatarStyles.absolute}
          blurType={blurType as any}
          blurAmount={blurAmount}
          reducedTransparencyFallbackColor="red"
        />
        <Text style={avatarStyles.text}>100%</Text>
      </View>
    </View>
  );
};

const Avatar = ({gradientColors=["red", "#00FF6602"]}) => {
  return (
    <View style={avatarStyles.avatarContainer}>
      <View style={{ right: 20, top: 10,  position: "absolute", zIndex: 20}}>
        <CircularBorderWithGaps/>
      </View>
      <View style={{right: 20, bottom: 0, position: "absolute", zIndex: 20}}>
        <CircularBorderWithGaps/>
      </View>
      <LinearGradient colors={gradientColors} style={avatarStyles.gradient}>
        <View style={avatarStyles.innerCircle}>
          <View style={avatarStyles.imageContainer}>
            <Image
              source={require("./assets/img/card_bg_1.png")}
              resizeMode='cover'
              style={avatarStyles.image}
            />
            <BlurView
              style={avatarStyles.absolute}
              blurType="regular"
              blurAmount={1}
              reducedTransparencyFallbackColor="red"
            />
          </View>
        </View>
      </LinearGradient>

    </View>
  );
};



export const avatarStyles = StyleSheet.create({
  circularBorderContainer: {
    position: "relative",
  },
  circularBorder: {
    width: 46,
    height: 46,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 11,
  },
  circularContent: {
    width: 46,
    height: 46,
    borderRadius: 46,
    backgroundColor: "transparent",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 10,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  text: {
    color: "black",
  },
  avatarContainer: {
    position: "relative",
    width: 212,
    height: 212,
  },
  avatarPosition: {
    position: "absolute",
  },
  gradient: {
    width: 212,
    height: 212,
    borderRadius: 212,
  },
  innerCircle: {
    width: 210,
    height: 210,
    borderRadius: 210,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 200,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Avatar;
