import React from "react";
import LinkedInLogo from '../../../images/linkedin.svg'
import BehanceLogo from '../../../images/behance.svg'
import {Flex} from "antd";

export default function Social() {
  return (
    <Flex>
      <Flex style={{paddingRight: 20}}><img alt="Linkedin" src={LinkedInLogo} width={30}/></Flex>
      <Flex><img alt="Behance" src={BehanceLogo} width={30}/></Flex>
    </Flex>
  )
}
