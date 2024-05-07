import React from "react";
import {Flex} from "antd";
import {Paragraph} from "../index";

const introResume = "I'm passionate about tea, coffee, and learning. I enjoy traveling, trying new dishes, building new friendships, and cherishing existing ones."
export default function IntroInfo() {
  return (
    <Flex vertical style={styles}>
      <Paragraph>{introResume}</Paragraph>
    </Flex>
  )
}

const styles = {
  width: '60%',
  justifyContent: 'center'
}
