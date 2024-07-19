import React from "react";
import {Flex} from "antd";
import PhotoImg from '../../../images/me.png'

export default function MyPhoto({containerStyle}: {containerStyle: string}) {
  return (
    <Flex className={containerStyle}>
      <img src={PhotoImg} alt="Me" width="100%" />
    </Flex>
  )
}
