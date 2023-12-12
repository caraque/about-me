import React, {CSSProperties} from "react";
import {Text} from "../../atoms";
import './Subtitle.scss'

export default function Subtitle({children, style}: { children: string, style?: CSSProperties }) {
  return (
    <Text className="subtitle" style={style}>{children}</Text>
  )
}
