import React from "react";
import {Flex} from "antd";
import {Subtitle} from "../index";
import './ProfessionalName.scss'

const fullName = 'Christian Araque'
export default function ProfessionalName() {
  return (
    <Flex vertical style={{justifyContent: 'center'}}>
      <Subtitle style={styles}>{`I'm ${fullName}`}</Subtitle>
    </Flex>
  )
}

const styles = {
  fontSize: 80
}
