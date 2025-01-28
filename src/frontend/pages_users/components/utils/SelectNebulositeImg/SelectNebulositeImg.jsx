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
  const {cloud_cover_low, precipitation, setNebulositeText} = props;
  const [nebulositeImg, setNebulositeImg] = useState(null);
  console.log("props ",cloud_cover_low,"   ", precipitation);
  useEffect(() =>{
  const nebulositeArray = [
    {name: degage, text:"Ciel dégagé"},
    {name: partiel_degage, text:"Nuages rares"},
    {name: partiel_couvert, text:"ciel voilé"},
    {name: nuageux, text:"ciel nuageux"},
    {name: tres_nuageux, text:"ciel bouché"},
    {name: couvert, text:"ciel couvert"},
    {name: orageux, text:"Nuages d'orage"}
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
    {bas: 0, haut: 0.1, text:"temps brumeux"},
    {bas: 0.1, haut: 2, text:"Pluies fines éparses"},
    {bas: 2, haut: 10, text:"Fortes pluies"},
    {bas: 30, haut: 60, text:"Averses"},
    {bas: 60, haut: 100, text:"Déluge"}
  ]
  if(cloud_cover_low && precipitation === 0){
    const index = seuilsArray.findIndex(
      (el) => cloud_cover_low > el && cloud_cover_low <= el + 16
    );
    if(index !== -1){
      setNebulositeImg(nebulositeArray[index].name);
      setNebulositeText(nebulositeArray[index].text);
    }
    else {
      setNebulositeImg(nebulositeArray[null]);
      setNebulositeText(nebulositeArray[null]);
    }
  }  
  if(precipitation > 0){
    const index = hauteurArray.findIndex(
      (el) => precipitation > el.bas && precipitation <= el.haut
    );
    if(index !== -1){
      setNebulositeImg(pluieArray[index]);
      setNebulositeText(hauteurArray[index].text)
      console.log("--------", index,"- ",hauteurArray[index].bas,"   ",hauteurArray[index].haut);
    }
    else {
      setNebulositeImg(pluieArray[null]);
    }
  }
  },[cloud_cover_low, precipitation, setNebulositeImg, setNebulositeText]);
  return nebulositeImg ? (<img src={nebulositeImg} />):null;
}
SelectNebulositeImg.propTypes = {
  cloud_cover_low: PropTypes.any,
  precipitation: PropTypes.any,
  setPluieImg: PropTypes.any,
  setNebulositeText: PropTypes.any
}
export default SelectNebulositeImg;