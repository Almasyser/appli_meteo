import { useEffect, useState } from "react";
import useLocations from "../../hooks/useLocations";
import statsKeysList from "../../json/statsKeysList.json";
import statsPastDays from "../../json/statsPastDays.json";
import './selectitems.css';
// import FetchApiStats from "../utils/FetchApiStats";

function StatSelectItems() {
    const {latitude, longitude } = useLocations();
    const [datas, setDatas] = useState([])
    const [cles, setCles] = useState([])
    const [pastDays, setPastDays] = useState(7);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const dataFromForm = Object.fromEntries(formData.entries());
        setDatas(dataFromForm)
        setCles(Object.keys(dataFromForm));
    };
    useEffect(()=>{
        const urlRoot = "https://api.open-meteo.com/v1/forecast?";
        const urlCoord = `latitude=${latitude}&longitude=${longitude}`;
        const urlBody = ["&hourly="];
        const urlEnd = `&past_days=${pastDays}&forecast_days=1`;
        cles.map((el)=>{
            urlBody.push(datas[el]);
            const temp = urlBody.toString().replace('=,', '=');
            const urlAll=(urlRoot+urlCoord+temp+urlEnd);
            // urlAll? FetchApiStats( urlAll ):null;
            console.log("*-*-",urlAll);
            
            
        })
    },[datas]) 
    console.log("STAT",statsPastDays);
    
    return (
        <>
        <div>StatSelectItems</div>
        <div className="pastdays">
            {statsPastDays.map((el)=>{
                return(
                    <button name="pastdays" key={el.id}>{el.btnText}</button>
                )
            })}
        </div>
        <form className="select-box" onSubmit={handleSubmit}>
            {statsKeysList && statsKeysList.map((el)=>{
                return(
                    <span key={el.id}>
                        <label>{el.name}
                            <input type="checkbox" id={el.id} name={el.name} value={el.key} />
                        </label>
                    </span>
                )
            })}
            <button type="submit">Valider</button>
        </form>
        <p></p>
    </>
  )
}

export default StatSelectItems;
// const url = `https://api.open-meteo.com/v1/forecast?latitude=40&longitude=10&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,surface_pressure,cloud_cover,wind_speed_10m,wind_direction_10m&past_days=31&forecast_days=1`;