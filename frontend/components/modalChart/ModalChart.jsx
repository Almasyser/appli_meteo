import { Tooltip } from "recharts";
import { AreaChart, Area, ResponsiveContainer, XAxis,  CartesianGrid } from "recharts";
import PropTypes from "prop-types";
import "./modalchart.css";
import { useState } from "react";
import FormatDate from "../utils/formatDateCharts/FormatDateCharts";
// PROPS:
// sizeWidth sizeHeight : en % du parent
// data :array cle/value
// dashGrid :format axis  strokeGrid: color grid
// dataArea: name column for graph  strokeArea: color graph  fillArea: color, gradient...
// dataX: label axis X => name column  strokeX: color labels
// dataY: label axis Y => name column  strokeY: color labels
// gradColorStart, gradColorEnd : colors gradient
export default function ModalChart({ sizeWidth, sizeHeight, data, dashGrid, strokeGrid, strokeArea, fillArea, strokeX, intervX,  gradColorStart, gradColorEnd }) {
  const [datas]= useState(data);
  
  const {time, temperature_2m} = datas.hourly;
  const formatData = time.map((el, index)=> ({
    time: FormatDate(el),
    temperature: temperature_2m[index]
    }))
  return (
    <div className="chart-container">
      <div className="chart-box">
        <ResponsiveContainer width={sizeWidth} height={sizeHeight}>
          <AreaChart data={formatData} isAnimationActive={false}>
          <CartesianGrid strokeDasharray={dashGrid} stroke={strokeGrid} vertical={false}/>
            <Area dataKey={"temperature"} type='monotone' stroke={strokeArea} fill={fillArea}/>
            {/* <Area dataKey="cashOut" type='monotone' stroke={colors.six} fill="transparent"/> */}
            <XAxis dataKey={"time"} stroke={strokeX} interval={intervX} tickFormatter={(el)=>{
              return (el)
            }}></XAxis>
            {/* <YAxis dataKey={dataY} stroke={strokeY}></YAxis> */}
            <Tooltip 
              cursor={{ stroke:false, strokeWidth: 1}}
              content={({active, payload})=>{
                if(!active || !payload || payload.length === 0){
                  return null;          
                }
                return(
                <div className="content">
                  <p className="cashin">{payload[0].payload.temperature}°C</p>
                </div>
                )
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1" >
                <stop offset="10%" stopColor={gradColorStart} stopOpacity={0.8}/>
                <stop offset="950%" stopColor={gradColorEnd} stopOpacity={0.03}/>
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
ModalChart.propTypes = {
  sizeWidth: PropTypes.string,
  sizeHeight: PropTypes.string,
  data: PropTypes.any,
  dashGrid: PropTypes.string,
  strokeGrid: PropTypes.string,
  dataArea: PropTypes.string,
  strokeArea: PropTypes.string,
  fillArea: PropTypes.string,
  dataX: PropTypes.string,
  strokeX: PropTypes.string,
  intervX: PropTypes.number,
  dataY: PropTypes.string,
  strokeY: PropTypes.string,
  gradColorStart: PropTypes.string, 
  gradColorEnd: PropTypes.string
  }
