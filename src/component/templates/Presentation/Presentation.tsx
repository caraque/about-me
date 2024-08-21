import React, {ReactNode} from "react";
import {Flex} from "antd";

interface PresentationProps {
  header?: ReactNode,
  rightSide?: ReactNode,
  leftSide?: ReactNode,
  footer?: ReactNode,
}

export default function Presentation(props: PresentationProps) {
  return (
    <Flex vertical>
      <Flex>{
        props.header
      }</Flex>
      <Flex>
        <Flex vertical style={{width: '60%'}}>
          <Flex style={{height: '70%'}}>{props.leftSide}</Flex>
          <Flex style={{height: '30%'}}>{props.footer}</Flex>
        </Flex>
        <Flex style={{width: '40%'}}>{
          props.rightSide
        }</Flex>
      </Flex>
    </Flex>
  )
}
