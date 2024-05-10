import React from "react";
import {Flex} from "antd";
import './JobCompanyTabs.scss'
import WalmartChileLogo from '../../../images/walmartchile_logo.jpg'
import ITPeopleLogo from '../../../images/it_people_logotipo.svg'
import ImageMakerLogo from "../../../images/imagemaker_logo.svg";
import NTTDataLogo from "../../../images/ntt_data_logo.jpg";

export default function JobCompanyTabs(props: any) {
  return (
    <Flex style={{width: '100%', justifyContent: 'center', flexDirection: 'row'}}>
      <Flex className="job-company">
        <img src={WalmartChileLogo} alt="walmartchile" height={140}/>
      </Flex>
      <Flex className="job-company">
        <img alt="ImageMaker" src={ImageMakerLogo}/>
      </Flex>
      <Flex className="job-company">
        <img alt="Linkedin" src={ITPeopleLogo}/>
      </Flex>
      <Flex className="job-company">
        <img alt="NttData" src={NTTDataLogo} height={50}/>
      </Flex>
    </Flex>
  )
}
