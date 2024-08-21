import React from 'react';
import {Flex} from "antd";
import './Home.scss'
import {Presentation} from "../templates";
import {Footer, Header, MyPhoto, PersonalInfo} from "../molecules";

function Home() {
  return (
    <Flex vertical className="background">
      <Flex vertical className="presentation-flex-container">
        <Presentation
          header={<Header/>}
          rightSide={<MyPhoto containerStyle="photo-container"/>}
          leftSide={<PersonalInfo/>}
          footer={<Footer/>}
        />
      </Flex>
    </Flex>
  );
}

export default Home;
