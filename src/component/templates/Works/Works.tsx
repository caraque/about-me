import React from "react";
import './Works.scss'
import {Flex} from "antd";
import {MiniTitle, Subtitle} from "../../molecules";

export default function Works() {
  return (
    <Flex className="works-container">
      <Flex vertical style={{width: '50%', paddingTop: '4%'}}>
        <Flex>
          <MiniTitle>- Trabajos</MiniTitle>
        </Flex>
        <Flex style={{paddingTop: '10%'}}>
          <Subtitle style={{fontSize: 30}}>
            La creatividad es como una fuente interminable: cuanto más la aprovechas, más se desborda en tu mente con
            significado y originalidad.
          </Subtitle>
        </Flex>
      </Flex>
    </Flex>
  )
}
