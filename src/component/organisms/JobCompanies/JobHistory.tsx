import React from "react";
import {JobDetails} from "../../molecules";
import {Flex} from "antd";
import JobCompanies from "../../molecules/JobCompanies/JobCompanies";
import WalmartChileLogo from "../../../images/walmartchile_logo.jpg";
import ImageMakerLogo from "../../../images/imagemaker_logo.svg";
import ITPeopleLogo from "../../../images/it_people_logotipo.svg";
import NTTDataLogo from "../../../images/ntt_data_logo.jpg";

const companies = [
  {
    description: 'Walmart',
    imageSrc: WalmartChileLogo,
    height: 140,
  },
  {
    description: 'ImageMaker',
    imageSrc: ImageMakerLogo,
  },
  {
    description: 'ITPeople',
    imageSrc: ITPeopleLogo,
  },
  {
    description: 'Everis',
    imageSrc: NTTDataLogo,
    height: 50,
  }
]
export default function JobHistory() {
  return (
    <Flex vertical>
      <Flex style={{width: '100%', justifyContent: 'center', flexDirection: 'row'}}>
        <JobCompanies jobsCompanies={companies} />
      </Flex>
      <div style={{height: 0.3, width: '15%', backgroundColor: 'gray', alignSelf: 'center', marginTop: '2%'}}/>
      <Flex style={{width: '100%', height: 350}}>
        <JobDetails/>
      </Flex>
    </Flex>
  )
}


