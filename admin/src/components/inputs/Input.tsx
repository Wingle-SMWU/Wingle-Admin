import { Control, Controller, FieldErrors } from 'react-hook-form';
import React from 'react';
import { LoginType } from 'types/accountTypes';
import styled from '@emotion/styled';

interface InputProps {
  control: Control<LoginType>;
  name: 'email' | 'password';
  type: string;
  placeholder: string;
  errors?: FieldErrors<LoginType> | undefined;
}

const InputWrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

const InputContainer = styled.div(({ theme }) => ({
  width: '100%',
  padding: '0.8rem',
  border: `1px solid ${theme.color.gray300}`,
  borderRadius: '0.5rem',
  '& input': {
    padding: '0.8rem',
  },
}));

const ErrorMessage = styled.div(({ theme }) => ({
  color: theme.color.red500,
  fontSize: '1.2rem',
  textAlign: 'left',
  paddingTop: '1rem',
}));

function Input({ control, name, type, placeholder, errors }: InputProps) {
  return (
    <InputWrapper>
      <InputContainer>
        <Controller
          control={control}
          name={name}
          render={({ field }) => <input type={type} {...field} placeholder={placeholder} />}
        />
      </InputContainer>
      <ErrorMessage>{errors?.password && <p>{errors.password.message}</p>}</ErrorMessage>
    </InputWrapper>
  );
}

export default Input;
