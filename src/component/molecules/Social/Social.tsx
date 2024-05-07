import React from "react";
import LinkedInLogo from '../../../images/linkedin.svg'
import BehanceLogo from '../../../images/behance.svg'
import {Flex} from "antd";

const linkedInUrl = 'https://www.linkedin.com/in/christian-araque/';
export default function Social() {
  return (
    <Flex>
      <Flex style={{paddingRight: 20, alignSelf: 'center'}}>
        <a href={linkedInUrl} target="_blank" rel="noreferrer" style={{fontStyle: 'unset'}}>
          <img alt="Linkedin" src={LinkedInLogo} width={30}/>
        </a>
      </Flex>
      {/*<Flex><img alt="Behance" src={BehanceLogo} width={30}/></Flex>*/}
    </Flex>
  )
}
