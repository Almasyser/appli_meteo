import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
// import FetchApiStats from "../../components/utils/FetchApiStats";
import useLocations from "../../hooks/useLocations";
import useStatsArray from "../../hooks/useStatsArray";
import StatSelectItems from "../../components/statSelectItems/StatSelectItems";
import LineChartBox from "../../components/lineChartBox/LineChartBox";
import DataChartBox from "../../components/dataChartBox/DataChartBox";
// json de test:
import statsArrayTesting from "../../json/statsArrayTesting.json";
import "./stats.css";

function Stats(){
  const { statsArray} = useStatsArray();
  const { latitude, longitude } = useLocations();
  const [ toggle, setToggle ]= useState(false);
  const [ showGraph, setShowGraph ] = useState(false);
  const [ showDonnees, setShowDonnees ] = useState(false);
  const cles = Object.keys(statsArray.hourly);
  const handleGraph=()=>{
    setShowGraph(!showGraph);
    setShowDonnees(false);
  }
  const handleDonnees=()=>{
    setShowGraph(false);
    setShowDonnees(!showDonnees);
  }
  return (
    <>
    <button type="button" onClick={()=> setToggle(!toggle)}>Quitter Stats</button>
    <StatSelectItems />
    <div>
      <button onClick={handleGraph} >Graphique</button>
      <button onClick={handleDonnees} >Données</button>
    </div>
    {toggle? <Navigate to="/home"/>:null}
    {statsArray && showGraph && <LineChartBox datas={statsArray} cles={cles}/>}
    {statsArray && showDonnees && <DataChartBox datas={statsArray} cles={cles}/>}
    </>
  )
}
export default Stats;