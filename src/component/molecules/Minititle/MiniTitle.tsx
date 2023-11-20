import React from "react";
import {Text} from "../../atoms";
import './MiniTitle.scss'

export default function MiniTitle({children}: { children: string }) {
  return (
    <Text className="mini-title">{children}</Text>
  )
}
