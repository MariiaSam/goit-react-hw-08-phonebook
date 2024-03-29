import styled from 'styled-components';

export const FormRegister= styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 16px;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const FieldStyled = styled.input`
  padding: 10px;
  border: 1px solid #f28f2c;
  line-height: 1.11;
  letter-spacing: 0.72px;
  font-size: 20px;
  color: #736c65;
  font-weight: 600;

  border-radius: 10px;
  width: 400px;
`;



export const Button = styled.button`
  padding: 10px 15px;
  background-color: #eab886;
  color: white;

  border: none;
  border-radius: 10px;
  box-shadow: rgba(114, 29, 29, 0.24) 0px 3px 8px;
  cursor: pointer;

  font-size: 24px;

  transition: background-color 0.3s ease, color 0.3s ease;
  width: 280px;

  &:active {
    background-color: grey;
  }
`;