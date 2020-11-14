import React, { useCallback, useRef, useState } from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
  View,
  Text
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'

import PetItem, { Pet } from '../../../components/PetItem';

import { useAuth } from '../../../contexts/auth';
import PageHeader from '../../../components/PageHeaderMenu';

import styles from './style';

import api from '../../../services/api';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

interface SignInFormData {
  email: string;
  password: string;
}

const PetList: React.FC = () => {
  const { navigate } = useNavigation();
  const { signIn, user } = useAuth();
  const [pets, setPets] = useState([]);

  function handleNavigateToPetCreatePage() {
    navigate('PetCreateProfissional');
  }


  function loadPets() {

    api.get('/professional/pets', { params: {}, headers: { 'user': user.id } }).then(response => {
      if (response) {
        setPets(response.data);
      }
    });

  }

  useFocusEffect(() => {
    loadPets();
  });

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>

        <ScrollView keyboardShouldPersistTaps="handled" >

          <PageHeader title='Meus Pacientes'></PageHeader>

          <View style={styles.container}>



            {pets.map((pet: Pet) => {
              return (
                <PetItem
                  key={pet.id}
                  pet={pet}
                />
              )
            })}

            <RectButton
              style={[styles.button]} onPress={handleNavigateToPetCreatePage}>
              <Icon
                raised
                name='plus'
                type='font-awesome'
                color='#EE812E' size={30} />
            </RectButton>
          </View>



        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default PetList;