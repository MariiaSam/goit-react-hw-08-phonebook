import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';

import { Login, Label, FieldStyled, Button } from './LoginForm.styled'

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Login onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <FieldStyled type="email" name="email"  />
      </Label>
      <Label>
        Password
        <FieldStyled type="password" name="password" />
      </Label>
      <Button type="submit">LogIn</Button>
    </Login>
  );
};

export default LoginForm;
