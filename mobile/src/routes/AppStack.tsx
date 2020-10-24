import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuTutor from '../pages/MenuTutor';
import PetCreate from '../pages/PetCreate';
import SucessPet from '../pages/SuccessPet';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return(
    <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="MenuTutor" component={MenuTutor}/>
            <Screen name="PetCreate" component={PetCreate}/>
            <Screen name="SucessPet" component={SucessPet}/>
        </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;