import PropTypes from "prop-types";
import HandleColumn from "../utils/handleColumn/HandleColumn";
import "./fivedays.css";



// import data from "./data.json";
function ModalFiveDays(props){
  const { toggleFiveDays, setToggleFiveDays} = props;
  const dayPart=[1,2,3,4,5];
  return(
    <div className="fiveDays-container">
      {dayPart && dayPart.map((item)=>{
        return(
          <div key={item} className="fiveDays-column">
            <HandleColumn item={item} />
          </div>
        )
    })}
      <h3>FiveDays</h3>
      <button type="button" onClick={()=> setToggleFiveDays(!toggleFiveDays)}>Five Days</button>
    </div>
  )
}
ModalFiveDays.propTypes = {
  setToggleFiveDays: PropTypes.func,
  toggleFiveDays: PropTypes.bool
}
export default ModalFiveDays;
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