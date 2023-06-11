import {
  emailPlaceholder,
  pwPlaceholder,
  validEmailPlaceholder,
  validPwPlaceholder,
} from '@components/inputs/placeholder';
import * as Yup from 'yup';

const EMAIL_REGEX = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;
const PASSWORD_REGEX = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

export const yupLogin = Yup.object().shape({
  email: Yup.string().required(emailPlaceholder).matches(EMAIL_REGEX, validEmailPlaceholder),

  user_pw: Yup.string().required(pwPlaceholder).matches(PASSWORD_REGEX, validPwPlaceholder),
});
