import { useDispatch, useSelector } from 'react-redux';

import { logOut } from '../../redux/auth/authOperations';
import { selectUserName } from '../../redux/auth/authSelectors';

import { UserMenutBtn, UserMenuSpan } from './UserMenu.styled';

 const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <div>
      <p>Welcome, {userName}!!! </p>
      <UserMenuSpan>Use this app with pleasure </UserMenuSpan>
      <UserMenutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenutBtn>
    </div>
  );
};

export default UserMenu;