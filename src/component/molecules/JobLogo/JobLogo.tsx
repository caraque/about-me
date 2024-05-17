import React from "react";

interface JobLogoProps {
  alt: string,
  style?: React.CSSProperties;
  height?: number;
  src: string,
}

export default function JobLogo(props: JobLogoProps) {
  return (
    <img src={props.src} alt={props.alt} style={props.style} height={props.height}/>
  )
}
