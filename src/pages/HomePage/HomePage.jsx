import React from 'react';
import Rating from '@mui/material/Rating';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '../../components/Button';
import './HomePage.scss';

const FAQS = [
  {
    question: 'What is Crenjo ?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat dicta velit provident accusantium? Commodi, ipsa optio iusto excepturi autem unde. Minima esse maxime obcaecati et eos, iusto est consequuntur!',
  },
  {
    question: 'What can my child learn from Crejo ?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat dicta velit provident accusantium? Commodi, ipsa optio iusto excepturi autem unde. Minima esse maxime obcaecati et eos, iusto est consequuntur!',
  },
  {
    question: 'Are sessions live or pre-recorded ?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat dicta velit provident accusantium? Commodi, ipsa optio iusto excepturi autem unde. Minima esse maxime obcaecati et eos, iusto est consequuntur!',
  },
  {
    question: 'What is the langauge instructoin on crejo ?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat dicta velit provident accusantium? Commodi, ipsa optio iusto excepturi autem unde. Minima esse maxime obcaecati et eos, iusto est consequuntur!',
  },
  {
    question: 'How can i purchase a course on crejo ?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat dicta velit provident accusantium? Commodi, ipsa optio iusto excepturi autem unde. Minima esse maxime obcaecati et eos, iusto est consequuntur!',
  },
  {
    question: 'What is Crenjo ?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat dicta velit provident accusantium? Commodi, ipsa optio iusto excepturi autem unde. Minima esse maxime obcaecati et eos, iusto est consequuntur!',
  },
];

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img className="hero-img" src="./images/hero.png" alt="" />
        <div className="hero-text">
          <h3 className="hero-text-heading">live online music classes</h3>
          <h2 className="hero-text-para">
            Bring out the <br />
            creative best in <br />
            your child
          </h2>
          <Button className="book-trial-btn">Book Free Trial</Button>
        </div>
      </div>
      <div className="why-section">
        <h2 className="why-heading">Why <span className="why-musify">musify?</span></h2>
        <ul className="why-list">
          <li className="why-list-item">
            <img src="./images/personalised-icon.png" alt="" />
            <p><strong>Personalised </strong>1:1<br />classes</p>
          </li>
          <li className="why-list-item">
            <img src="./images/recording-icon.png" alt="" />
            <p><strong>Recordings </strong>for every<br />class provided</p>
          </li>
          <li className="why-list-item">
            <img src="./images/feedback-icon.png" alt="" />
            <p><strong>Feedback </strong>sent to<br />parents on the <br />progress every week</p>
          </li>
          <li className="why-list-item">
            <img src="./images/certification-icon.png" alt="" />
            <p><strong>Certification </strong><br />provided to all<br />courses</p>
          </li>
          <li className="why-list-item">
            <img src="./images/calendar-icon.png" alt="" />
            <p><strong>Reschedule </strong>classes<br />as per your<br />convenience</p>
          </li>
        </ul>
      </div>
      <div className="courses-section">
        <h2 className="courses-heading">Our Courses</h2>
        <p className="courses-desc">Progressive course content with certification, organized course work, additional tutorial<br /> videos and class recordings.</p>
        <ul className="courses-list">
          <li className="courses-list-item">
            <img src="./images/guitar.png" alt="" />
            <h6 className="course-name">Guitar</h6>
            <Button className="book-btn">Book Trial</Button>
          </li>
          <li className="courses-list-item">
            <img src="./images/western-vocal.png" alt="" />
            <h6 className="course-name">Western Vocals</h6>
            <Button className="book-btn">Book Trial</Button>
          </li>
          <li className="courses-list-item">
            <img src="./images/eastern-vocal.png" alt="" />
            <h6 className="course-name">Eastern Vocals</h6>
            <Button className="book-btn">Book Trial</Button>
          </li>
        </ul>
      </div>
      <div className="reviews-section">
        <h2 className="reviews-heading">Parent's Voices</h2>
        <div className="reviews-list-container">
          <img className="bg-img" src="./images/reviews-list-bg.png" alt="" />
          <ul className="reviews-list">
            <li className="review-item">
              <img className="review-comma" src="./images/inverted-comma.png" alt="" />
              <p className="review-text">Well-rounded holistic development of your child through an integrated learning model. Well-rounded holistic development.</p>
              <Rating name="read-only" value={5} readOnly size="small" />
              <p className="reviewer-name">Hamir</p>
              <img className="reviewer-img" src="./images/reviewer.png" alt="" />
            </li>
            <li className="review-item">
              <img className="review-comma" src="./images/inverted-comma.png" alt="" />
              <p className="review-text">Well-rounded holistic development of your child through an integrated learning model. Well-rounded holistic development.</p>
              <Rating name="read-only" value={5} readOnly size="small" />
              <p className="reviewer-name">Sheetal</p>
              <img className="reviewer-img" src="./images/reviewer.png" alt="" />
            </li>
            <li className="review-item">
              <img className="review-comma" src="./images/inverted-comma.png" alt="" />
              <p className="review-text">Well-rounded holistic development of your child through an integrated learning model. Well-rounded holistic development.</p>
              <Rating name="read-only" value={5} readOnly size="small" />
              <p className="reviewer-name">Bandra</p>
              <img className="reviewer-img" src="./images/reviewer.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="faqs-section">
        <div className="faqs-container">
          {FAQS.map((faq) => (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>{faq.question}</p>
              </AccordionSummary>
              <AccordionDetails>
                <p>{faq.answer}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage
