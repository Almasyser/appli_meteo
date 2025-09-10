import PropTypes from "prop-types";
import "./footer.css";
function ModalFooter(){

  return(
    <div className="footer-container">
      <p className="footer-text" ></p>
    </div>
  )
}
ModalFooter.propTypes = {
  setToggleFiveDays: PropTypes.func,
  toggleFiveDays: PropTypes.bool
}
export default ModalFooter;