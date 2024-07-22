import React from 'react';
import {Flex} from "antd";
import './Home.scss'
import {Presentation} from "../templates";
import {Header, MyPhoto, PersonalInfo} from "../molecules";

function Home() {
  return (
    <Flex vertical className="background">
      <Flex vertical className="presentation-flex-container">
        <Presentation
          header={<Header/>}
          rightSide={<MyPhoto containerStyle="photo-container"/>}
          leftSideUp={<PersonalInfo />}
        />
      </Flex>
    </Flex>
  );
}

export default Home;
