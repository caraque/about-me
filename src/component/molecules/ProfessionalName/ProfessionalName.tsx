import React from "react";
import {Text, UnderLine} from "../../atoms";
import './ProfessionalName.scss'
import {Flex} from "antd";

const firstName = 'Wanderth'
const lastName = 'Morales'
export default function ProfessionalName() {
  return (
    <Flex vertical style={{justifyContent: 'center'}}>
      <Flex>
        <Text className="first-name">{firstName}</Text>
      </Flex>
      <Flex>
        <Text className="last-name">{lastName}</Text>
      </Flex>
      <Flex style={{paddingTop: 20}}>
        <UnderLine height={10} width={85}/>
      </Flex>
    </Flex>
  )
}
