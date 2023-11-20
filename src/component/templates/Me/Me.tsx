import React from "react";
import {NavBar} from "../../molecules";
import './Me.scss'
import {Flex} from "antd";
import {Introduction, Profile} from "../../organisms";

export default function Me() {
  return (
    <Flex className="me-container">
      <Flex style={{width: '60%'}}>
        <Profile />
      </Flex>
      <Flex vertical style={{width: '40%'}}>
        <Flex vertical>
          <NavBar/>
        </Flex>
        <Flex vertical className="introduction-section">
          <Introduction />
        </Flex>
      </Flex>
    </Flex>
  )
}
