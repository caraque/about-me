import React from "react";
import './Tittle.scss'

export function Tittle({children}: { children: string }) {
  return (
    <div className="tittle">{children}</div>
  )
}
