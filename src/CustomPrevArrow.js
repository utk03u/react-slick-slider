import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'
const CustomPrevArrow = ()=>{
    return (
      <button type="button" className="slick-prev" ><FontAwesomeIcon icon ={faArrowAltCircleLeft}/></button>
    );
  }
  export default CustomPrevArrow;