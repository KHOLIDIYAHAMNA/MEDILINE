import React, { useState } from 'react';
import './global.css'; // Make sure to include any CSS you need

interface Patient {
  MRN: string;
  name: string;
  date: string;
  validated: boolean;
}

const App: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([
    { MRN: '901230102', name: 'Danny Pant...', date: '14/08 - 19:20', validated: false },
    // Add more patients as needed
  ]);

  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handlePatientClick = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="connected">
          <span>Connected</span>
        </div>
        <div className="user-greeting">
          <span>Halo Dzikri</span>
        </div>
      </header>
      <div className="main-content">
        <div className="sidebar">
          <button className="register-button">+ Registrasi</button>
          <div className="validation-legend">
            <div>
              <span className="dot green"></span>
              <span>Sudah Validasi</span>
            </div>
            <div>
              <span className="dot red"></span>
              <span>Belum Validasi</span>
            </div>
          </div>
          <input type="date" className="date-picker" />
          <input type="text" className="search-box" placeholder="Search MRN Or Patient Name ..." />
          <table className="patient-table">
            <thead>
              <tr>
                <th>MRN</th>
                <th>Patient Name</th>
                <th>Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index} onClick={() => handlePatientClick(patient)} className={patient.validated ? 'validated' : ''}>
                  <td>{patient.MRN}</td>
                  <td>{patient.name}</td>
                  <td>{patient.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="patient-details">
          {selectedPatient ? (
            <div>
              <h2>Patient Details</h2>
              <p>MRN: {selectedPatient.MRN}</p>
              <p>Name: {selectedPatient.name}</p>
              <p>Date: {selectedPatient.date}</p>
            </div>
          ) : (
            <p>Please Pick A Patient</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
