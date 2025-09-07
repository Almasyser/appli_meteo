import PropTypes from "prop-types";
import "./footer.css";
function ModalFooter(props){
  const {setToggleFiveDays} = props;
  return(
    <div className="footer-container" onClick={()=> setToggleFiveDays(true)}>
      <p className="footer-text" htmlFor="img">prochains jours</p>
    </div>
  )
}
ModalFooter.propTypes = {
  setToggleFiveDays: PropTypes.func,
  toggleFiveDays: PropTypes.bool
}
export default ModalFooter;