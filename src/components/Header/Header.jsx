import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header className="header">
    <h1>Musify</h1>
    <div className="right-section">
      <ul className="links-list">
        <li className="links-list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="links-list-item">
          <Link to="/courses">Courses</Link>
        </li>
        <li className="links-list-item">
          <Link to="/myLearning">My Learning</Link>
        </li>
      </ul>
      <button>Book Trial</button>
      <img src="" alt="" />
    </div>
  </header>
)

export default Header
