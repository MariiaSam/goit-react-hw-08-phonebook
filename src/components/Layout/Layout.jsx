import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import  Navigation from 'components/Navigation/Navigation'
import { Loader } from 'components/Loader/Loader';


const Layout = () => {
    return (
      <>
      <header>
        <div>
            <Navigation/>
        </div>
      </header>
      <main>
        <div>
            <Suspense fallback={<Loader/>}>
            <Outlet/>
            </Suspense>
        </div>
      </main>
      
      </>
    );
  };

  export default Layout;