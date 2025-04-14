import PropTypes from "prop-types";
import flecheBasImg from "../../assets/Fleche bas_128.png";
import "./footer.css";
function ModalFooter(props){
  const {setToggleFiveDays, toggleFiveDays} = props;
  return(
    <div className="footer-container" onClick={()=> setToggleFiveDays(!toggleFiveDays)}>
      <img src={flecheBasImg} id="img" />
      <p className="footer-text" htmlFor="img">prochains jours</p>
    </div>
  )
}
ModalFooter.propTypes = {
  setToggleFiveDays: PropTypes.func,
  toggleFiveDays: PropTypes.bool
}
export default ModalFooter;