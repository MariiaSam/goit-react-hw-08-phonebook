import { Link } from 'react-router-dom';

import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
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
        <ul>
          <li>
            <Link to='/register'>register </Link>
          </li>

          <li>
          <Link to='/login'>login </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
