import React from 'react';
import {Me, Services} from "../templates/";
import './Home.scss'

function Home() {
  return (
    <div className="principal">
        <Me />
        <Services />
    </div>
  );
}

export default Home;
