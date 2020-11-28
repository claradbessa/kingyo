import React, { useCallback, useRef, useState } from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import ProfessionalItem, { Professional } from '../../components/ProfessionalItem';

import { useAuth } from '../../contexts/auth';
import PageHeader from '../../components/PageHeaderMenu';

import styles from './styles';

import api from '../../services/api';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

const ProfessionalList: React.FC = () => {
  const { navigate } = useNavigation();
  const { signIn, user } = useAuth();
  const [professionals, setProfessionals] = useState([]);

  function loadPets() {

    api.get('/professionals/list').then(response => {
      if (response.data) {
        setProfessionals(response.data);
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

          <PageHeader title='Profissionais'></PageHeader>

          <View style={styles.container}>

            {professionals.map((professional: Professional) => {
              return (
                <ProfessionalItem
                  key={professional.id}
                  professional={professional}
                />
              )
            })}
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default ProfessionalList;