import React, { memo, useCallback } from 'react';
import axios from 'axios';
import { LOGIN_API_URL } from '@utils/apiUrl';
import { useForm } from 'react-hook-form';
import { LoginType } from 'types/accountTypes';
import { emailPlaceholder, pwPlaceholder } from '@components/common/inputs/placeholder';
import Input from '@components/common/inputs/Input';
import styled from '@emotion/styled';
import PrimaryButton from '@components/common/buttons/PrimaryButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupLogin } from '@utils/yupValidation';
import { mq } from '@utils/mediaquery';
import { MobileHeader } from '@components/header';
import { useNavigate } from 'react-router-dom';

const FormStyle = styled.form(() => ({
  width: '90%',
  margin: '2rem auto 0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  marginTop: '1.5rem',

  [mq('tablet')]: {
    width: '80%',
  },

  [mq('desktop')]: {
    width: '60%',
  },
}));

const ButtonGroupStyle = styled.div(() => ({
  width: '100%',
  marginTop: '2rem',
}));

function Login() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    setError,
    formState: { isValid, errors },
    setValue,
  } = useForm<LoginType>({
    resolver: yupResolver(yupLogin),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = useCallback(
    async (formData: LoginType) => {
      try {
        const { data, status } = await axios.post(LOGIN_API_URL, formData);

        if (status === 200 && data.data.admin) {
          sessionStorage.setItem('tokens', JSON.stringify(data.data));
          navigate('/');
        } else {
          setError('password', { message: '아이디 또는 비밀번호를 잘못 입력했습니다.' });
        }
      } catch (error: any) {
        if (error.response.status === 400) {
          setError('password', { message: '잠시 후에 다시 시도해주세요.' });
        } else {
          setError('password', { message: '아이디 또는 비밀번호를 잘못 입력했습니다.' });
        }
      }
    },
    [navigate, setError],
  );

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <MobileHeader />
      <Input control={control} name="email" type="email" placeholder={emailPlaceholder} />
      <Input
        control={control}
        name="password"
        type="password"
        placeholder={pwPlaceholder}
        errors={errors}
      />
      <ButtonGroupStyle>
        <PrimaryButton buttonName="로그인" buttonType="submit" active={isValid} />
      </ButtonGroupStyle>
    </FormStyle>
  );
}

export default memo(Login);
