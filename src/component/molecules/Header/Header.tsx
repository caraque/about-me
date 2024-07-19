import React from "react";
import {Flex} from "antd";
import {Text, UnderLine} from "../../atoms";
import './Header.scss'

export default function Header() {
  return (
    <Flex vertical className="header">
      <Flex>
        <Text className="name-logo">Christian A</Text>
        <Text className="dot-name-logo">.</Text>
      </Flex>
      <Flex className="underline-container">
        <UnderLine className="underline"/>
      </Flex>

    </Flex>
  )
}
