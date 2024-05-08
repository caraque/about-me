import React from "react";
import {Flex} from "antd";
import {JobCompanies} from "../../organisms";
import './Jobs.scss'

export default function Jobs() {
  return (
    <Flex vertical className="jobs">
      <JobCompanies/>
    </Flex>
  )
}
