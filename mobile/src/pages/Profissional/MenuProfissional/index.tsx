import React, { useEffect, useState, useContext } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, BorderlessButton  } from 'react-native-gesture-handler';

import style from './style';
import { Icon } from 'react-native-elements'

import {useAuth} from '../../../contexts/auth';

function MenuProfissional() {
    const {navigate} = useNavigation();

    const {signOut, signed} = useAuth();

    async function handleNavigateToPetListPage() { 
      navigate('PetList');
   }
   async function handleNavigateToCalendarPage() {
    navigate('CalendarProfissional');
  }
    async function handleSignOut() { 
       signOut();
    }

  return  (
    <View style={style.container}>
    <View style={style.buttonsContainer}>
      <RectButton
        style={[style.button, style.buttonPets]} onPress={handleNavigateToPetListPage}>
        <Icon name='paw' solid type='font-awesome-5' color='#FFF' size={40} />
        <Text style={style.buttonText}>Pets</Text>
      </RectButton>

      <RectButton
        style={[style.button, style.buttonCalendar]} onPress={handleNavigateToCalendarPage}>
        <Icon name='calendar' solid type='font-awesome-5' color='#FFF' size={40} />
        <Text style={style.buttonText}>Calendário</Text>
      </RectButton>
    </View>
    <View style={style.buttonsContainer}>
      <RectButton
        style={[style.button, style.buttonProfissional]}>
        <Icon name='stethoscope' solid type='font-awesome-5' color='#FFF' size={40} />
        <Text style={style.buttonText}>Clientes</Text>
      </RectButton>

      <RectButton
        style={[style.button, style.buttonHelp]}>
        <Icon name='hand-holding-heart' solid type='font-awesome-5' color='#FFF' size={40} />
        <Text style={style.buttonText}>Ajude</Text>
      </RectButton>
    </View>
    <View style={style.buttonsContainer}>
      <RectButton
        style={[style.button, style.buttonTips]}>
        <Icon name='certificate' solid type='font-awesome-5' color='#FFF' size={40} />
        <Text style={style.buttonText}>Dicas</Text>
      </RectButton>

      <RectButton
        style={[style.button, style.buttonPerfil]} onPress={handleSignOut}>
        <Icon name='sign-out-alt' solid type='font-awesome-5' color='#FFF' size={40} />
        <Text style={style.buttonText}>Sair</Text>
      </RectButton>
    </View>
  </View>
  );
}

export default MenuProfissional;