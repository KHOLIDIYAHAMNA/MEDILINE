import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Patient Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/pasien/callpatient">
              <a>Patient</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;