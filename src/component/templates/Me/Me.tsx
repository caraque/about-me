import React from "react";
import {NavBar} from "../../molecules";
import './Me.scss'
import {Flex} from "antd";
import {Introduction} from "../../organisms";
import ProfessionalImage from "../../molecules/ProfessionalImage/ProfessionalImage";

export default function Me() {
  return (
    <Flex vertical className="me-container">
      <Flex>
        <Flex style={{width: '30%'}}>
          CA
        </Flex>
        <Flex style={{width: '70%'}}>
          <NavBar/>
        </Flex>
      </Flex>
      <Flex style={{paddingTop: '3%'}}>
        <Flex vertical style={{width: '50%'}}>
          <Flex vertical className="introduction-section">
            <Introduction/>
          </Flex>
        </Flex>
        <Flex style={{width: '50%', alignSelf: 'center'}}>
          <Flex style={{width:'100%', placeContent: 'center'}}>
            <ProfessionalImage/>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
