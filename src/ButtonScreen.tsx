import React from 'react'
import { ScrollView, View, ImageBackground } from 'react-native'
import Avatar from './Avatar'
import { LeafButtonLeft } from './LeafButtonLeft'
import LeafButtonRight from './LeafButtonRight'
import StadiumButton from './StadiumButton'
import { styles } from './styles'

const ButtonScreen = () => {
  return (
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
  )
}

export default ButtonScreen;