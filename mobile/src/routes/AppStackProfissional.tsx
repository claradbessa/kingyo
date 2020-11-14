import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuProfissional from '../pages/Profissional/MenuProfissional';
import PetList from '../pages/Profissional/PetList';
import PetPerfil from '../pages/Profissional/PetPerfil';
import PetCreateProfissional from '../pages/Profissional/PetCreate';
import SucessPet from '../pages/Profissional/SuccessRegister';
import Vaccines from '../pages/EventsPet/Vaccines';

const { Navigator, Screen } = createStackNavigator();

function AppStackProfissional() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>

        <Screen name="MenuProfissional" component={MenuProfissional} />
        <Screen name="PetCreateProfissional" component={PetCreateProfissional} />
        <Screen name="PetList" component={PetList} />
        <Screen name="PetPerfil" component={PetPerfil} />
        <Screen name="SucessPet" component={SucessPet} />

        <Screen name="Vaccines" component={Vaccines} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStackProfissional;