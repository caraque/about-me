import React from "react";

interface TechLogoProps {
  alt: string,
  style?: React.CSSProperties;
  src: string,
}

export default function TechLogo(props: TechLogoProps) {
  return (
    <img src={props.src} alt={props.alt} style={props.style}/>
  )
}
