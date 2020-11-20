import React, { useRef, useEffect, useState, forwardRef } from 'react';

import { useField } from '@unform/core';

import DateTimePickerModal, {DateTimePickerProps} from "react-native-modal-datetime-picker";

import { Button, StyleSheet } from 'react-native';

import { Input } from './style';

import moment from 'moment';

interface Props extends Omit<DateTimePickerProps, 'onChange'> {
  // interface Props extends Picker {
  name: string;
  label: string;
  value: Date;
}

interface InputValueReference {
  value: Date;
}

const DataPicker: React.FC<Props> = ({
  name,
  label,
  value,
  ...rest
}) => {
  const pickerRef = useRef<any>(new Date(2020,11,10));
  const { fieldName, registerField, defaultValue = new Date(2020,11,10), error } = useField(name);

  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);


  const showDatepicker = () => {
    setShow(true);
    setMode('time');
  };

  const showDatePicker = () => {
    setShow(true);
  };

  const hideDatePicker = () => {
    setShow(false);
  };

  const handleDateConfirm = (date: Date) => {

    setSelectedValue(moment(date).format('HH:mm'));

    hideDatePicker();
  };

  useEffect(() => {
   
    registerField({
      name: fieldName,
      ref: pickerRef.current,
      getValue: ref => {
        return moment(date).format('HH:mm') || new Date(2020,11,10);
      },
      setValue: (_, value: Date) => {
        
        setSelectedValue(moment(value).format('HH:mm'));
      },
    });
  }, [fieldName, registerField]);
  
  return (
    <>
    
    <Input
                name="hour"
                value={selectedValue}
                placeholder="Horário"
                onFocus={showDatePicker} />

      {show && (
        <DateTimePickerModal
        ref={pickerRef}
        isVisible={show}
          testID="dateTimePicker"
          mode="time"
          value={selectedValue}
          is24Hour={true}
          onChange={setSelectedValue}   
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker} 
          locale="pt-BR"
          is24Hour={true}
          {...rest}>

        </DateTimePickerModal>
        
      )}
      
      { error && <Text>{error}</Text>}
    </>
  );
};


const styles = StyleSheet.create({
    picker: {
      height: 50, 
      width: '100%',
      color: '#aaaaaa',
      fontFamily: 'Poppins_400Regular',
      fontSize: 16
    }
});

export default DataPicker;