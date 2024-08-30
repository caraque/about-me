import React from "react";
import {Button, Flex} from "antd";
import './Footer.scss'
import {SubTittle} from "../../atoms";

export default function Footer() {
  return (
    <Flex className="footer-container">
      <Flex style={{width: '100%'}}>
        <Flex vertical style={{width: '100%'}} className="footer-child">
          <Flex>
            <SubTittle style={{color: "white", paddingBottom: 10}}>
              IT projects from 2015
            </SubTittle>
          </Flex>
          <Flex>
            <Button className="project-button">My projects</Button>
          </Flex>
        </Flex>
        <Flex className="footer-child">
          <Flex vertical style={{width:'80%', textAlign:'center'}}>
            <Flex style={{width: '100%'}}>
              <Flex style={{width: '80%'}}>Frontend Developments</Flex>
              <Flex style={{width: '20%', flexDirection: 'column'}}>6</Flex>
            </Flex>
            <Flex style={{width: '100%'}}>
              <Flex style={{width: '80%'}}>Mobile Apps</Flex>
              <Flex style={{width: '20%', flexDirection: 'column'}}>4</Flex>
            </Flex>
            <Flex style={{width: '100%'}}>
              <Flex style={{width: '80%'}}>Backend Developments</Flex>
              <Flex style={{width: '20%', flexDirection: 'column'}}>12</Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
