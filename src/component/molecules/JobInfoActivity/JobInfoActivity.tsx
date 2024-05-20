import React from "react";
import Paragraph from "../Paragraph/Paragraph";

interface JobInfoActivityProps {
  description: string
}

export default function JobInfoActivity({description}: JobInfoActivityProps) {
  return (
    <Paragraph>
      {description}
    </Paragraph>
  )
}
