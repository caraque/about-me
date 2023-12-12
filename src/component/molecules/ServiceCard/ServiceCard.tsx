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
        {itemService.icon}
        <ServiceCardName serviceName={itemService.description}/>
        {itemService.description}
      </Flex>
    </Flex>
  )
}
