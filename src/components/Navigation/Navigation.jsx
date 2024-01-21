import { Link } from 'react-router-dom';

import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

import { NavMenu, NavList } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavMenu>
      <div>
        {isLoggedIn ? (
          <Link to={'/contacts'}>Contacts</Link>
        ) : (
          <Link to={'/'}>Home</Link>
        )}
      </div>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <NavList>
          <li>
            <Link to='/register'>Register </Link>
          </li>

          <li>
          <Link to='/login'>Login </Link>
          </li>
        </NavList>
      )}
    </NavMenu>
  );
};

export default Navigation;
