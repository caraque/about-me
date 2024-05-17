import React from "react";
import {Flex} from "antd";
import {JobHistory} from "../../organisms";
import './Jobs.scss'

export default function Jobs() {
  return (
    <Flex vertical className="jobs">
      <JobHistory/>
    </Flex>
  )
}
