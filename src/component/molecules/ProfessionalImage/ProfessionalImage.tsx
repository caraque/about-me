import React from "react";
import personalImage from '../../../images/person.png'
import './ProfessionalImage.scss'

export default function ProfessionalImage() {
  return (
    <img src={personalImage} id="professional-image" alt="me" style={{height: '600px', width: '500px', backgroundColor: 'red'}}/>
  )
}
