import { useState } from "react";
import { BiLogIn } from "react-icons/bi"

import "./datachartbox.css";
function DataChartBox({datas, cles}) {
  const handleMoyenne=(key)=>{
    const myArray = datas.hourly[cles[key]];
    const moyenne = myArray.reduce((a, b) => a + b, 0) / myArray.length;
    if(moyenne){
      return moyenne.toFixed(2);
    } else {
      return 0;
    }
  }
   
  
  return(
    <>
      <span className="btn-box">
      </span>
      <span className="data-table">
        {cles && cles.map((el, index)=>{
          return(
            <div key={index}>
              <p>{el}</p>
              <p>{handleMoyenne(index)}</p>
            </div>
          )
        })}
 
      </span>
    </>
  )

  
}
export default DataChartBox;
// const moyenne = tableau.reduce((a, b) => a + b, 0) / tableau.length;.