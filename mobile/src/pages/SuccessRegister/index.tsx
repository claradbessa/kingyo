import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backgroundImg from '../../assets/images/background.png'
import feitoImg from '../../assets/images/feito.png'

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';


function Landing() {
  const { navigate } = useNavigation();

  function handleNavigateToLoginPage() {
    navigate('Signin');
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.background} >
        <View style={styles.textsContainer} >
          <Image source={feitoImg} style={styles.image}/>
          <Text style={styles.title}>Cadastro Concluído!</Text>
          <Text style={styles.subtitle}>
            Agora você faz parte da {'\n'} plataforma kingyo
          </Text>
        </View>

        <RectButton
          style={styles.button}
          onPress={handleNavigateToLoginPage}>
          <Text style={styles.buttonText}>Fazer Login</Text>
        </RectButton>
      </ImageBackground>
    </View>
  );
}

export default Landing;