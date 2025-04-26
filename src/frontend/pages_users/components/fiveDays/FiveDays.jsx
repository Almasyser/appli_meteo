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
  