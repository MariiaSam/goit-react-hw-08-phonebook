import { ContactElementBtn } from './ContactElement.styled';

export const ContactElement = ({ name, number, onDelete }) => {
  return (
    <li>
      {name}: {number}
      <ContactElementBtn type="button" onClick={onDelete}>
        Delete
      </ContactElementBtn>
    </li>
  );
};

