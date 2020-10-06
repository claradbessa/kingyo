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

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../contexts/auth';
import PageHeader from '../../components/PageHeader';

import api from '../../services/api';

import {
  Container, Div, Title
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const {navigate} = useNavigation();
  const { signIn } = useAuth(); 

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha é obrigatória'),
          name: Yup.string().required('Nome é obrigatório'),
          phone: Yup.string().required('Telefone é obrigatório'),
          street: Yup.string().required('Rua é obrigatório'),
          number: Yup.string().required('Número é obrigatório'),
          neighborhood: Yup.string().required('Bairro é obrigatório'),
          city: Yup.string().required('Cidade é obrigatória'),
          state: Yup.string().required('Estado é obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        console.log(data)

        await api.post('/tutors/register', data).then(response => {
          navigate('SuccessRegister');
        });

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err);

          formRef.current?.setErrors(error);
          return;
        }

        Alert.alert(
          'Não foi possível criar sua conta',
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

          <PageHeader title='Crie sua conta gratuíta'></PageHeader>

          <Container>


            <Form onSubmit={handleSignIn} ref={formRef}>
              <Title>Quem é você?</Title>

              <Input
                name="name"
                icon="mail"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                name="phone"
                icon="mail"
                placeholder="Telefone"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Title>Email e Senha</Title>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Title>Seu endereço</Title>

              <Input
                name="cep"
                icon="mail"
                placeholder="CEP"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Div>
                <Input
                  name="street"
                  icon="mail"
                  placeholder="Rua"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordInputRef.current?.focus();

                  }}
                  style={{ width: '64%' }}
                />

                <Input
                  name="number"
                  icon="mail"
                  placeholder="Nº"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordInputRef.current?.focus();
                  }}
                  style={{ width: '20%' }}
                />
              </Div>

              <Div>
                <Input
                  name="neighborhood"
                  icon="mail"
                  placeholder="Bairro"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordInputRef.current?.focus();
                  }}
                  style={{ width: '42%' }}
                />

                <Input
                  name="city"
                  icon="mail"
                  placeholder="Cidade"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordInputRef.current?.focus();
                  }}
                  style={{ width: '42%' }}
                />
              </Div>

              <Input
                name="state"
                icon="mail"
                placeholder="Estado"
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

export default SignIn;