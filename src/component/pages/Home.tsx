import React from 'react';
import {Me, Services, Works, Jobs} from "../templates/";
import './Home.scss'

function Home() {
  return (
    <div>
      <Me/>
      <Jobs/>
      <Services/>
      <Works/>
    </div>
  );
}

export default Home;
