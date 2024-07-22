import React from "react";
import './Tittle.scss'

export function Tittle({children}: { children: string }): JSX.Element {
  return (
    <div className="tittle">{children}</div>
  )
}
