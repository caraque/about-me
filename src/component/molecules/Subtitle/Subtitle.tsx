import React, {CSSProperties} from "react";
import {Text} from "../../atoms";
import './Subtitle.scss'

export default function Subtitle({children, style, className, id}: {
  children: string,
  style?: CSSProperties,
  className?: string,
  id?: string
}) {
  return (
    <Text className={className || 'subtitle'} style={style}>{children}</Text>
  )
}
