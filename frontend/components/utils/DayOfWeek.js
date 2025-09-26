  import jours from "../../json/jours.json";
  function DayOfWeek({today}){
    const date= new Date(today);
      const jourSemaine = jours[date.getDay()];
    return jourSemaine;
  }
  export default DayOfWeek;