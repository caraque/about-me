import React from "react";
import {Flex} from "antd";
import {Badge, Text, Tittle} from "../../atoms";
import './PersonalInfo.scss'

export default function PersonalInfo() {
  return (
    <Flex vertical className="personal-container">
      <Flex>
        <Flex>
          <Tittle>Hi! I am</Tittle></Flex>
        <Flex>
          <Badge>
            Full Stack
          </Badge>
        </Flex>
      </Flex>
      <Flex>
        <Tittle>Christian Araque</Tittle>
      </Flex>

    </Flex>
  )
}
