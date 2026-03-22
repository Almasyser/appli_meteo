import { LineChart, BarChart, PieChart, Bar, Line, Pie, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import statsKeysList from "../../json/statsKeysList.json";
const LineChartBox = ({ datas, cles }) => {
  console.log("datas",datas);
  
  const rawDatas = datas.hourly;
  const temp = [...cles];
  const newCles = [...temp.splice(1,temp.length)]
  const transformedData = transformDataForRecharts(rawDatas, cles );
  function transformDataForRecharts(rawData, lineKeys, labelKey = "name") {
    const labels = rawData[labelKey] || rawData[cles[0]].map((el) => el.slice(8, -6) )
    return labels.map((label, index) => {
      const point = { [labelKey]: label };
      lineKeys.forEach((key) => {
        point[key] = rawData[key][index];
      });
    return point;
  })};
  return(
    <div className="chart-card">
      <h2>Graphique</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={transformedData} style={{ fontSize: '12px' }} >
          <CartesianGrid strokeDasharray="2 2 " stroke="#475569" />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip style={{backgroundColor: '#aabbcc'}}/>
          <Legend />
          {newCles && newCles.map((el, index)=>{
            return(
              <Line key={el} type="monotone" dataKey={el} stroke={statsKeysList[index].color} strokeWidth={1} dot={false}/>
            )
          })}
        </LineChart>
        <BarChart data={transformedData} style={{ fontSize: '12px' }} >
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          {newCles && newCles.map((el, index)=>{
            return(
              <Bar key={el} type="monotone" dataKey={el} fill={statsKeysList[index].color} />
            )
          })}
        </BarChart>
        <PieChart data={transformedData} cx="50%" cy="50%" >
          {newCles && newCles.map((el, index)=>{
            return(
              <Pie key={el} nameKey={el} dataKey={el} fill={statsKeysList[index].color} />
            )
          })}
        </PieChart>
      </ResponsiveContainer> 
    </div> 
    )

};
export default LineChartBox;

