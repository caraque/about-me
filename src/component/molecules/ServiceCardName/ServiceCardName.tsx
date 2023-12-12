import React from "react";
import {Text} from "../../atoms";
import './ServiceCardName.scss'
import {Flex} from "antd";

export default function ServiceCardName({serviceName}: { serviceName: string }) {
  return (
    <Flex vertical style={{justifyContent: 'center'}}>
      <Flex>
        <Text className="service-name">{serviceName}</Text>
      </Flex>
    </Flex>
  )
}
