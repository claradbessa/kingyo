import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backgroundImg from '../../assets/images/background.png'
import feitoImg from '../../assets/images/feito.png'

import styles from './style';
import { RectButton } from 'react-native-gesture-handler';


function Landing() {
  const { navigate } = useNavigation();

  function handleNavigateToMenuPage() {
    navigate('MenuTutor');
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.background} >
        <View style={styles.textsContainer} >
          <Image source={feitoImg} style={styles.image}/>
          <Text style={styles.title}>Cadastro Concluído!</Text>
          <Text style={styles.subtitle}>
            Seu pet está cadastrado! {'\n'} 
            Agora é só manter todas as informações
            atualizadas para o proteger seu melhor amigo.
          </Text>
        </View>

        <RectButton
          style={styles.button}
          onPress={handleNavigateToMenuPage}>
          <Text style={styles.buttonText}>Vamos lá</Text>
        </RectButton>
      </ImageBackground>
    </View>
  );
}

export default Landing;