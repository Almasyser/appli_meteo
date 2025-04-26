import { useState } from "react";
import SelectNebulositeImg from "../SelectNebulositeImg/SelectNebulositeImg";
import useArray from "../../../hooks/useArray";
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
import "./handlecolumn.css";
function HandleColumn({item}){
  const { myArray }= useArray();
  const hoursPart = [6,10,12,16,19,24];
  const temperatureArray = myArray.hourly.temperature_2m;
  const cloud_coverArray = myArray.hourly.cloud_cover;
  const precipitationArray = myArray.hourly.precipitation;
  const [ nebulositeId, setNebulositeId ]=useState();
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
  console.log(cloud_coverArray);
  
    return(
      hoursPart && hoursPart.map((el)=>{
        return(
          <ul key={el} className="maquette">{el}
          <li>{
            <>{el*item}
              <SelectNebulositeImg 
                cloud_cover={cloud_coverArray[el*item]}
                precipitation={precipitationArray[el*item]}
                setNebulositeId={setNebulositeId}
                nebulositeId={nebulositeId}
                /> 
              <img className="maquette-img" src={nebulositeArray[nebulositeId].img} alt="#" />
              <p className="maquette-text">{temperatureArray[el*item]}°C</p>
            </>
            }  
          </li>
        </ul>
      )  
    })
  )
  }    
  export default HandleColumn;