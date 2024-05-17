import React from "react";
import {Flex} from "antd";
import {JobLogo} from "../index";
import './JobCompanies.scss';
import {JobCompaniesProps} from "../../../interfaces/JobCompany.interface";


export default function JobCompanies({jobsCompanies}: { jobsCompanies: JobCompaniesProps[] }) {
  return (
    <Flex>
      {
        jobsCompanies.map(company => (
          <Flex className="job-company" key={company.description}>
            <JobLogo src={company.imageSrc} alt={company.description} height={company.height}/>
          </Flex>
        ))
      }
    </Flex>
  )
}
