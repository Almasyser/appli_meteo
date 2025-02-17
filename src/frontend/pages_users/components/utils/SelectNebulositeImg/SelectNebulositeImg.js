import { useEffect } from "react";
import PropTypes from "prop-types";
import degage from "./assets/00_Degage.png";
import partiel_degage from "./assets/01_Partiel_degage.png";
import partiel_couvert from "./assets/02_Partiel_couvert.png";
import nuageux from "./assets/03_Nuageux.png";
import tres_nuageux from "./assets/04_Tres_nuageux.png";
import couvert from "./assets/05_Couvert.png";
import orageux from "./assets/06_nuages_lourds.png";
import lune from "./assets/Lune.png";
import lune_legers from "./assets/01_Partiel_degage.png";
import lune_nuageux from "./assets/02_Nuit_Partiel_couvert.png";
import brume from "./assets/10_Brume.png";
import pluie_fine from "./assets/11_Pluie_fine.png";
import pluie from "./assets/12_Pluie.png";
import averse from "./assets/13_Averse.png";
import deluge from "./assets/14_Deluge.png";
import is_dayImg from "./assets/Is_day.png";
import is_nightImg from "./assets/Is_night.png";
function SelectNebulositeImg(props){
  const {cloud_cover, precipitation, setNebulositeImg, is_day, setIs_dayBackground} = props;
  console.log("is day ",is_day," -- ",cloud_cover," pluie ",precipitation);
  useEffect(() =>{
    // const is_dayArray=[ is_nightImg, is_dayImg ];
    const nebulositeArray = [
      {nuit: lune, jour: degage, text:"Ciel dégagé"},
      {nuit: lune_legers, jour: partiel_degage, text:"Nuages rares"},
      {nuit: lune_nuageux, jour: partiel_couvert, text:"ciel voilé"},
      {nuit: nuageux, jour: nuageux, text:"ciel nuageux, éclaircies"},
      {nuit: tres_nuageux, jour: tres_nuageux, text:"ciel couvert"},
      {nuit: couvert, jour: couvert, text:"ciel bouché"},
      {nuit: orageux, jour: orageux, text:"Nuages lourds"}
    ];
    const seuilsArray = [
      0,
      16,
      32,
      52,
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
    if (cloud_cover === 0 && precipitation === 0){
      setNebulositeImg(is_day===1? nebulositeArray[0].jour : nebulositeArray[0].nuit);

    } else if(cloud_cover !== 0 && precipitation !== 0){
    const index = seuilsArray.findIndex(
      (el) => cloud_cover > el && cloud_cover <= el + 16
    );
    if(index !== -1){
      setNebulositeImg(is_day===1? nebulositeArray[index].jour : nebulositeArray[index].nuit)
    }
    else {
      setNebulositeImg(nebulositeArray[null]);
    }
  }  
  if(precipitation > 0){
    const index = hauteurArray.findIndex(
      (el) => precipitation > el.bas && precipitation <= el.haut
    );
    if(index !== -1){
      setNebulositeImg(pluieArray[index]);
    }
    else {
      setNebulositeImg(pluieArray[null]);
    }
  }
  setIs_dayBackground(()=> is_day===0? is_nightImg:is_dayImg);
  },[cloud_cover, precipitation, setNebulositeImg, is_day, setIs_dayBackground]); // ajouter 'useHour' pour MaJ auto
}
SelectNebulositeImg.propTypes = {
  cloud_cover: PropTypes.any,
  precipitation: PropTypes.any,
  setPluieImg: PropTypes.any,
  setNebulositeText: PropTypes.any,
  is_day: PropTypes.any,
  setIs_dayBackground: PropTypes.any
}
export default SelectNebulositeImg;