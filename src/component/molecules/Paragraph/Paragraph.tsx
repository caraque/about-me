import React from "react";
import {Flex} from "antd";
import {Text} from "../../atoms";

export default function Paragraph({children, size}: { children: string, size?: number }) {
  return (
    <Flex>
      <Text style={{fontSize: size}}>
        {children}
      </Text>
    </Flex>
  );
}
