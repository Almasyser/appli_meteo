import PropTypes from "prop-types";
import useArray from "../../hooks/useArray";
import SelectNebulositeImg from "../utils/SelectNebulositeImg";
import "./fivedays.css";
import { useEffect } from "react";
// import data from "./data.json";
function ModalFiveDays(props){
    const { myArray }= useArray();
  // const temperatureTable = myArray?.hourly?.temperature_2m;
  // const cloud_coverTable = myArray?.hourly?.coud_cover;
  // const precipitationTable = myArray?.hourly?.precipitation;
  const { toggleFiveDays, setToggleFiveDays} = props;
  const dayPart=[1,2,3,4,5,6,7];
  const hoursPart = [6,10,12,16,19,23];
  const partName = ["aube", "matinée", "midi", "aprés-midi", "soirée", "nuit"];
  console.log(myArray?.hourly?.temperature_2m);
  
  return(
    <>
    <div className="fiveDays-container">
      <ul className="side-ul">
        {partName.map((el)=>{
        return(

          <li className="side-li">{el}</li>
        )
        })}
      </ul>
      {myArray && dayPart.map((item)=>{
        return(
          <ul key={item}>{item}
            {hoursPart.map((el) => {
              if(myArray?.hourly?.cloud_cover[el*item]!=null && myArray?.hourly?.precipitation!=null){
                const {img} = SelectNebulositeImg(myArray?.hourly?.cloud_cover[el*item] && myArray?.hourly?.precipitation[el*item]);
                return(
                <div className="fiveDays-stamp">
                  <img src={img} alt="&&" />
                  <li key={el}>{myArray?.hourly?.temperature_2m[el*item]}°C</li> 
                </div>
                )
              }

            })}
          </ul>
        )
      })}
    <button type="button" onClick={()=> setToggleFiveDays(!toggleFiveDays)}></button>
    </div>
    </>
  )
}
ModalFiveDays.propTypes = {
  setToggleFiveDays: PropTypes.func,
  toggleFiveDays: PropTypes.bool
}
export default ModalFiveDays;
  