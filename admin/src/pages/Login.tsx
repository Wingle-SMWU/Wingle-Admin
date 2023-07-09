import React, { memo, useCallback, useEffect, useState } from 'react';
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
import { useAxios } from '@global-states/useAxios';
import { useTheme } from '@emotion/react';

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

const LoginStateBlock = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: 1,
});

const KeepLogin = styled.p(({ theme }) => ({
  fontSize: '1.4rem',
  color: theme.color.black,
  marginLeft: '1rem',
  cursor: 'pointer',
}));

const ButtonGroupStyle = styled.div(() => ({
  width: '100%',
  marginTop: '2rem',
}));

function Login() {
  const navigate = useNavigate();

  const axiosInstance = useAxios();

  const theme = useTheme();

  const [isAutoLoginState, setAutologinState] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { isValid, errors },
  } = useForm<LoginType>({
    resolver: yupResolver(yupLogin),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onClickLoginState = useCallback(() => setAutologinState((prev) => !prev), []);

  const onSubmit = useCallback(
    async (formData: LoginType) => {
      try {
        const { data, status } = await axiosInstance.post(LOGIN_API_URL, formData);

        if (status === 200 && data.data.admin) {
          localStorage.setItem('autoLogin', String(isAutoLoginState));
          if (isAutoLoginState) {
            localStorage.setItem('tokens', JSON.stringify(data.data));
            sessionStorage.removeItem('tokens');
          } else {
            sessionStorage.setItem('tokens', JSON.stringify(data.data));
            localStorage.removeItem('tokens');
          }

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
    [axiosInstance, isAutoLoginState, navigate, setError],
  );

  useEffect(() => setValue('autoLogin', isAutoLoginState), [isAutoLoginState, setValue]);

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
      <LoginStateBlock>
        <img
          width={18}
          height={18}
          alt="로그인 체크박스"
          onClick={onClickLoginState}
          src={isAutoLoginState ? theme.image.checkTrue.default : theme.image.checkFalse.default}
        />

        <KeepLogin onClick={onClickLoginState}>로그인 상태 유지</KeepLogin>
      </LoginStateBlock>
      <ButtonGroupStyle>
        <PrimaryButton buttonName="로그인" buttonType="submit" active={isValid} />
      </ButtonGroupStyle>
    </FormStyle>
  );
}

export default memo(Login);
