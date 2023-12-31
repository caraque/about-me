import React from "react";
import './Services.scss'
import {Flex} from "antd";
import {MiniTitle, Subtitle} from "../../molecules";
import {ListServices} from "../../organisms";

export default function Services() {
  return (
    <Flex vertical className="services-container">
      <Flex style={{height: '30%', paddingTop: '4%'}}>
        <Flex style={{width: '50%'}}>
          <MiniTitle>- Servicios</MiniTitle>
        </Flex>
        <Flex style={{width: '50%'}}>
          <Subtitle style={{fontSize: 30}}>
            La creatividad es como una fuente interminable: cuanto más la aprovechas, más se desborda en tu mente con
            significado y originalidad.
          </Subtitle>
        </Flex>
      </Flex>
      <Flex style={{height: '70%'}}>
        <ListServices/>
      </Flex>
    </Flex>
  )
}
