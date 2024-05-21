import React from "react";
import {TechLogo} from "../index";
import {Flex} from "antd";
import {JobTechDetailProps} from "../../../interfaces/JobTechDetail.interface";

export default function JobTechDetail({techs}: { techs: JobTechDetailProps[] }) {
  return (
    <Flex wrap="wrap">
      {
        techs.map(tech => (

          <Flex key={tech.id} style={{
            textAlign: 'center', padding: '15px 0', alignContent: 'center', minWidth: '25%',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <TechLogo src={tech.imageSrc} alt={tech.description} style={{height: tech.height || 70}}/>
          </Flex>
        ))

      }
    </Flex>
  )
}
