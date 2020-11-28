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

import ProfessionalList from '../pages/ProfessionalList';

import Vaccines from '../pages/EventsPet/Vaccines';
import Medicines from '../pages/EventsPet/Medicines';
import Consultations from '../pages/EventsPet/Consultations';
import Exams from '../pages/EventsPet/Exams';
import Petshops from '../pages/EventsPet/Petshops';

import CalendarProfissional from '../pages/Profissional/Calendar';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return(
    <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
    
            <Screen name="MenuTutor" component={MenuTutor}/>
            <Screen name="PetCreate" component={PetCreate}/>
            <Screen name="PetList" component={PetList}/>
            <Screen name="ProfessionalList" component={ProfessionalList}/>
            <Screen name="PetPerfil" component={PetPerfil}/>
            <Screen name="SucessPet" component={SucessPet}/>
            <Screen name="Calendar" component={Calendar}/>
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

export default AppStack;