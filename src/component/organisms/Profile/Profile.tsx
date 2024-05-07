import React from "react";
import {ProfessionalLogo} from "../../molecules";
import {Flex} from "antd";

export default function Profile() {
  return (
    <Flex vertical>
      <Flex style={{height: '10%'}}>
        <ProfessionalLogo/>
      </Flex>
    </Flex>
  )
}
