import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';

import { FormRegister, Label, FieldStyled, Button } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <Label>
        User Name
        <FieldStyled type="text" name="username"  />
      </Label>
      <Label>
        Email
        <FieldStyled type="text" name="email" />
      </Label>
      <Label>
        Password
        <FieldStyled type="text" name="password" />
      </Label>
      <Button>Sing up</Button>
    </FormRegister>
  );
};

export default RegisterForm;
