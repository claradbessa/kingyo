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
import DataPicker from '../../../components/DataPicker';
import HourPicker from '../../../components/HourPicker';
import InputTextArea from '../../../components/InputTextArea';

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

const Medicines: React.FC = (props) => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const { navigate } = useNavigation();
  const { signIn, user } = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          date: Yup.date().required('Data é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        const pet_id = props.route.params.petId;

        if (user.type == 2) {
          const profissional_id = user.id
          data.profissional = profissional_id
        }

        data.pet_id = pet_id;

        await api.post('/medicines/create', data).then(response => {
          Alert.alert(
            'Cadastrado com Sucesso',
            'Sua vacina foi cadastrada com sucesso, acesse no calendário',
          );
        });

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err);

          formRef.current?.setErrors(error);
          return;
        }

        Alert.alert(
          'Não foi possível cadastrar',
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

          <PageHeader title='Medicamentos'></PageHeader>

          <Container>

            <Form onSubmit={handleSignIn} ref={formRef}>

              <Input
                name="name"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <DataPicker
                name="date"
                placeholder="Data"
                
              />

              <HourPicker
                name="hour"
                placeholder="Horário"
                
              />

              <InputTextArea
                name="comments"
                placeholder="Observações"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Concluir Cadastro
              </Button>
            </Form>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Medicines;