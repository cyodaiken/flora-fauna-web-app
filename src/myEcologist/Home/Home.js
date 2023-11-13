import React from 'react';
import './Home.css';
import HowItWorks from './HowItWorks/HowItWorks';
import KeepRecord from './KeepRecord/KeepRecord';
import BeAnEcologiist from './BeAnEcologist/BeAnEcologist';
import DontMissOut from './DontMissOut/DontMissOut';

const Home = () => (
  <div className="Home">
    <HowItWorks />
    <KeepRecord />
    <BeAnEcologiist />
    <DontMissOut />
  </div>
);


export default Home;
