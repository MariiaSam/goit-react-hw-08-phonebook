import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

 const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const  isLoggedIn  = useAuth();

  return isLoggedIn ? Component : <Navigate to={redirectTo} />
};


export default PrivateRoute