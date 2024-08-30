import React, {CSSProperties} from "react";
import './SubTittle.scss'

export function SubTittle({children, style}: { children: string, style?: CSSProperties }): React.JSX.Element {
  return (
    <div className="sub-tittle" style={style}>{children}</div>
  )
}
