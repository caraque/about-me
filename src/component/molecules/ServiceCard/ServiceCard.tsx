import React from "react";
import {Flex} from "antd";
import {ItemService} from "../../../interfaces/ItemService.interface";
import {ServiceCardName} from "../index";

export default function ServiceCard(itemService: ItemService) {
  return (
    <Flex vertical style={{background: '#FFAF29', width: '100%', margin: 30}}>
      <Flex style={{height: '50%', width: '100%'}}>
        <div/>
      </Flex>
      <Flex style={{height: '50%', width: '100%', padding: 40}}>
        <Flex vertical style={{width: '30%', alignItems: 'center'}}>
          {itemService.icon}
        </Flex>
        <Flex vertical style={{width: '70%'}}>
          <ServiceCardName serviceName={itemService.description}/>
        </Flex>
      </Flex>
    </Flex>
  )
}
