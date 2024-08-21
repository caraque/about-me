import React from "react";
import './SubTittle.scss'

export function SubTittle({children}: { children: string }): JSX.Element {
  return (
    <div className="sub-tittle">{children}</div>
  )
}
