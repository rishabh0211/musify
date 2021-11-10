import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './Header.scss';

const Header = () => (
  <header className="header">
    <h1>Musify</h1>
    <div className="right-section">
      <div className="nav-container">
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
        <Button className="book-trial-btn" variant="contained">Book Trial</Button>
        <img src="" alt="" />
      </div>
    </div>
  </header>
)

export default Header
