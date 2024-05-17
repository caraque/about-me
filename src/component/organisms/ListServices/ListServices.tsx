import React from "react";
import {ItemService} from "../../../interfaces/ItemService.interface";
import {ServiceCard} from "../../molecules";
import {Flex} from "antd";
import {ReactComponent as PlayImage} from '../../../images/play.svg';
import {ReactComponent as MotionBlurImage} from '../../../images/motion-blur.svg';
import {ReactComponent as DesktopImage} from '../../../images/desktop.svg';

const listServices: ItemService[] = [{
  id: 'backend-service',
  icon: <PlayImage/>,
  description: 'Servicios backend'
}, {
  id: 'web-app',
  icon: <MotionBlurImage/>,
  description: 'Aplicaciones web'
}, {
  id: 'mobile-app',
  icon: <DesktopImage/>,
  description: 'Aplicaciones móviles'
}]

export default function ListServices() {
  return (
    <Flex style={{width: '100%'}}>
      {listServices.map(service => (
        <ServiceCard key={service.id} icon={service.icon} description={service.description}/>
      ))}
    </Flex>
  )
}
