import React, { useCallback, useRef } from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
  Text,
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
import Select from '../../../components/Select';

import getValidationErrors from '../../../utils/getValidationErrors';

import { useAuth } from '../../../contexts/auth';
import PageHeader from '../../../components/PageHeaderMenu';

import api from '../../../services/api';

import {
  Container, Div, Title
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const Medicines: React.FC = (props) => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const { navigate } = useNavigation();
  const { signIn, user } = useAuth();

  const day = [
    { label: '1', value: '01' },
    { label: '2', value: '02' },
    { label: '3', value: '03' },
    { label: '4', value: '04' },
    { label: '5', value: '05' },
    { label: '6', value: '06' },
    { label: '7', value: '07' },
    { label: '8', value: '08' },
    { label: '9', value: '09' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
    { label: '13', value: '13' },
    { label: '14', value: '14' },
    { label: '15', value: '15' },
    { label: '16', value: '16' },
    { label: '17', value: '17' },
    { label: '18', value: '18' },
    { label: '19', value: '19' },
    { label: '20', value: '20' },
    { label: '21', value: '21' },
    { label: '22', value: '22' },
    { label: '23', value: '23' },
    { label: '24', value: '24' },
    { label: '25', value: '25' },
    { label: '26', value: '26' },
    { label: '27', value: '27' },
    { label: '28', value: '28' },
    { label: '29', value: '29' },
    { label: '30', value: '30' },
    { label: '31', value: '31' },

  ];

  const month = [
    { label: 'Janeiro', value: '01' },
    { label: 'Fevereiro', value: '02' },
    { label: 'Março', value: '03' },
    { label: 'Abril', value: '04' },
    { label: 'Maio', value: '05' },
    { label: 'Junho', value: '06' },
    { label: 'Julho', value: '07' },
    { label: 'Agosto', value: '08' },
    { label: 'Setembro', value: '09' },
    { label: 'Outubro', value: '10' },
    { label: 'Novembro', value: '11' },
    { label: 'Dezembro', value: '12' },
  ];

  const year = [
    { label: '2015', value: '2015' },
    { label: '2016', value: '2016' },
    { label: '2017', value: '2017' },
    { label: '2018', value: '2018' },
    { label: '2019', value: '2019' },
    { label: '2020', value: '2020' },
    { label: '2021', value: '2021' },
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' },
  ];

  const hour = [
    { label: '00', value: '00' },
    { label: '01', value: '01' },
    { label: '02', value: '02' },
    { label: '03', value: '03' },
    { label: '04', value: '04' },
    { label: '05', value: '05' },
    { label: '06', value: '06' },
    { label: '07', value: '07' },
    { label: '08', value: '08' },
    { label: '09', value: '09' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
    { label: '13', value: '13' },
    { label: '14', value: '14' },
    { label: '15', value: '15' },
    { label: '16', value: '16' },
    { label: '17', value: '17' },
    { label: '18', value: '18' },
    { label: '19', value: '19' },
    { label: '20', value: '20' },
    { label: '21', value: '21' },
    { label: '22', value: '22' },
    { label: '23', value: '23' },
    { label: '24', value: '24' },
  ];

  const minute = [
    { label: '00', value: '00' },
    { label: '05', value: '05' },
    { label: '10', value: '10' },
    { label: '15', value: '15' },
    { label: '20', value: '20' },
    { label: '25', value: '25' },
    { label: '30', value: '30' },
    { label: '35', value: '35' },
    { label: '40', value: '40' },
    { label: '45', value: '45' },
    { label: '50', value: '50' },
    { label: '55', value: '55' },
  ];

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          day: Yup.string().required('Data é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        const pet_id = props.route.params.petId;

        if (user.type == 2) {
          const profissional_id = user.id
          data.profissional = profissional_id
        }

        data.pet_id = pet_id;

        await api.post('/exams/create', data).then(response => {
          Alert.alert(
            'Cadastrado com Sucesso',
            'Sua consulta foi cadastrada com sucesso, acesse no calendário',
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

          <PageHeader title='Exames'></PageHeader>

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

              {/* <DataPicker
                name="date"
                placeholder="Data"

              />

              <HourPicker
                name="hour"
                placeholder="Horário"

              /> */}

              <Text>Data</Text>

              <Select name="day" options={day} />
              <Select name="month" options={month} />
              <Select name="year" options={year} />

              <Text>Horário</Text>

              <Select name="hour" options={hour} />
              <Select name="minute" options={minute} />

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