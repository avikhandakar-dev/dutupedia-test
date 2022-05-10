import React from 'react';
import AppoinmentHeader from '../../../Components/multiple_dashboard/Appointment/AppoinmentHeader';
import Nofile from '../../../Components/multiple_dashboard/Appointment/Nofile';
import OfflineTime from '../../../Components/multiple_dashboard/Appointment/OfflineTime';
import OnlineSearch from '../../../Components/multiple_dashboard/Appointment/OnlineSearch';
import RequestCard from '../../../Components/multiple_dashboard/Appointment/RequestCard';

function index() {
    return (
        <>
            <AppoinmentHeader />
            <Nofile />
            <OfflineTime />
            <OnlineSearch />
            <RequestCard />
        </>
    );
}

export default index;
