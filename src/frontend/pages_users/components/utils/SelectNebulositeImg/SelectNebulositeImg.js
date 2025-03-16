import { useEffect } from "react";
import PropTypes from "prop-types";
//
import brume from "./Img/10_brume.png";
import pluie_fine from "./Img/11_pluie_fine.png";
import pluie from "./Img/12_forte_pluie.png";
import averse from "./Img/14_averse.png";
import deluge from "./Img/15_orage.png";
import orageImg from "./Img/07_orage.png";
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
  console.log(" -- ",cloud_cover,typeof(cloud_cover)," pluie ",precipitation,typeof(precipitation));
  useEffect(() =>{
    const nebulositeArray = [
      {nuit: azurImg, jour: azurImg, text:"Ciel dégagé"},
      {nuit: voile_legerImg, jour: voile_legerImg, text:"Nuages rares"},
      {nuit: voileImg, jour: voileImg, text:"ciel voilé"},
      {nuit: nuageuxImg, jour: nuageuxImg, text:"ciel nuageux, éclaircies"},
      {nuit: tres_nuageuxImg, jour: tres_nuageuxImg, text:"ciel couvert"},
      {nuit: couvertImg, jour: couvertImg, text:"ciel couvert"},
      {nuit: orageuxImg, jour: orageuxImg, text:"ciel bouché"},
      {nuit: orageImg, jour: orageImg, text:"Nuages lourds"}
    ];
    const seuilsArray = [
      0,
      16,
      32,
      52,
      64,
      80,
      96,
      100
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
      console.log("INDEX ",result[0]);
      setNebulositeImg(result[0].pluieImg);
      setNebulositeText(result[0].text);
    }

    if (parseInt(cloud_cover) === 0 && parseInt(precipitation) === 0){
      setNebulositeImg(nebulositeArray[0].jour);
      setNebulositeText(nebulositeArray[0].text);
      console.log("1er seuil");
    } 
     else if(cloud_cover !== 0 && precipitation === 0){
      const index = seuilsArray.findIndex(
        (el) => cloud_cover > el && cloud_cover <= el + 16
      );
      console.log("2eme seuil",index);
    if(index !== -1){
      setNebulositeImg(nebulositeArray[index].jour )
      setNebulositeText(nebulositeArray[index].text);
      console.log("3eme seuil",index);
    }
    else {
      setNebulositeImg(nebulositeArray[null]);
      console.log("seuil out");
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