import PropTypes from "prop-types";
import flecheBasImg from "../../assets/Fleche bas_128.png";
import "./footer.css";
function ModalFooter(props){
  const {setToggleFiveDays} = props;
  return(
    <div className="footer-container" onClick={()=> setToggleFiveDays(true)}>
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