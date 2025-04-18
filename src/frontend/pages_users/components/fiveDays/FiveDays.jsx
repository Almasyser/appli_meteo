import PropTypes from "prop-types";
import "./fivedays.css";

import data from "./data.json";
function ModalFiveDays(props){
  const { toggleFiveDays, setToggleFiveDays} = props;


  
  return(
    <>
      <div className="fiveDays-grid-container">
        <table>

          <tbody>
            {data.map((row, i) => (
            <tr key={i} className={(i==0)? "entete noHover":"entete"} htmlFor="head" >
              {Object.values(row).map((cell, j) => (
                <td key={j}>
                  {cell.img && <img src={cell.img} alt="" id="head"/>}
                  <span htmlFor="head" >{`${cell.text}${cell.unit}`}</span>
                </td>
              ))}
            </tr>
            ))}
          </tbody>
        </table>
      </div>
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