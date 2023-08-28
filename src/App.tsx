/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import StadiumButton from './StadiumButton';
import { LeafButtonLeft } from './LeafButtonLeft';
import LeafButtonRight from './LeafButtonRight';
import { styles } from './styles';
import Avatar from './Avatar';





function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        <View style={styles.cardContainer}>
          <ImageBackground
            source={require('./assets/img/card_bg_1.png')}
            resizeMode="cover"
            style={{
              flex: 1,
              borderRadius: 80,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              flexDirection: 'column',
              height: 300,
            }}>
            <View style={{...styles.actionsGroup, backgroundColor: "transparent", flexWrap: "wrap", rowGap: 10,}}>
              <LeafButtonLeft text='hill'/>
              <StadiumButton text='hight'/>
              <StadiumButton text='mount'/>
              <LeafButtonRight text='+10'/>
            </View>
          
          </ImageBackground>
        </View>
        <View style={styles.cardContainer}>
          <ImageBackground
            source={require('./assets/img/card_bg_1.png')}
            resizeMode="cover"
            style={{
              flex: 1,
              borderRadius: 80,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              flexDirection: 'column',
              height: 300,
            }}>
            <View style={{...styles.actionsGroup, backgroundColor: "transparent", flexWrap: "wrap", rowGap: 10,}}>
              <LeafButtonLeft text='hill'/>
              <StadiumButton text='hight is new'/>
              <StadiumButton text='mount profound'/>
              <LeafButtonRight text='+10'/>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.cardContainer}>
          <ImageBackground
            source={require('./assets/img/card_bg_1.png')}
            resizeMode="cover"
            style={{
              flex: 1,
              borderRadius: 80,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              flexDirection: 'column',
              height: 300,
            }}>
        
            <View style={{...styles.actionsGroup, backgroundColor: "transparent", flexWrap: "wrap", rowGap: 10,}}>
              <LeafButtonLeft text='hill is montain'/>
              <StadiumButton text='hight is new mountain'/>
              <StadiumButton text='mount profound count does'/>
              <LeafButtonRight text='+10000'/>
            </View>
          </ImageBackground>
        </View>
          
        <View style={{margin: 20, display:"flex", gap: 20}}>
          <Avatar/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
