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

import PageHeader from '../../components/PageHeaderMenu';

import styles from './styles';

import api from '../../services/api';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

interface SignInFormData {
  email: string;
  password: string;
}

const PetList: React.FC = (props) => {

  const { navigate } = useNavigation();

  const petId = props.route.params.petId;

  const [pet, setPet] = useState([]);

  function loadPets() {

    try {
      api.get('/pet', { params: {}, headers: { 'pet_id': petId } }).then(response => {
        if (response) {
          setPet(response.data.[0]);
        }
      });
    } catch (err) {
      console.log(err)
    }

  }

  useFocusEffect(() => {
    loadPets();
  });

  function generateSharingCode(petId) {
    try {
      api.get('/generate/code', { params: {}, headers: { 'pet_id': petId } }).then(response => {
        if (response) {
          if (response.data.success && response.data.code) {
            Alert.alert(
              'Código de Compartilhamento',
              '\nSeu código é ' + response.data.code + '\n \nCompartilhe com seu profissional para que ele possa ter acesso as informações do seu pet.',
            );
          } else {
            Alert.alert(
              'Código de Compartilhamento',
              'Não foi possível gerar o código de compartilhamento, tente novamente mais tarde!',
            );
          }
        }
      });
    } catch (err) {
      console.log(err)
    }
  }

  function handlerNavigateMedicines(pet_id) {
    console.log(petId)
    navigate('Medicines', {
      petId: pet_id
    })
  }

  function handlerNavigateVaccines(pet_id) {
    console.log(petId)
    navigate('Vaccines', {
      petId: pet_id
    })
  }

  function handlerNavigateConsultations(pet_id) {
    console.log(petId)
    navigate('Consultations', {
      petId: pet_id
    })
  }

  function handlerNavigateExams(pet_id) {
    console.log(petId)
    navigate('Exams', {
      petId: pet_id
    })
  }

  function handlerNavigatePetshops(pet_id) {
    console.log(petId)
    navigate('Petshops', {
      petId: pet_id
    })
  }


  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>

        <ScrollView keyboardShouldPersistTaps="handled" >

          <PageHeader title={pet.name}></PageHeader>

          <View style={styles.container}>

            <View style={styles.profile}>

              <Icon
                raised
                name={pet.species == 'Cachorro' ? 'dog' : pet.species == 'Gato' ? 'cat' : pet.species == 'Ave' ? 'dove' : pet.species == 'Peixe' ? 'fish' : 'paw'}
                type='font-awesome-5'
                color='#EE812E' size={30} />

              <View style={styles.profileInfo}>
                <Text style={styles.name}>{pet.name}</Text>
                <Text style={styles.subject}>{pet.species} {pet.breed && <Text>- {pet.breed}</Text>} </Text>
              </View>
            </View>

            <View style={styles.containerButton}>

              <RectButton style={styles.button}>
                <Icon
                  name={pet.species == 'Cachorro' ? 'dog' : pet.species == 'Gato' ? 'cat' : pet.species == 'Ave' ? 'dove' : pet.species == 'Peixe' ? 'fish' : 'paw'}
                  type='font-awesome-5'
                  solid
                  color='#FFB780' size={30} />
                <Text style={styles.buttonText}>Perfil</Text>
              </RectButton>

              <RectButton style={styles.button}>
                <Icon
                  name='calendar'
                  type='font-awesome-5'
                  solid
                  color='#FFB780' size={30} />
                <Text style={styles.buttonText}>Calendário</Text>
              </RectButton>

            </View>

            <View style={styles.containerButton}>

              <RectButton style={styles.button} onPress={() => handlerNavigateMedicines(pet.id)}>
                <Icon
                  name='tablets'
                  type='font-awesome-5'
                  solid
                  color='#FFB780' size={30} />
                <Text style={styles.buttonText}>Medicamentos</Text>
              </RectButton>

              <RectButton style={styles.button} onPress={() => handlerNavigateVaccines(pet.id)}>
                <Icon
                  name='crutch'
                  type='font-awesome-5'
                  solid
                  color='#FFB780' size={30} />
                <Text style={styles.buttonText}>Vacinas</Text>
              </RectButton>

            </View>

            <View style={styles.containerButton}>

              <RectButton style={styles.button} onPress={() => handlerNavigateConsultations(pet.id)}>
                <Icon
                  name='briefcase-medical'
                  type='font-awesome-5'
                  solid
                  color='#FFB780' size={30} />
                <Text style={styles.buttonText}>Consultas</Text>
              </RectButton>

              <RectButton style={styles.button} onPress={() => handlerNavigateExams(pet.id)}>
                <Icon
                  name='file-medical'
                  type='font-awesome-5'
                  solid
                  color='#FFB780' size={30} />
                <Text style={styles.buttonText}>Exames</Text>
              </RectButton>

            </View>

            <View style={styles.containerButton}>

              <RectButton style={styles.button} onPress={() => handlerNavigatePetshops(pet.id)}>
                <Icon
                  name='shower'
                  type='font-awesome-5'
                  solid
                  color='#FFB780' size={30} />
                <Text style={styles.buttonText}>Banho & Tosa</Text>
              </RectButton>

              <RectButton style={styles.button} onPress={() => generateSharingCode(pet.id)}>
                <Icon
                  name='share-alt'
                  type='font-awesome-5'
                  solid
                  color='#FFB780' size={30} />
                <Text style={styles.buttonText}>Compartilhar</Text>
              </RectButton>

            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default PetList;