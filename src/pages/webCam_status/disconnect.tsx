// pages/WebcamStatus.tsx
import React from 'react';
import Head from 'next/head';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const WebcamStatus: React.FC = () => {
  return (
    <>
      <Head>
        <title>Webcam Status</title>
      </Head>
      <div className="container">
        <Sidebar />
        <main className="main-content">
          <Header />
           <section className="content">
           <div className="webcam-status">
             <img src="/assets/disconnected.png" alt="Disconnected" />
             <p>Your Web Cam Is <span className="status-text">Not Connected</span></p>
           </div>
         </section>
        </main>
      </div>
    </>
  );
}

export default WebcamStatus;
