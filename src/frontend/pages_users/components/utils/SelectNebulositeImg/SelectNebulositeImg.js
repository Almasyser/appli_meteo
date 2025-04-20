import { useEffect } from "react";
import PropTypes from "prop-types";
//
import brume from "./assets/10_Brume.png";
import pluie_fine from "./assets/21_Pluie_fine.png";
import pluie from "./assets/23_Pluie.png";
import averse from "./assets/25_Averse.png";
import deluge from "./assets/27_Deluge.png";
import orageImg from "./assets/29_Grele.png";
//
import azurImg from "./assets/Soleil.png";
import voile_legerImg from "./assets/01_Partiel_degage.png";
import voileImg from "./assets/02_voile.png";
import nuageuxImg from ".//assets/03_Nuageux.png";
import tres_nuageuxImg from "./assets/05_Tres_nuageux.png";
import couvertImg from "./assets/07_Couvert.png";
import orageuxImg from "./assets/11_Orageux.png";
function SelectNebulositeImg(props){
  const {cloud_cover, precipitation, setNebulositeImg, setNebulositeText} = props;
  // console.log("=> ",cloud_cover,typeof(cloud_cover));
  // console.log("=> ",precipitation,typeof(precipitation));
  
  // console.log(" -- ",cloud_cover,typeof(cloud_cover)," pluie ",precipitation,typeof(precipitation));
  useEffect(() =>{
    const nebulositeArray = [
      {jour: azurImg, text:"Ciel dégagé"},
      {jour: voile_legerImg, text:"Nuages rares"},
      {jour: voileImg, text:"ciel voilé"},
      {jour: nuageuxImg, text:"ciel nuageux, éclaircies"},
      {jour: tres_nuageuxImg, text:"ciel couvert"},
      {jour: couvertImg, text:"ciel couvert"},
      {jour: orageuxImg, text:"ciel bouché"},
      {jour: orageImg, text:"Nuages lourds"}
    ];
    const seuilsArray = [
      0,
      16,
      32,
      52,
      64,
      80,
      96,
      100,
      110
    ];
    const hauteurPluieArray = [
      {bas: 0, haut: 1, text:"temps brumeux", pluieImg: brume},
      {bas: 1, haut: 2, text:"Pluies fines éparses", pluieImg: pluie_fine},
      {bas: 2, haut: 10, text:"Fortes pluies", pluieImg: pluie},
      {bas: 30, haut: 60, text:"Averses", pluieImg: averse},
      {bas: 60, haut: 100, text:"Déluge", pluieImg: deluge}
    ]
    if(precipitation > 0){
      const result = hauteurPluieArray.filter((el) => precipitation>el.bas && precipitation<el.haut);
      // console.log("INDEX ",result[0]);
      setNebulositeImg(result[0].pluieImg);
      setNebulositeText(result[0].text);
    }

    if (parseInt(cloud_cover) === 0 && parseInt(precipitation) === 0){
      setNebulositeImg(nebulositeArray[0].jour);
      setNebulositeText(nebulositeArray[0].text);
      // console.log("1er seuil");
    } 
     else if(cloud_cover !== 0 && precipitation === 0){
      const index = seuilsArray.findIndex(
        (el,index) => cloud_cover > el && cloud_cover <= el + seuilsArray[index+1]
      );
      // console.log("2eme seuil",index);
    if(index !== -1){
      setNebulositeImg(nebulositeArray[index].jour )
      setNebulositeText(nebulositeArray[index].text);
      // console.log("3eme seuil",index);
    }
    else {
      setNebulositeImg(nebulositeArray[null]);
      // console.log("seuil out");
    }
  }  
 
  },[cloud_cover, precipitation, setNebulositeImg, setNebulositeText]); // ajouter 'useHour' pour MaJ auto
}
SelectNebulositeImg.propTypes = {
  cloud_cover: PropTypes.number,
  precipitation: PropTypes.number,
  setPluieImg: PropTypes.any,
  setNebulositeText: PropTypes.any,
}
export default SelectNebulositeImg;