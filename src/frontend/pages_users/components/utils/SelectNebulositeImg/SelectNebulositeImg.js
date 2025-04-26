/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
//

function SelectNebulositeImg(props){
  const {cloud_cover, precipitation, setNebulositeId} = props;


  const [idCiel, setIdCiel] = useState(0);
  const intervals =[
    { min: 0, max: 16, id: 0},
    { min: 16, max: 32, id: 1},
    { min: 32, max: 52, id: 2},
    { min: 52, max: 64, id: 3},
    { min: 64, max: 80, id: 4},
    { min: 80, max: 96, id: 5},
    { min: 96, max: 100, id: 6}
  ]
  const hauteurPluie =[
    {min: 0,max: 1, id: 8},
    {min: 1,max: 2, id: 9},
    {min: 2,max: 10, id: 10},
    {min: 10,max: 30, id: 11},
    {min: 30,max: 60, id: 12},
    {min: 60,max: 100, id: 13}
  ]
  useEffect(()=>{
    if (precipitation !== 0){
      const matched = hauteurPluie.find(({min,max}) => precipitation>=min && precipitation<max);
      if (matched) {
        setIdCiel(matched.id);
      } else {
        setIdCiel(0);
      }
    } else {
      const matched = intervals.find(({min,max}) => cloud_cover>=min && cloud_cover<max);
      if (matched) {
        setIdCiel(matched.id);
      } else {
        setIdCiel(0);
      }
    }
    // setNebulositeText(nebulositeArray[idCiel].text);
  },[cloud_cover, precipitation]);
idCiel && setNebulositeId(idCiel);
     
SelectNebulositeImg.propTypes = {
  cloud_cover: PropTypes.number,
  precipitation: PropTypes.number,
  setPluieImg: PropTypes.any,
  setNebulositeText: PropTypes.any,
}
}
export default SelectNebulositeImg;