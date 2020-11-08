import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backgroundImg from '../../../assets/images/background.png'
import feitoImg from '../../../assets/images/feito.png'

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';


function Landing() {
  const { navigate } = useNavigation();

  function handleNavigateToPetListPage() {
    navigate('PetList');
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.background} >
        <View style={styles.textsContainer} >
          <Image source={feitoImg} style={styles.image}/>
          <Text style={styles.title}>Seu novo paciente!</Text>
          <Text style={styles.subtitle}>
            Agora você pode acessar as informações e compartilhar com o tutor responsável
          </Text>
        </View>

        <RectButton
          style={styles.button}
          onPress={handleNavigateToPetListPage}>
          <Text style={styles.buttonText}>Ver Pacientes</Text>
        </RectButton>
      </ImageBackground>
    </View>
  );
}

export default Landing;