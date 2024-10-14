// components/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="/assets/logo.png" alt="Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li>
            <img src="/assets/WP.png" alt="" />
            <a href="#workspace">Workspace</a>
          </li>
          <li className="active">
            <img src="/assets/Group 3.png" alt="" />
            <a href="#settings">Settings</a>
          </li>
        </ul>
      </nav>
      <footer className="footer">
        <p>PentaIndotekMandiri@copyright</p>
      </footer>
    </aside>
  );
}

export default Sidebar;
