import React, { useRef, useEffect, useState } from 'react';

import { useField } from '@unform/core';

import { Picker } from '@react-native-community/picker';

import { Container, Text } from './styles';
import { StyleSheet } from 'react-native';

interface Props extends Omit<Picker, 'onValueChange'> {
  // interface Props extends Picker {
  name: string;
  label: string;
  value: string;
  options: []; // correto array ?
}

interface InputValueReference {
  value: string;
}

const SelectPicker: React.FC<Props> = ({
  name,
  label,
  value,
  options,
  ...rest
}) => {
  const pickerRef = useRef<any>(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: pickerRef.current,
      getValue: ref => {
        return ref.props.value || '';
      },
      clearValue: ref => {
        ref.props.onValueChange(ref.props.placeholder.value);
      },
      setValue: (_, value: string) => {
        setSelectedValue(value);
      },
    });
  }, [fieldName, registerField]);
  
  return (
    <>
      <Container isFocused={isFocused} isErrored={!!error}>
        <Picker
          ref={pickerRef}
          style={styles.picker}
          selectedValue={selectedValue}
          value={selectedValue}
          onValueChange={setSelectedValue}    
          {...rest}>
          
          {options.map(opt => {
            return (
              <Picker.Item key={opt.label} label={opt.label} value={opt.value} />
            );
          })}

        </Picker>
      </Container>
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

export default SelectPicker;