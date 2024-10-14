import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const WsRegist: React.FC = () => {
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredPatients, setFilteredPatients] = useState<any[]>([]);
  const [allPatients, setAllPatients] = useState<any[]>([]); // State for all patients
  const [selectedPatient, setSelectedPatient] = useState<any | null>(null);

  // Example function for fetching all patients (replace with your data fetching logic)
  useEffect(() => {
    // Simulate fetching patients
    setAllPatients([
      { mrn: '123', name: 'John Doe', date: '2024-01-01' },
      { mrn: '456', name: 'Jane Smith', date: '2024-01-02' }
    ]);
  }, []);

  // Function to filter patients based on search query
  useEffect(() => {
    const results = allPatients.filter(patient =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.mrn.includes(searchQuery)
    );
    setFilteredPatients(results);
  }, [searchQuery, allPatients]);
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
  <div className="container">
    <div className="left-container">
      <button className="register-button">+ Registrasi</button>
      <div className="validation-indicator">
        {isValidated ? (
          <span className="valid">Sudah Validasi</span>
        ) : (
          <span className="invalid">Belum Validasi</span>
        )}
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search MRN or Patient Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>MRN</th>
            <th>Patient Name</th>
            <th>Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.mrn} onClick={() => setSelectedPatient(patient)}>
              <td>{patient.mrn}</td>
              <td>{patient.name}</td>
              <td>{patient.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="right-container">
    {selectedPatient ? (
    <p>Patient selected: {selectedPatient.name}</p>
  ) : (
    <p className="patient-message">Please pick a patient</p>
  )}
</div>
  </div>
</section>

    </main>
      </div>
    </>
  );
}

export default WsRegist;
