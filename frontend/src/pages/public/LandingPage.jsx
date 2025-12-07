import React from 'react';
import './LandingPage.css';
import Header from '../../components/layout/Header';
import MainText from './MainText';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />     
      <MainText />   
    </div>
  );
};

export default LandingPage;