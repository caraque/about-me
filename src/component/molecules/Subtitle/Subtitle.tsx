import React from "react";
import {Text} from "../../atoms";
import './Subtitle.scss'

export default function Subtitle({children}: { children: string }) {
  return (
    <Text className="subtitle">{children}</Text>
  )
}
