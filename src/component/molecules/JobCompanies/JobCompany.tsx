import React from "react";
import {Flex} from "antd";
import {JobLogo} from "../index";
import './JobCompany.scss';
import {JobCompaniesProps} from "../../../interfaces/JobCompany.interface";


export default function JobCompany({description, imageSrc, height, isSelected}: JobCompaniesProps) {
  return (
    <Flex className={`job-company ${isSelected ? 'selected' :  ''}`} key={description}>
      <JobLogo src={imageSrc} alt={description} height={height}/>
    </Flex>
  )
}
