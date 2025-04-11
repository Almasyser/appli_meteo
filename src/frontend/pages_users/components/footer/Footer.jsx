import "./footer.css";
import flecheBasImg from "../../assets/Fleche bas_128.png";
function ModalFooter(){
  return(
    <div className="footer-container" >
      <img src={flecheBasImg} id="img"/>
      <p className="footer-text" htmlFor="img">prochains jours</p>
    </div>
  )
}
export default ModalFooter;