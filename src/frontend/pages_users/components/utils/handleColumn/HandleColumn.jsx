import { useState } from "react";
import SelectNebulositeImg from "../SelectNebulositeImg/SelectNebulositeImg";
import useArray from "../../../hooks/useArray";
function HandleColumn({item}){
  const myArray = useArray();
  const hoursPart = [6,10,12,16,19,24];
  const temperatureArray = myArray.myArray.hourly.temperature_2m;
  const cloud_coverArray = myArray.myArray.hourly.cloud_cover;
  const precipitationArray = myArray.myArray.hourly.precipitation;
  const [ nebulositeImg, setNebulositeImg ]=useState();
  // const [ nebulositeText, setNebulositeText ]=useState();
    hoursPart && hoursPart.map((el)=>{
      return(
        <ul key={el} className="maquette">
          <li>{
            <>
              <SelectNebulositeImg 
                cloud_cover={cloud_coverArray[el*item]}
                precipitation={precipitationArray[el*item]}
                setNebulositeImg={setNebulositeImg}
                /> 
              <img src={nebulositeImg} alt="#" />
              <p>{temperatureArray[el*item]}</p>
            </>
            }  
          </li>
        </ul>
      )  
    })
  }    
  export default HandleColumn;