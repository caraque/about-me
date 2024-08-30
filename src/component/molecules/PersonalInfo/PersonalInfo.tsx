import React from "react";
import {Flex} from "antd";
import {Badge, SubTittle, Text, Tittle} from "../../atoms";
import LinkedInIcon from '../../../images/linkedin.png'
import NttDataLogo from '../../../images/ntt_data_logo.jpg'
import ItPeopleLogo from '../../../images/it-people.png'
import ImageMakerLogo from '../../../images/imagemaker.png'
import WalmartLogo from '../../../images/walmart-chile.png'
import './PersonalInfo.scss'
import {Paragraph} from "../index";

const linkedInUrl = "https://www.linkedin.com/in/christian-araque/"

export default function PersonalInfo() {
  return (
    <Flex vertical className="personal-container">
      <Flex>
        <Flex>
          <Tittle>Hi! I am</Tittle>
        </Flex>
        <Flex>
          <Badge>
            Full Stack
          </Badge>
        </Flex>
      </Flex>
      <Flex>
        <Tittle>Christian Araque</Tittle>
      </Flex>
      <Flex className="intro-info">
        <Paragraph size={15}>
          Developing systems to help people for over 9 years
          as a web and mobile developer
        </Paragraph>
      </Flex>
      <Flex vertical style={{marginTop: 50}}>
        <Flex>
          <SubTittle>I worked in:</SubTittle>
        </Flex>
        <Flex style={{flexDirection: "column", marginTop: 30}}>
          <Flex>
            <Flex style={{alignItems: "center", width: '25%'}}>
              <img alt="NttData" src={NttDataLogo} height={70}/>
            </Flex>
            <Flex style={{alignItems: "center", width: '25%'}}>
              <img alt="ItPeople" src={ItPeopleLogo} height={30}/>
            </Flex>
            <Flex style={{alignItems: "center", width: '25%'}}>
              <img alt="Imagemaker" src={ImageMakerLogo} height={70}/>
            </Flex>
            <Flex style={{alignItems: "center", width: '25%'}}>
              <img alt="Walmart" src={WalmartLogo} height={70}/>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex style={{ marginTop: 40}}>
        <Flex style={{width: '50%'}}>
          <Flex vertical style={{width: '70%'}}>
            <Flex style={{width: '100%'}}>
              <SubTittle>+15</SubTittle>
            </Flex>
            <Flex style={{width: '100%'}}>
              <Paragraph size={15}>
                Worked and published projects with companies
              </Paragraph>
            </Flex>
          </Flex>
        </Flex>
        <Flex style={{width: '50%'}}>
          <Flex vertical style={{width: '70%'}}>
            <Flex style={{width: '100%'}}>
              <Flex>
                <SubTittle>Contact</SubTittle>
              </Flex>
            </Flex>
            <Flex style={{width: '100%'}}>
              <a href={linkedInUrl} target="_blank"><img alt="linkedin" src={LinkedInIcon} /></a>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
