import { useState } from "react";
import SelectNebulositeImg from "../SelectNebulositeImg/SelectNebulositeImg";
import useArray from "../../../hooks/useArray";
import "./handlecolumn.css";
function HandleColumn({item}){
  const { myArray }= useArray();
  const hoursPart = [6,10,12,16,19,24];
  const temperatureArray = myArray.hourly.temperature_2m;
  const cloud_coverArray = myArray.hourly.cloud_cover;
  const precipitationArray = myArray.hourly.precipitation;
  const [ nebulositeImg, setNebulositeImg ]=useState();
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
                setNebulositeImg={setNebulositeImg}
                /> 
              <img className="maquette-img" src={nebulositeImg} alt="#" />
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