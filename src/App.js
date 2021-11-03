import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

const App = () => (
  <div className="app-container">
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  </div>
)

export default App
