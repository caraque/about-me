import React from "react";
import './Underline.scss'

export function UnderLine({height, width}: { height?: number, width?: number }) {
  return (
    <div className="selector-line" style={{
      height: height || 1,
      width: width || 45
    }}/>
  )
}
