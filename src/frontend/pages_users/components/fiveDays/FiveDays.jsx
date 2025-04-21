import PropTypes from "prop-types";
import "./fivedays.css";
import useArray from "../../hooks/useArray";
import SelectNebusiteImg from "../utils/SelectNebulositeImg/SelectNebulositeImg";
import { useState } from "react";
// import data from "./data.json";
function ModalFiveDays(props){
  const { toggleFiveDays, setToggleFiveDays} = props;
  const [ nebulositeImg, setNebulositeImg]=useState();
  const [ nebulositeText, setNebulositeText ]=useState();
  console.log(nebulositeText);
  
  const myArray = useArray();
  const hoursPart = [6,10,12,16,19,24];

  const temperatureArray = myArray.myArray.hourly.temperature_2m;
  const cloud_coverArray = myArray.myArray.hourly.cloud_cover;
  const precipitationArray = myArray.myArray.hourly.precipitation;
  
  console.log("___",temperatureArray);
  console.log("___",cloud_coverArray);
  console.log("___",precipitationArray);

  return(
    <>
    {hoursPart && hoursPart.map((el)=>{
      return(
        <ul key={el} className="maquette">
            <li>{
              <>
                <SelectNebusiteImg 
                  cloud_cover={myArray.myArray.hourly.cloud_cover[el]}
                  precipitation={myArray.myArray.hourly.precipitation[el]}
                  setNebulositeImg={setNebulositeImg}
                  setNebulositeText={setNebulositeText}
                  /> 
                <img src={nebulositeImg} alt="#" />

              </>
              }  
            </li>
        </ul>
      )
    })}
      {/* <div className="fiveDays-grid-container">
        <table>

          <tbody>
            {hoursPart && hoursPart.map((rowDay, i) => (
            <tr key={i} className={(i==0)? "entete noHover":"entete"} htmlFor="head" >
              {Object.values(rowDay).map((cell, j) => (
                <td key={j}>
                  {cell.img && <img src={cell.img} alt="" id="head"/>}
                  <span htmlFor="head" >{`${cell.text}${cell.unit}`}</span>
                </td>
              ))}
            </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      <h3>FiveDays</h3>
      <button type="button" onClick={()=> setToggleFiveDays(!toggleFiveDays)}>Five Days</button>
    </>
  )
}
ModalFiveDays.propTypes = {
  setToggleFiveDays: PropTypes.func,
  toggleFiveDays: PropTypes.bool
}
export default ModalFiveDays;