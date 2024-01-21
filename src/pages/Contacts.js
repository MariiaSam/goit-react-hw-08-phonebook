import { Navigate } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';


const Contacts = ( ) => {
  const { isLoggedIn} = useAuth();

  return (
    <>
    {isLoggedIn ? (
      <>
        <ContactForm />
        <Filter />
        <ContactList />
      </>
    ) : (
      <Navigate to="/login" />
    )}
  </>
);
};

export default Contacts
