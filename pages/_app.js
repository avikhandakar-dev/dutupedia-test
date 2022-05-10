import { useRouter } from 'next/router';
import React from 'react';
import { multipleDashboardData } from '../Components/navbar/NavigationData';
import SideNavBar from '../Components/navbar/sidebar';
import TopNavBar from '../Components/navbar/topbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const route = useRouter();
    const routeArray = route.pathname.split('/');

    return (
        <>
            {routeArray[1] === 'multiple_dashboard' ? (
                <>
                    <TopNavBar />
                    <SideNavBar data={multipleDashboardData} />
                </>
            ) : (
                ''
            )}

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
