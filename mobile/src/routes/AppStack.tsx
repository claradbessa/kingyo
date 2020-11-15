import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuTutor from '../pages/MenuTutor';
import PetCreate from '../pages/PetCreate';
import SucessPet from '../pages/SuccessPet';
import PetList from '../pages/PetList';
import PetPerfil from '../pages/PetPerfil';
import Calendar from '../pages/Calendar';
import EventCreate from '../pages/EventCreate';

import MenuProfissional from '../pages/Profissional/MenuProfissional';

import Vaccines from '../pages/EventsPet/Vaccines';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return(
    <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
    
            <Screen name="MenuTutor" component={MenuTutor}/>
            <Screen name="PetCreate" component={PetCreate}/>
            <Screen name="PetList" component={PetList}/>
            <Screen name="PetPerfil" component={PetPerfil}/>
            <Screen name="SucessPet" component={SucessPet}/>
            <Screen name="Calendar" component={Calendar}/>
            <Screen name="EventCreate" component={EventCreate}/>

            <Screen name="Vaccines" component={Vaccines} />
        </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;