import React, { useState, useRef } from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import PageHeader from '../../components/PageHeaderMenu';


import {
  Container
} from './style';

const PetCreate: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation();


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isHourPickerVisible, setHourPickerVisibility] = useState(false);
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showHourPicker = () => {
    setHourPickerVisibility(true);
  };

  const hideHourPicker = () => {
    setHourPickerVisibility(false);
  };

  const handleDateConfirm = (date: Date) => {
    setDate(date.toLocaleDateString("pt-br"));
    hideDatePicker();
  };

  const handleHourConfirm = (hour: Date) => {
    setHour(hour.toLocaleTimeString("pt-br").substr(0,5))
    hideHourPicker();
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>

        <ScrollView
          keyboardShouldPersistTaps="handled"
        >

          <PageHeader title='Adicionar Evento'></PageHeader>

          <Container>

            <Form onSubmit={() => { }} ref={formRef}>
            <Input
                name="place"
                placeholder="Local"
              />
              
              <Input
                name="type"
                placeholder="Tipo de Serviço"
              />

              <Input
                name="date"
                value={date}
                placeholder="Data"
                onFocus={showDatePicker} />

              <Input
                name="hourStart"
                value={hour}
                placeholder="Horário"
                onFocus={showHourPicker} />

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
                locale="pt-BR"
                minimumDate={new Date()}
              />

              <DateTimePickerModal
                isVisible={isHourPickerVisible}
                mode="time"
                onConfirm={handleHourConfirm}
                onCancel={hideHourPicker}
                locale="pt-BR"
                is24Hour={true}
              />

              <Button>
                Concluir Cadastro
              </Button>
            </Form>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default PetCreate;