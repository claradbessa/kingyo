import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuProfissional from '../pages/Profissional/MenuProfissional';
import PetList from '../pages/Profissional/PetList';
import PetPerfil from '../pages/PetPerfil';
import PetCreateProfissional from '../pages/Profissional/PetCreate';
import SucessPet from '../pages/Profissional/SuccessRegister';

import CalendarProfissional from '../pages/Profissional/Calendar';
import EventCreate from '../pages/EventCreate';

import Vaccines from '../pages/EventsPet/Vaccines';
import Medicines from '../pages/EventsPet/Medicines';
import Consultations from '../pages/EventsPet/Consultations';
import Exams from '../pages/EventsPet/Exams';
import Petshops from '../pages/EventsPet/Petshops';

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
        <Screen name="CalendarProfissional" component={CalendarProfissional}/>
        <Screen name="EventCreate" component={EventCreate}/>

        <Screen name="Vaccines" component={Vaccines} />
            <Screen name="Medicines" component={Medicines} />
            <Screen name="Consultations" component={Consultations} />
            <Screen name="Exams" component={Exams} />
            <Screen name="Petshops" component={Petshops} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStackProfissional;