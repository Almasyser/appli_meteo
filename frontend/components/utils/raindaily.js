 
 
 function RainDaily({myArray, dayIndex, setMaxValue, setMaxIndex}){
  dayIndex.map((el)=>{
      const temp=el*24;
      const extrait = myArray?.hourly?.precipitation_probability?.slice(temp-24, temp);
      const result=Math.max(...extrait);
      setMaxIndex(extrait.indexOf(result));
      setMaxValue(result);
    })
 } 
 export default RainDaily;