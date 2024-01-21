import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRout';
import RestrictedRoute from './RestrictedRoute';

import { refreshUser } from '../redux/auth/authOperations'

const Home = lazy(() => import ("../pages/Home"))
const Register = lazy(() => import ("../pages/Register"))
const Login = lazy(() => import ("../pages/Login"))
const Contacts = lazy(() => import ("../pages/Contacts"))


export const App = () => {
const dispatch = useDispatch()
const { isRefreshing } = useAuth();


useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);

return (
  !isRefreshing && (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<Register />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  )
);
};