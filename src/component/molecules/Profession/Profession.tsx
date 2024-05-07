import React from "react";
import {Flex} from "antd";
import {Subtitle} from "../index";
import './Profession.scss'

const profession = "Full Stack Developer"
export default function Profession() {
  return (
    <Flex vertical style={{justifyContent: 'center'}}>
      <Subtitle style={styles}>{profession}</Subtitle>
    </Flex>
  )
}

const styles = {
  fontSize: 55
}
