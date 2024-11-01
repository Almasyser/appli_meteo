import { useMemo } from "react";
import "./ConvertFormatDate.css";
function ConvertFormatDate({date, names, setNames}){
  const year =date.slice(0, 4);
  const day = date.slice(8, 10);
  const hour = date.slice(11, 13);
  // DEPLACER DANS LE PARENT:
  // const [names, setNames] = useState([
  //   {
  //     day:"",
  //     month:""
  //   }
  // ])
  useMemo(()=>{
    getDayName(date,setNames,names);
    console.log("########");    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[date])
  console.log(names[0].day," ",day," ",names[0].month," ",year," - ",hour,"heure");

}
const getDayName = (dateString, setNames) => {
  const date = new Date(dateString);
  if (isNaN(date)) {
    console.log('Date invalide');
  }
  const day = new Intl.DateTimeFormat('fr-FR', { weekday: 'long' }).format(date);
  const month = new Intl.DateTimeFormat('fr-Fr', {month: 'long'}).format(date);
  const temp = [{day: day, month: month}]
  setNames(temp)
  return
};
export default ConvertFormatDate;