import React, { useRef, useEffect, useState } from 'react';

import { useField } from '@unform/core';

import { Picker } from '@react-native-community/picker';

interface Props extends Omit<Picker, 'onValueChange'> {
  // interface Props extends Picker {
  name: string;
  label: string;
  value: string;
  options: []; // correto array ?
}

const SelectPicker: React.FC<Props> = ({
  name,
  label,
  value,
  options,
  ...rest
}) => {
  const pickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [selectedValue, setSelectedValue] = useState(defaultValue || null);
  // const [selectedValue, setSelectedValue] = useState('java');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: pickerRef.current,
      path: 'props.state.value',
      clearValue: (ref: any) => {
        ref.clear();
        //  return ref.state.value.value;
      },
    });
  }, [fieldName, registerField]);
  return (
    <Picker
      ref={pickerRef}
      style={{ height: 50, width: 150 }}
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      {...rest}
    >
      {options.map(opt => {
        console.log(options);
        return (
          <Picker.Item key={opt.label} label={opt.label} value={opt.value} />
        );
      })}
    </Picker>
  );
};
export default SelectPicker;