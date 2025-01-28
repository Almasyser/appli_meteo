import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import degage from "./assets/00_Degage.png";
import partiel_degage from "./assets/01_Partiel_degage.png";
import partiel_couvert from "./assets/02_Partiel_couvert.png";
import nuageux from "./assets/03_Nuageux.png";
import tres_nuageux from "./assets/04_Tres_nuageux.png";
import couvert from "./assets/05_Couvert.png";
import orageux from "./assets/06_Orageux.png";
import brume from "./assets/10_Brume.png";
import pluie_fine from "./assets/11_Pluie_fine.png";
import pluie from "./assets/12_Pluie.png";
import averse from "./assets/13_Averse.png";
import deluge from "./assets/14_Deluge.png";

function SelectNebulositeImg(props){
  const {cloud_cover_low, precipitation} = props;
  const [nebulositeImg, setNebulositeImg] = useState(null);
  console.log(cloud_cover_low,"   ", precipitation);
  useEffect(() =>{
  const nebulositeArray = [
    degage,
    partiel_degage,
    partiel_couvert,
    nuageux,
    tres_nuageux,
    couvert,
    orageux
  ];
  const seuilsArray = [
    0,
    16,
    32,
    48,
    64,
    80,
    96
  ];
  const pluieArray = [
    brume,
    pluie_fine,
    pluie,
    averse,
    deluge
  ]
  const hauteurArray = [
    {bas: 0, haut: 0.5},
    {bas: 0.5, haut: 2},
    {bas: 2, haut: 10},
    {bas: 30, haut: 100}
  ]
  if(cloud_cover_low && precipitation === 0){
    const index = seuilsArray.findIndex(
      (el) => cloud_cover_low > el && cloud_cover_low <= el + 16
    );
    if(index !== -1){
      setNebulositeImg(nebulositeArray[index]);
    }
    else {
      setNebulositeImg(nebulositeArray[null]);
    }
    console.log("index",index);
    
  }  
  if(precipitation > 0){
    const index = hauteurArray.findIndex(
      (el) => precipitation > el.bas && cloud_cover_low <= el.haut
    );
    if(index !== -1){
      setNebulositeImg(pluieArray[index]);
    }
    else {
      setNebulositeImg(pluieArray[null]);
    }
    console.log(index);
  }
  },[cloud_cover_low, precipitation]);
  
  return nebulositeImg ? (<img src={nebulositeImg} alt="Ciel"></img>):null;
}
SelectNebulositeImg.propTypes = {
  cloud_cover_low: PropTypes.number,
  precipitation: PropTypes.any
}
export default SelectNebulositeImg;