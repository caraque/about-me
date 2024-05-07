import React from "react";
import {Flex} from "antd";
import './Introduction.scss'
import {Greeting, IntroInfo, Profession, ProfessionalName} from "../../molecules";
import Social from "../../molecules/Social/Social";


export default function Introduction() {
  return (
    <Flex vertical className="introduction-container">
      <Flex className="greeting">
        <Greeting/>
      </Flex>
      <Flex className="full-name">
        <ProfessionalName/>
      </Flex>
      <Flex className="profession">
        <Profession/>
      </Flex>
      <Flex className="intro-resume-container">
        <Flex vertical style={{width: '90%'}}>
          <Flex>
            <IntroInfo/>
          </Flex>
          <Flex style={{paddingTop: '5%'}}>
            <Social/>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}


