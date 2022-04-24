import { useRouter } from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import SideNavBar from '../Components/navbar/sidebar';
import TopNavBar from '../Components/navbar/topbar';
import store from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  // console.log(route.pathname === '/dashboard_1' ? 'true' : 'false');
  const routeArray = route.pathname.split('/');
  return (
    <>
      <Provider store={store}>
        <TopNavBar />
        <SideNavBar />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
