
import Head from "next/head";
import Image from "next/image";
import RequestAccepted from "../Components/medical_dashboard/add_patient/online/RequestAccepted";
import Addpatient from "../Components/medical_dashboard/add_patient/offline/Addpatient";
import Nopatient from "../Components/medical_dashboard/add_patient/offline/Nopatient";
import Registration from "../Components/medical_dashboard/add_patient/offline/Registration";
import AddPatientList from "../Components/medical_dashboard/add_patient/online/AddPatientList";
import Noonlinepatient from "../Components/medical_dashboard/add_patient/online/Noonlinepatient";
import Nofile from "../Components/multiple_dashboard/Appointment/Nofile";
import OfflineSearch from "../Components/multiple_dashboard/Appointment/OfflineSearch";
import OfflineTime from "../Components/multiple_dashboard/Appointment/OfflineTime";
import OnlineSearch from "../Components/multiple_dashboard/Appointment/OnlineSearch";
import OnlineTime from "../Components/multiple_dashboard/Appointment/OnlineTime";
import Accepted from "../Components/multiple_dashboard/Appointment/request/Accepted";
import AppoinmentEnd from "../Components/multiple_dashboard/Appointment/request/AppoinmentEnd";
import Canceled from "../Components/multiple_dashboard/Appointment/request/Canceled";
import CancelRequest from "../Components/multiple_dashboard/Appointment/request/CancelRequest";
import Datetime from "../Components/multiple_dashboard/Appointment/request/Datetime";
import SentCancel from "../Components/multiple_dashboard/Appointment/request/SentCancel";
import Addnotice from "../Components/multiple_dashboard/Notice/Addnotice";
import Notice from "../Components/multiple_dashboard/Notice/Notice";
import Noticeinfo from "../Components/multiple_dashboard/Notice/Noticeinfo";
import styles from "../styles/Home.module.css";
import RequestCanceled from "../Components/medical_dashboard/add_patient/online/RequestCanceled";
import RequestSent from "../Components/medical_dashboard/add_patient/online/RequestSent";
import WaitForAccept from "../Components/medical_dashboard/add_patient/online/WaitForAccept";
import AppoinmentHeader from "../Components/multiple_dashboard/Appointment/AppoinmentHeader";
import AdAccepted from "../Components/educational_dashboard/admission/AdAccepted";
import AdmissionAcpted from "../Components/educational_dashboard/admission/AdmissionAcpted";
import AdmissionCanceled from "../Components/educational_dashboard/admission/AdmissionCanceled";
import AdmitedSuccess from "../Components/educational_dashboard/admission/AdmitedSuccess";
import CancelPop from "../Components/educational_dashboard/admission/CancelPop";
import ClassSection from "../Components/educational_dashboard/admission/ClassSection";
import NoAdmission from "../Components/educational_dashboard/admission/NoAdmission";
import SetAdReqDoc from "../Components/educational_dashboard/admission/SetAdReqDoc";
import RequireDoc from "../Components/educational_dashboard/admission/RequireDoc";
import StdOfflineAccept from "../Components/educational_dashboard/admission/StdOfflineAccept";
import RegFileChose from "../Components/educational_dashboard/admission/RegFileChose";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen overflow-x-hidden">
        {/* <Addnotice></Addnotice>
      <Notice></Notice>
      <Noticeinfo></Noticeinfo>
     <Nofile></Nofile> */}
        {/* <OfflineSearch></OfflineSearch>
        <OnlineSearch></OnlineSearch>
        <OfflineTime></OfflineTime>
        <OnlineTime></OnlineTime>
        <Accepted></Accepted>
        <Canceled></Canceled>
        <AppoinmentEnd></AppoinmentEnd>
        <CancelRequest></CancelRequest>
        <Datetime></Datetime>
        <SentCancel></SentCancel>
        <Addpatient></Addpatient>
        <Nopatient></Nopatient>
        <Registration></Registration>
        <AddPatientList></AddPatientList>
        <Noonlinepatient></Noonlinepatient>
        <RequestAccepted></RequestAccepted>
        <RequestCanceled></RequestCanceled>
        <RequestSent></RequestSent>
        <WaitForAccept></WaitForAccept> */}

        {/* admission multiple */}
        <AdAccepted></AdAccepted>
        <AdmissionAcpted></AdmissionAcpted>
        <AdmissionCanceled></AdmissionCanceled>
        <AdmitedSuccess></AdmitedSuccess>
        <CancelPop></CancelPop>
        <ClassSection></ClassSection>
        <NoAdmission></NoAdmission>
        <SetAdReqDoc></SetAdReqDoc>
        <RequireDoc></RequireDoc>
        <StdOfflineAccept></StdOfflineAccept>
    

      
      </main>
    </div>
  );
}