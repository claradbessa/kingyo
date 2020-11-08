import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuProfissional from '../pages/MenuProfissional';

const { Navigator, Screen } = createStackNavigator();

function AppStackProfissional() {
  return(
    <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="MenuProfissional" component={MenuProfissional}/>


            
        </Navigator>
    </NavigationContainer>
  );
}

export default AppStackProfissional;