import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/webCam_status/disconnect">
            <Link href="/workspace/ws_regist"></Link>
              <a>Pemicam</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;