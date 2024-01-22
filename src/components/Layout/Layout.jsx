import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import  Navigation from 'components/Navigation/Navigation'
import { Loader } from 'components/Loader/Loader';

import { Header, Wrap } from './Layout.styled';


const Layout = () => {
    return (
      <>
      <Header>
        <Wrap>
            <Navigation/>
        </Wrap>
      </Header>
      <main>
        <Wrap>
            <Suspense fallback={<Loader/>}>
            <Outlet/>
            </Suspense>
        </Wrap>
      </main>
      </>
    );
  };

  export default Layout;