import React, { useCallback, useRef, useState } from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
import Select from '../../components/Select';
import Button from '../../components/Button';
import TextArea from '../../components/InputTextArea';

import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../contexts/auth';
import PageHeader from '../../components/PageHeader';

import api from '../../services/api';

import {
  Container, Div, Title
} from './styles';
import { CheckBox } from 'react-native-elements';
import { RectButton } from 'react-native-gesture-handler';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const { navigate } = useNavigation();
  const { signIn } = useAuth();
  const [isSelected, setSelection] = useState(false);

  function handleNavigateToTerms() {
    navigate('Term');
  }

  const options = [
    { label: 'PetShop', value: 'PetShop' },
    { label: 'Clínica Veterinária', value: 'Clínica Veterinária' },
    { label: 'Outros', value: 'Outros' },
  ];

  const states = [
    { label: 'Acre', value: 'Acre' },
    { label: 'Alagoas', value: 'Alagoas' },
    { label: 'Amapá', value: 'Amapá' },
    { label: 'Amazonas', value: 'Amazonas' },
    { label: 'Bahia', value: 'Bahia' },
    { label: 'Ceará', value: 'Ceará' },
    { label: 'Espírito Santo', value: 'Espírito Santo' },
    { label: 'Goiás', value: 'Goiás' },
    { label: 'Maranhão', value: 'Maranhão' },
    { label: 'Mato Grosso', value: 'Mato Grosso' },
    { label: 'Mato Grosso do Sul ', value: 'Mato Grosso do Sul ' },
    { label: 'Minas Gerais', value: 'Minas Gerais' },
    { label: 'Pará', value: 'Pará' },
    { label: 'Paraíba', value: 'Paraíba' },
    { label: 'Paraná', value: 'Paraná' },
    { label: 'Pernambuco', value: 'Pernambuco' },
    { label: 'Piauí', value: 'Piauí' },
    { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
    { label: 'Rio Grande do Norte', value: 'Rio Grande do Norte' },
    { label: 'Rio Grande do Sul ', value: 'Rio Grande do Sul ' },
    { label: 'Rondônia', value: 'Rondônia' },
    { label: 'Roraima', value: 'Roraima' },
    { label: 'Santa Catarina ', value: 'Santa Catarina ' },
    { label: 'São Paulo', value: 'São Paulo' },
    { label: 'Sergipe', value: 'Sergipe' },
    { label: 'Tocantins', value: 'Tocantins' },
    { label: 'Distrito Federal ', value: 'Distrito Federal ' }
  ];

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string()
            .required('Senha é obrigatória')
            .min(8, 'A senha é muito curta - deve ter no mínimo 8 caracteres.'),
          name: Yup.string().required('Nome da Empresa é obrigatório'),
          responsible: Yup.string().required('Nome é obrigatório'),
          phone: Yup.string().required('Telefone é obrigatório'),
          street: Yup.string().required('Rua é obrigatório'),
          number: Yup.string().required('Número é obrigatório'),
          neighborhood: Yup.string().required('Bairro é obrigatório'),
          city: Yup.string().required('Cidade é obrigatória'),
          state: Yup.string().required('Estado é obrigatório'),
          cnpj_cpf: Yup.string().required('CNPJ é obrigatório'),
          term: Yup.boolean()
            .oneOf([true], 'Must Accept Terms and Conditions'),
        });

        await schema.validate(data, { abortEarly: false });

        console.log(isSelected)


        await api.post('/professionals/register', data).then(response => {
          navigate('SuccessRegister');
        });

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err);

          formRef.current?.setErrors(error);
          return;
        }
        console.log(err)

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
                name="responsible"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                name="phone"
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
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                ref={passwordInputRef}
                name="password"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Title>Fale sobre sua empresa</Title>

              <Input
                name="name"
                placeholder="Nome da Empresa"
                returnKeyType="next"
              />

              <Input
                name="cnpj_cpf"
                placeholder="CNPJ"
                returnKeyType="next"
              />

              <Input
                name="crmv"
                placeholder="CRMV"
                returnKeyType="next"
              />

              <Select name="type" options={options} />

              <TextArea
                name="decription"
                placeholder="Resumo"
              />

              <Title>Seu endereço</Title>

              <Input
                name="cep"
                placeholder="CEP"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />


              <Input
                name="street"
                placeholder="Rua"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();

                }}

              />

              <Input
                name="number"
                placeholder="Nº"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}

              />

              <Input
                name="neighborhood"
                placeholder="Bairro"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}

              />

              <Input
                name="city"
                placeholder="Cidade"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}

              />

              <Select name="state" options={states} />

              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  status={isSelected ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setSelection(!isSelected);
                  }}
                  style={styles.checkbox}
                />

                <Text style={styles.label}>{isSelected ? "Li e Concordo com os termos de uso" : "Não Concordo com os termos de uso"}</Text>
              </View>

              <RectButton onPress={handleNavigateToTerms}>
                <Text style={styles.terms}>LER TERMOS DE USO</Text>
              </RectButton>

              {isSelected ?
                <Button onPress={() => formRef.current?.submitForm()} >
                  Concluir Cadastro
             </Button>
                : <Text></Text>}

             

            </Form>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",

  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 0,
    alignSelf: "center",
  },
  terms: {
    color: '#EE812E',
    marginBottom: 10,
    textAlign: 'center'
  }
});

export default SignIn;