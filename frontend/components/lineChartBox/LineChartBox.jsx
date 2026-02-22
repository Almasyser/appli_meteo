import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const LineChartBox = ({ datas }) => {
  
  const transformedData = transformDataForRecharts(datas, ["apparent_temperature","temperature_2m"]);

  function transformDataForRecharts(rawData, lineKeys, labelKey = "name") {
    const labels = rawData[labelKey] || rawData[cles[0]].map((_, i) => `Point ${i + 1}`);
    return labels.map((label, index) => {
      const point = { [labelKey]: label };
      lineKeys.forEach((key) => {
        point[key] = rawData[key][index];
      });
    return point;
  })};

  console.log(transformedData);
      return(
      <div className="chart-card">
      <h2>Sales & Revenue Trend</h2>
      {/* <ResponsiveContainer width="100%" height={300}>
        <LineChart data={convertDatas}>
          <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#3b82f6" strokeWidth={1} />
          <Line type="monotone" dataKey="apparent_temperature" stroke="#10b981" strokeWidth={1} />
        </LineChart>
      </ResponsiveContainer>  */}
    </div> 
    )

};
export default LineChartBox;