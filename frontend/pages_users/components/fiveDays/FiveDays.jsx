import PropTypes from "prop-types";
import useArray from "../../hooks/useArray";
import SelectNebulositeImg from "../utils/SelectNebulositeImg";
import crossCancel from "../../assets/Cross-cancel.png";
import "./fivedays.css";
import { useEffect } from "react";
// import data from "./data.json";
function ModalFiveDays(props){
    const { myArray }= useArray();
  const { toggleFiveDays, setToggleFiveDays} = props;
  const dayPart=[1,2,3,4,5,6,7];
  const hoursPart = [6,10,12,16,19,23];
  const partName = ["aube", "matinée", "midi", "aprés-midi", "soirée", "nuit"];
  return(
    <>
    <div className={toggleFiveDays? "fiveDays-container show": "fiveDays-container hide"}>
      <ul className="side-ul">
        {partName.map((el)=>{
        return(
          <li className="side-li">{el}</li>
        )
        })}
      </ul>
      {myArray && dayPart.map((item)=>{
        return(
          <ul className="dayPart-ul" key={item}>{item}
            {hoursPart.map((el) => {
              if(myArray?.hourly?.cloud_cover[el*item]!=null && myArray?.hourly?.precipitation!=null){
                const {img} = SelectNebulositeImg(myArray?.hourly?.cloud_cover[el*item] && myArray?.hourly?.precipitation[el*item]);
                return(
                <div className="dayPart-stamp">
                  <img className="dayPart-img" src={img} alt="&&" />
                  <li className="dayPart-li">{myArray?.hourly?.cloud_cover[el*item]}%</li>
                  <li className="dayPart-li">{myArray?.hourly?.precipitation[el*item]}mm</li>
                  <li className="dayPart-li" key={el}>{myArray?.hourly?.temperature_2m[el*item]}°C</li> 
                </div>
                )
              }

            })}
          </ul>
        )
      })}
    <div className="button-box">
      <button type="button" onClick={()=> setToggleFiveDays(!toggleFiveDays)}>
        <img src={crossCancel} alt="X" />
      </button>
    </div>
    </div>
    </>
  )
}
ModalFiveDays.propTypes = {
  setToggleFiveDays: PropTypes.func,
  toggleFiveDays: PropTypes.bool
}
export default ModalFiveDays;
  