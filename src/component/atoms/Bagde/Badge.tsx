import React from "react";
import {Flex} from "antd";
import {Text} from "../Text/Text";
import './Badge.scss'

export function Badge({children, size = 22}: { children: string, size?: number }) {
  return (
    <Flex className="badge-container">
      <Text className="badge-text" style={{fontSize: size}}>{children}</Text>
    </Flex>
  )
}
