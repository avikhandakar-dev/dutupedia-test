import { useRouter } from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  // console.log(route.pathname === '/dashboard_1' ? 'true' : 'false');
  const routeArray = route.pathname.split('/');
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
