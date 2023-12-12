import React from "react";
import {ItemService} from "../../../interfaces/ItemService.interface";
import {ServiceCard} from "../../molecules";
import {Flex} from "antd";

const listServices: ItemService[] = [{
  icon: '',
  description: 'Editor de video.'
}, {
  icon: '',
  description: 'Motion Graphic.'
}, {
  icon: '',
  description: 'Diseño UX & UI.'
}]

export default function ListServices() {
  return (
    <Flex style={{width: '100%'}}>
      {listServices.map(service => (
        <ServiceCard icon={service.icon} description={service.description}/>
      ))}
    </Flex>
  )
}
