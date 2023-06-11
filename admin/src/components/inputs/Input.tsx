import { Control, Controller } from 'react-hook-form';
import React from 'react';
import { LoginType } from 'types/userTypes';
import styled from '@emotion/styled';

interface InputProps {
  control: Control<LoginType>;
  name: 'email' | 'user_pw';
  type: string;
  placeholder: string;
}

const InputStyle = styled.div(({ theme }) => ({
  width: '100%',
  padding: '0.8rem',
  border: `1px solid ${theme.color.gray300}`,
  borderRadius: '0.5rem',
  '& input': {
    padding: '0.8rem',
  },
}));

function Input({ control, name, type, placeholder, ...rest }: InputProps) {
  return (
    <InputStyle>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <input type={type} {...field} placeholder={placeholder} />}
      />
    </InputStyle>
  );
}

export default Input;
