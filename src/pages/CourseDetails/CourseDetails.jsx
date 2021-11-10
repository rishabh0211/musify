import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import './CourseDetails.scss';

const CourseDetails = () => {
  const { id } = useParams();
  return (
    <div className="course-details-page">
      <div className="course-details-container">
        <div className="page-title">
          <h2 className="page-heading">Guitar Beginner</h2>
          <p className="page-desc">Course designed to help students gain a fundamental understanding of the theoretical and practical aspects of the guitar. All classes are personalized 1:1 coaching.</p>
        </div>
        <div className="separator" />
        <div className="about-course-section">
          <h3 className="about-heading">About the course</h3>
          <ul className="about-list">
            <li className="about-list-item">
              <p className="about-list-item-key">12 weeks</p>
              <p className="about-list-item-value">total duration</p>
            </li>
            <li className="about-list-item">
              <p className="about-list-item-key">1 class</p>
              <p className="about-list-item-value">per week</p>
            </li>
            <li className="about-list-item">
              <p className="about-list-item-key">60 mins </p>
              <p className="about-list-item-value">per class</p>
            </li>
            <li className="about-list-item">
              <p className="about-list-item-key">1:1</p>
              <p className="about-list-item-value">coaching</p>
            </li>
            <li className="about-list-item">
              <p className="about-list-item-key">Laptop</p>
              <p className="about-list-item-value">needed</p>
            </li>
            <li className="about-list-item">
              <p className="about-list-item-key">Rs. 7999</p>
              <p className="about-list-item-value strike">9999</p>
            </li>
          </ul>
        </div>
        <div className="curriculum-info-cards-container">
          <div className="curriculum-container">
            <h3 className="curriculum-heading">Curriculum</h3>
            <ul className="curriculum-list">
              <li className="curriculum-list-item">
                <p>Introduction to Music</p>
                <p>2 classes</p>
              </li>
              <li className="curriculum-list-item">
                <p>Open chords</p>
                <p>3 classes</p>
              </li>
              <li className="curriculum-list-item">
                <p>Major Scales</p>
                <p>3 classes</p>
              </li>
              <li className="curriculum-list-item">
                <p>Minor Scales</p>
                <p>2 classes</p>
              </li>
              <li className="curriculum-list-item">
                <p>Blues</p>
                <p>1 class</p>
              </li>
              <li className="curriculum-list-item">
                <p>Wrap up and demo</p>
                <p>1 class</p>
              </li>
            </ul>
          </div>
          <div className="info-cards-container">
            <div className="book-trial-card">
              <div className="left-section">
                <h2 className="left-section-heading">
                  Book free trial
                </h2>
                <p className="left-section-desc">
                  Take a free trial class to evaluate and choose the right course
                </p>
              </div>
              <Link className="card-cta" to="/book-trial">
                <Button variant="outlined">Book Trial</Button>
              </Link>
            </div>
            <div className="buy-course-card">
              <div className="left-section">
                <h2 className="left-section-heading">Buy course</h2>
                <div className="left-section-desc">Start the learning journey immediately</div>
              </div>
              <Link className="card-cta" to="buy-course">
                <Button className="view-details-btn" variant="contained">Buy Course</Button>
              </Link>
            </div>
            <div className="other-cards">
              <div className="easy-refund-card">
                <h3 className="card-heading">Easy refunds</h3>
                <p className="card-desc">for unused classes</p>
              </div>
              <div className="reschedule-card">
                <h3 className="card-heading">Reschedule classes</h3>
                <p className="card-desc">to suit your convenience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails
