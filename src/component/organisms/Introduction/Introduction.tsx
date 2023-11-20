import React from "react";
import {Flex} from "antd";
import './Introduction.scss'
import {MiniTitle, Paragraph, Subtitle} from "../../molecules";

const subtitleText = "Editor de Video, Motion Grpahics y Diseñador UX/UI."
const introResume = "Editor de Video, Motion Grpahics y Diseñador UX/UI."

export default function Introduction() {
  return (
    <Flex vertical className="introduction-container">
      <Flex><MiniTitle>- Introduction</MiniTitle></Flex>
      <Flex className="sub-title-container">
        <Subtitle>{subtitleText}</Subtitle>
      </Flex>
      <Flex className="intro-resume-container">
        <Paragraph>{introResume}</Paragraph>
      </Flex>
    </Flex>
  )
}
