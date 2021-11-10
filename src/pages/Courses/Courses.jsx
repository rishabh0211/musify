import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import './Courses.scss';

const Courses = () => {
  return (
    <div className="courses-page">
      <div className="courses-inner-container">
        <div className="page-title">
          <h2 className="page-heading">Courses</h2>
          <p className="page-desc">Progressive course content with certification, organized course work, additional tutorial videos and class recordings.</p>
        </div>
        <div className="separator" />
        <div className="courses-section-container">
          <div className="course-section">
            <h3 className="course-section-heading">
              Beginner Courses
          </h3>
            <ul className="courses-list">
              <li className="course-list-item guitar">
                <img className="course-img" src="./images/guitar.png" alt="" />
                <div className="desc-container">
                  <div className="desc-container-header">
                    <h4 className="desc-container-heading">Guitar</h4>
                    <p className="course-level">Beginner</p>
                  </div>
                  <p className="course-desc">
                    Course designed to help students gain a fundamental understanding of the theoretical and practical aspects of the guitar. All classes are personalized 1:1 coaching
                </p>
                  <div className="price-cta-container">
                    <p className="price">Course starting at <strong>Rs. 7999</strong> <span className="strike">Rs. 9999</span> </p>
                    <div className="cta-container">
                      <Link to="course/id">
                        <Button className="view-details-btn" variant="outlined">View Details</Button>
                      </Link>
                      <Link to="/book-trial">
                        <Button variant="contained">Book Free Trial</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="course-list-item w-vocals">
                <img className="course-img" src="./images/western-vocal.png" alt="" />
                <div className="desc-container">
                  <div className="desc-container-header">
                    <h4 className="desc-container-heading">Western Vocals</h4>
                    <p className="course-level">Beginner</p>
                  </div>
                  <p className="course-desc">
                    Course designed to help students get the most out of the course content with precise notes practice and demonstration. All classes are personalized 1:1 coaching.
                </p>
                  <div className="price-cta-container">
                    <p className="price">Course starting at <strong>Rs. 7999</strong> <span className="strike">Rs. 9999</span> </p>
                    <div className="cta-container">
                      <Link to="course/id">
                        <Button className="view-details-btn" variant="outlined">View Details</Button>
                      </Link>
                      <Link to="/book-trial">
                        <Button variant="contained">Book Free Trial</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="course-list-item e-vocals">
                <img className="course-img" src="./images/eastern-vocal.png" alt="" />
                <div className="desc-container">
                  <div className="desc-container-header">
                    <h4 className="desc-container-heading">Eastern Vocals</h4>
                    <p className="course-level">Beginner</p>
                  </div>
                  <p className="course-desc">
                    Course designed to help students get the most out of the course content with precise notes practice and demonstration. All classes are personalized 1:1 coaching.
                </p>
                  <div className="price-cta-container">
                    <p className="price">Course starting at <strong>Rs. 7999</strong> <span className="strike">Rs. 9999</span> </p>
                    <div className="cta-container">
                      <Link to="course/id">
                        <Button className="view-details-btn" variant="outlined">View Details</Button>
                      </Link>
                      <Link to="/book-trial">
                        <Button variant="contained">Book Free Trial</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="course-section">
            <h3 className="course-section-heading">
              Intermediate Courses
          </h3>
            <ul className="courses-list">
              <li className="course-list-item guitar">
                <img className="course-img" src="./images/guitar.png" alt="" />
                <div className="desc-container">
                  <div className="desc-container-header">
                    <h4 className="desc-container-heading">Guitar</h4>
                    <p className="course-level">Intermediate</p>
                  </div>
                  <p className="course-desc">
                    Course designed to help students gain a fundamental understanding of the theoretical and practical aspects of the guitar. All classes are personalized 1:1 coaching
                </p>
                  <div className="price-cta-container">
                    <p className="price">Course starting at <strong>Rs. 7999</strong> <span className="strike">Rs. 9999</span> </p>
                    <div className="cta-container">
                      <Link to="course/id">
                        <Button className="view-details-btn" variant="outlined">View Details</Button>
                      </Link>
                      <Link to="/book-trial">
                        <Button variant="contained">Book Free Trial</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="course-list-item w-vocals">
                <img className="course-img" src="./images/western-vocal.png" alt="" />
                <div className="desc-container">
                  <div className="desc-container-header">
                    <h4 className="desc-container-heading">Western Vocals</h4>
                    <p className="course-level">Intermediate</p>
                  </div>
                  <p className="course-desc">
                    Course designed to help students get the most out of the course content with precise notes practice and demonstration. All classes are personalized 1:1 coaching.
                </p>
                  <div className="price-cta-container">
                    <p className="price">Course starting at <strong>Rs. 7999</strong> <span className="strike">Rs. 9999</span> </p>
                    <div className="cta-container">
                      <Link to="course/id">
                        <Button className="view-details-btn" variant="outlined">View Details</Button>
                      </Link>
                      <Link to="/book-trial">
                        <Button variant="contained">Book Free Trial</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="course-list-item e-vocals">
                <img className="course-img" src="./images/eastern-vocal.png" alt="" />
                <div className="desc-container">
                  <div className="desc-container-header">
                    <h4 className="desc-container-heading">Eastern Vocals</h4>
                    <p className="course-level">Intermediate</p>
                  </div>
                  <p className="course-desc">
                    Course designed to help students get the most out of the course content with precise notes practice and demonstration. All classes are personalized 1:1 coaching.
                </p>
                  <div className="price-cta-container">
                    <p className="price">Course starting at <strong>Rs. 7999</strong> <span className="strike">Rs. 9999</span> </p>
                    <div className="cta-container">
                      <Link to="course/id">
                        <Button className="view-details-btn" variant="outlined">View Details</Button>
                      </Link>
                      <Link to="/book-trial">
                        <Button variant="contained">Book Free Trial</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
