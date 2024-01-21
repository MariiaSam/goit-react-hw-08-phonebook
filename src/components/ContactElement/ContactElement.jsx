import { ContactElementBtn } from './ContactElement.styled';

export const ContactElement = ({ id, name, number, onDelete }) => {
  return (
    <li>
      {name}: {number}
      <ContactElementBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </ContactElementBtn>
    </li>
  );
};
