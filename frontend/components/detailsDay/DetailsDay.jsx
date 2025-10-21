import { useEffect } from "react";
import hourlyLabels from "../../json/hourlyLabels.json";
import useArray from "../../hooks/useArray";
import "./detailsday.css";
import { useState } from "react";
function DetailsDay({btn, showDetailsDay, setShowDetailsDay}){
  const { myArray } = useArray();
  const [myArrayKeys, setMyArrayKeys] = useState();
  const intervals =[0,4,8,12,16,20,24]
  const handleClick=()=>{
    setShowDetailsDay(false);
  }
   useEffect(()=>{
    const cles = Object.keys(myArray?.hourly);
    setMyArrayKeys(cles);
  },[]);
  console.log("btn",btn);
  return(
    <section className={showDetailsDay? "details-container active":"details-container"}>
      <div className="details-label">
      {hourlyLabels && hourlyLabels.map((el)=>{
        return(
          <span className="label-span" key={el.id}>
            <h4 className="label-h4">{el.label}</h4>
            <h4 className="label-h4">{el.unit}</h4>
          </span>
        )
      })}
      </div>
      <div className="details-values">
        {intervals && intervals.map((el)=>{
            const localId=(btn*24)-24+el; 
            return(
              <span key={el} className="values-span">
                {myArrayKeys && myArrayKeys.map((key)=>{
                  return(
                    <h4 className="values-h4" key={key}>{myArray?.hourly?.[key]?.[localId] ?? "n/a"}</h4> // 
                  )
                })}
              </span>
            )
          })}
      </div>

      <button onClick={()=>handleClick()}>X</button>
    </section>
  )
}
export default DetailsDay;

