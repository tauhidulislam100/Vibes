import { useState, useRef, useEffect, useCallback } from 'react';
import { Animated, Dimensions } from 'react-native';

type HalfSmokeEffectHookProps = {
  onFinish?: () => void;
  defaultScale?: number;
  maxScale?: number;
  defaultOpacity?: number,
};

const useHalfSmokeEffect = ({ onFinish, defaultScale=1, maxScale=3,defaultOpacity=1}: HalfSmokeEffectHookProps) => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(defaultScale)).current;
  const opacityAnim = useRef(new Animated.Value(defaultOpacity)).current;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const handlePress = useCallback(() => {
    moveAnim.setValue(0);
    scaleAnim.setValue(1);
    opacityAnim.setValue(1);

    Animated.parallel([
      Animated.timing(moveAnim, {
        toValue: -windowHeight / 2,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: maxScale,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onFinish && onFinish();
    });
  }, [moveAnim, scaleAnim, opacityAnim, windowHeight, onFinish]);

  const resetValue = () => {
    moveAnim.setValue(0);
    scaleAnim.setValue(defaultScale);
    opacityAnim.setValue(defaultOpacity);
  }

  return {
    moveAnim,
    scaleAnim,
    opacityAnim,
    windowWidth,
    windowHeight,
    handlePress,
    resetValue
  };
};

export default useHalfSmokeEffect;
