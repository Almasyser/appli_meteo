  function DayOfWeek({today}){
    const jours = [
      "dimanche",
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi",
      "samedi",
    ];
    const date= new Date(today);
      const jourSemaine = jours[date.getDay()];
    return jourSemaine;

  }
  export default DayOfWeek;