import React from "react";
import {TechLogo} from "../index";
import {Flex} from "antd";
import {JobTechDetailProps} from "../../../interfaces/JobTechDetail.interface";

export default function JobTechDetail({techs}: { techs: JobTechDetailProps[] }) {
  return (
    <Flex>
      {techs.map(tech => (
        <Flex key={tech.id}>
          <TechLogo src={tech.imageSrc} alt={tech.description} style={{height: 70}}/>
        </Flex>
      ))}
    </Flex>
  )
}
