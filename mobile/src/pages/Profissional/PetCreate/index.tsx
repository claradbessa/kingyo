import React, { useCallback, useRef } from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Select from '../../../components/Select';

import getValidationErrors from '../../../utils/getValidationErrors';

import { useAuth } from '../../../contexts/auth';
import PageHeader from '../../../components/PageHeaderMenu';

import api from '../../../services/api';

import {
  Container, Div, Title
} from './style';

interface SignInFormData {
  email: string;
  password: string;
}




const PetCreate: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const {navigate} = useNavigation();
  const { signIn, user } = useAuth(); 

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          code: Yup.string().required('Código é obrigatório')
        });

        await schema.validate(data, { abortEarly: false });

        data.user_id = user.id;

        console.log(data)

        await api.post('/professional/pet/add', data).then(response => {
          navigate('SucessPet');
        });

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err);

          formRef.current?.setErrors(error);
          return;
        }

        Alert.alert(
          'Não foi possível adicionar paciente',
          'Ocorreu um error, tente novamente mais tarde.',
        );
      }
    },
    [signIn],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>

        <ScrollView
          keyboardShouldPersistTaps="handled"
        >

          <PageHeader title='Adicionar pet'></PageHeader>

          <Container>

            <Form onSubmit={handleSignIn} ref={formRef}>

              <Input
                name="code"
                placeholder="Código"
              />


              <Button onPress={() => formRef.current?.submitForm()}>
                Adicionar Pet
              </Button>
            </Form>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default PetCreate;