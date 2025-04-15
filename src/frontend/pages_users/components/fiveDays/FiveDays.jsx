import PropTypes from "prop-types";
function ModalFiveDays(props){
  const { toggleFiveDays, setToggleFiveDays} = props;
  return(
    <div className="fiveDays-grid-container">

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