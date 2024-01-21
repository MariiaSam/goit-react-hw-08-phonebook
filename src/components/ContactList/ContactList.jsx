import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contactsOperations';
import {
  selectContacts,
  selectLoading,
  selectError,
} from '../../redux/contacts/contactsSelectors';
import { selectFilter } from '../../redux/filter/filterSelectors';

import { ContactElement } from 'components/ContactElement/ContactElement';
import { Loader } from 'components/Loader/Loader';

import { ContactWrap, ContactListBtn, Span } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const activeContacts = filterContacts();
  const isListEmpty = !activeContacts.length && !isLoading && !isError;

  const deleteContactList = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <Loader />}
      {isListEmpty && <p>No contact details</p>}
      {activeContacts.length > 0 && (
        <ContactWrap>
          {activeContacts.map(({ id, name, number }) => (
            <ContactElement key={id} id={id} name={name} number={number}>
              <Span>{name}:</Span>
              <Span>{number}</Span>
              <ContactListBtn
  type="button"
  onClick={() => deleteContactList(id)}
>
  Delete
</ContactListBtn>
            </ContactElement>
          ))}
        </ContactWrap>
      )}
    </>
  );
};
