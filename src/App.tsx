import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ButtonScreen from './ButtonScreen';
import HalfSmokeEffectScreen from './HalfSmokeEffectScreen';
import { Text } from 'react-native';
import FullSmokeEffectScreen from './FullSmokeEffectScreen';

const Stack = createNativeStackNavigator();



function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HalfSmokeEffectScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
        <Stack.Screen name="FullEffect" component={FullSmokeEffectScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
