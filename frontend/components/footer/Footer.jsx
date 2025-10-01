import PropTypes from "prop-types";
import SelectCity from "../selectCity/SelectCity";
import "./footer.css";
function ModalFooter(){
  return(
    <div className="footer-container">

    </div>
  )
}
ModalFooter.propTypes = {
  setToggleFiveDays: PropTypes.func,
  toggleFiveDays: PropTypes.bool
}
export default ModalFooter;