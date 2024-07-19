import React, {CSSProperties} from "react";

export function UnderLine({style, className}: { style?: CSSProperties, className?: string }) {
  return (
    <div style={style} className={className}/>
  )
}
