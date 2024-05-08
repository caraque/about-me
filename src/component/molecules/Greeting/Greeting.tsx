import React from "react";
import {Subtitle} from "../index";
import './Greeting.scss'

const greeting = 'Hello, World!';

export default function Greeting() {
  return (
    <Subtitle id="hola" style={styles}>{greeting}</Subtitle>
  )
}

const styles = {
  fontSize: 68
}
