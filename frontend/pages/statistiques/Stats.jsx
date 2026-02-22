import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
// import FetchApiStats from "../../components/utils/FetchApiStats";
import useLocations from "../../hooks/useLocations";
import useStatsArray from "../../hooks/useStatsArray";
import StatSelectItems from "../../components/statSelectItems/StatSelectItems";
import LineChartBox from "../../components/lineChartBox/LineChartBox";
import lineCharts from "../../json/lineCharts.json";
import "./stats.css";
function Stats(){
  const {statsArray, updateStatsArray} = useStatsArray();
  const {latitude, longitude} = useLocations();
  const [toggle, setToggle]= useState(false);






  console.log("###",statsArray.hourly);
  // const [cles, setCles]=useState();
  // useEffect(()=>{
  //   setCles(Object.keys(statsArray.hourly));

  // },[]);

  const handleGraph=()=>{
 
    console.log("click graph");
  }
  const handleBrut=()=>{
 
    console.log("click brut");
  }
  return (
    <>
    <button type="button" onClick={()=> setToggle(!toggle)}>Quitter Stats</button>
    <StatSelectItems />
    <div>
      <button onClick={handleGraph} >Graphique</button>
      <button onClick={handleBrut} >Données</button>
    </div>
    {toggle? <Navigate to="/home"/>:null}
    </>
  )
}
export default Stats;