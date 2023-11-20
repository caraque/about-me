import React from "react";
import {Text} from "../../atoms";
import './Paragraph.scss'

export default function Paragraph({children}: { children: string }) {
  return (
    <Text className="paragraph">{children}</Text>
  )
}
