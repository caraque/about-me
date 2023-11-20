import React from "react";
import {ProfessionalLogo, ProfessionalName} from "../../molecules";
import {Flex} from "antd";
import Social from "../../molecules/Social/Social";

export default function Profile() {
  return (
    <Flex vertical>
      <Flex style={{height: '10%'}}>
        <ProfessionalLogo/>
      </Flex>
      <Flex style={{height: '50%'}}>
        <ProfessionalName/>
      </Flex>
      <Flex style={{height: '40%'}}>
        <Social/>
      </Flex>
    </Flex>
  )
}
