import React, { useEffect, useState, useContext } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, BorderlessButton  } from 'react-native-gesture-handler';

import styles from './styles';
import landingImg from '../../assets/images/landing.png'

import {useAuth} from '../../contexts/auth';

function Landing() {
    const {navigate} = useNavigation();

    const {signOut, signed} = useAuth();


    function handleNavigateToLoginPage(){
        navigate('Signin');
    } 

    function handleNavigateToTutorRegisterPage(){
        navigate('TutorRegister');
    } 

    function handleNavigateToProfessionalRegisterPage(){
        navigate('ProfessionalRegister');
    } 

    function handleNavigateToprofessionalRegisterPage(){
        navigate('SuccessRegister');
    } 
 
    async function handleSignOut() { 
       signOut();
    }

  return  (
      <View style={styles.container}>
        <Image source={landingImg} style={styles.banner} />

        <Text style={styles.title}>
            Seja bem-vindo, {'\n'}
            <Text style={styles.titleBold}>Como deseja de cadastrar?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
            <RectButton 
            style={[styles.button, styles.buttonPrimary]} onPress={handleNavigateToTutorRegisterPage}>
                <Text style={styles.buttonText}>Tutor</Text>
            </RectButton>

            <RectButton 
            style={[styles.button, styles.buttonSecondary]} onPress={handleNavigateToProfessionalRegisterPage}>
                <Text style={styles.buttonText}>Profissional</Text>
            </RectButton>        
        </View>

        <BorderlessButton onPress={handleNavigateToLoginPage}>
        <Text style={styles.loginText}>Já sou cadastrado</Text>
        </BorderlessButton>
      </View>
  );
}

export default Landing;