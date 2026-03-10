import { useState } from "react";
import { BiLogIn } from "react-icons/bi"
import { Await } from "react-router-dom";

function DataChartBox({datas, cles}) {
  const [ myArray, setMyArray] = useState([])
  const [ show, setShow] = useState(false)
  const handleClick = (e)=> {
      const localKey = e.target.value;
      setMyArray([...datas.hourly[localKey]]);
      const moyenne =()=> myArray.reduce((a, b) => parseFloat(a) + parseFloat(b) / myArray.length);
      console.log("MOY",moyenne());
      setShow(true)
      
  }
    

    
  return (
    <>
      {cles && cles.map((el)=>{
        return(
          <div key={el}>
            <br/>
            <button value={el} onClick={(e)=>handleClick(e)}>{el}</button>
          </div>
        )}
      )}
      <div className="chart-box">
        {show && myArray && myArray.map((el, index)=>{
          return(
            <p key={index}>{el}</p>
          )
        })}
      </div>
    </>
  )
}

export default DataChartBox;
// const moyenne = tableau.reduce((a, b) => a + b, 0) / tableau.length;.