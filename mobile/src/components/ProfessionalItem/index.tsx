import React, { useState } from 'react';
import { View, Image, Text, Linking, AsyncStorage } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'


import styles from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

export interface Professional {
    id: number;
    name: string;
    phone: string;
    type: string;
    decription: string;
    city: string;
    state: string;
}

interface ProfessionalItemProps {
    professional: Professional;
    favorited?: boolean;
}


const ProfessionalItem: React.FunctionComponent<ProfessionalItemProps> = ({ professional, favorited }) => {

    const { navigate } = useNavigation();

    function handleLinkToWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=+55${professional.phone}`);
      }

    return (
        <View style={styles.container}>
        <View style={styles.profile}>
  
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{professional.name}</Text>
            <Text style={styles.subject}>{professional.type}</Text>
            <Text style={styles.subject}>{professional.city} - {professional.state}</Text>
          </View>
        </View>
        <Text style={styles.bio}>
          {professional.decription}
        </Text>
  
        <View style={styles.footer}>
  
          <View style={styles.buttonsContainer}>
  
            <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
            <Icon name='whatsapp' solid type='font-awesome-5' color='#FFF' size={25} />
              <Text style={styles.contactButtonText}>Entrar em contato</Text>
            </RectButton>
          </View>
        </View>
      </View>
    );
}


export default ProfessionalItem;