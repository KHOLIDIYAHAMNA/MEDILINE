// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="status">
        <img src="/assets/diconnect.png" alt="" /> Disconnected
      </div>
      <div className="user-info">
        <span>Halo Dzikri</span>
        <img src="/assets/gg_profile.png" alt="" />
      </div>
    </header>
  );
}

export default Header;
