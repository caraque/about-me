import React, {useState} from "react";
import {Text, UnderLine} from "../../atoms";
import './NavBar.scss'
import {Flex} from "antd";

const items = [{
  id: 'nav-opt-init',
  label: 'Inicio',
}, {
  id: 'nav-opt-services',
  label: 'Servicios',
}, {
  id: 'nav-opt-works',
  label: 'Trabajos',
}, {
  id: 'nav-opt-contact',
  label: 'Contacto',
},]
export default function NavBar() {
  const [itemSelected, setItemSelected] = useState(items[0].id)
  return (
    <Flex gap="middle" vertical className="nav-bar-container">
      <Flex>
        {items.map(item => (
          <div className={'nav-bar-item'} key={item.id} onClick={() => setItemSelected(item.id)}>
            <Text className={itemSelected === item.id ? 'selected-text' : 'unselected-text'}>{item.label}</Text>
            {itemSelected === item.id && <UnderLine/>}
          </div>
        ))}
      </Flex>
    </Flex>
  )
}
