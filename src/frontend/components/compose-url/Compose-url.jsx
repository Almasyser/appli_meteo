import "./compose-url.css";
import options from "../../assets/options.json";
function Compose_url() {
  console.log(options);
  
  return(
    <menu className="menu-container">
      {options && options.map((el)=>{
        return(
          <li key={el.id}>{el.label}</li>
        )
      })}
    </menu>
  )
}
export default Compose_url;