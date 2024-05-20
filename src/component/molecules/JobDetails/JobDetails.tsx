import React from "react";
import {Flex} from "antd";
import {JobInfoActivity, JobTechDetail} from "../index";
import {JobTechDetailProps} from "../../../interfaces/JobTechDetail.interface";

export default function JobDetails({techs, description}: { techs: JobTechDetailProps[], description: string }) {
  return (
    <Flex style={{width: '100%'}}>
      <Flex style={{width: '30%', alignItems: 'center'}}>
        <JobInfoActivity description={description}/>
      </Flex>
      <Flex style={{width: '70%', justifyContent: 'center', alignItems: 'center'}}>
        <JobTechDetail techs={techs} />
      </Flex>
    </Flex>
  )
}
