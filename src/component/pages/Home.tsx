import React from 'react';
import {Me, Services, Works} from "../templates/";
import './Home.scss'

function Home() {
  return (
    <div className="principal">
        <Me />
        <Services />
        <Works />
    </div>
  );
}

export default Home;
