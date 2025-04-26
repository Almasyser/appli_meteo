import { useEffect, useState } from "react";
import PropTypes from "prop-types";
//
import azur from "./assets/Soleil.png";
import voile_leger from "./assets/01_Partiel_degage.png";
import voile from "./assets/02_voile.png";
import nuageux from ".//assets/03_Nuageux.png";
import tres_nuageux from "./assets/05_Tres_nuageux.png";
import couvert from "./assets/07_Couvert.png";
import bouche from "./assets/09_nuages_lourds.png";
import orageux from "./assets/11_Orageux.png";
//
import brume from "./assets/10_Brume.png";
import pluie_fine from "./assets/21_Pluie_fine.png";
import drache from "./assets/23_Pluie.png";
import averse from "./assets/25_Averse.png";
import deluge from "./assets/27_Deluge.png";
import grele from "./assets/29_Grele.png";
function SelectNebulositeImg(props){
  const {cloud_cover, precipitation, setNebulositeImg} = props;
  const nebulositeArray = [
    {id: 0, img: azur, text:"Ciel dégagé"},
    {id: 1, img: voile_leger, text:"Nuages rares"},
    {id: 2, img: voile, text:"ciel voilé"},
    {id: 3, img: nuageux, text:"ciel nuageux, éclaircies"},
    {id: 4, img: tres_nuageux, text:"ciel nuageux"},
    {id: 5, img: couvert, text:"ciel couvert"},
    {id: 6, img: bouche, text:"ciel bouché"},
    {id: 7, img: orageux, text:"ciel orageux"},
    //
    {id: 8, img: brume, text:"temps brumeux"},
    {id: 9, img: pluie_fine, text:"Pluies fines éparses"},
    {id: 10, img: drache, text:"Fortes pluies"},
    {id: 11, img: averse, text:"Averses"},
    {id: 12, img: deluge, text:"Déluge"},
    {id: 13, img: grele, text:"Grèle"}
  ];

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
    setNebulositeImg(nebulositeArray[idCiel].img);
    // setNebulositeText(nebulositeArray[idCiel].text);
  },[]);
       
SelectNebulositeImg.propTypes = {
  cloud_cover: PropTypes.number,
  precipitation: PropTypes.number,
  setPluieImg: PropTypes.any,
  setNebulositeText: PropTypes.any,
}
}
export default SelectNebulositeImg;