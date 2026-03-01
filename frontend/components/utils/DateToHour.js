  function DateToHour({today}){
    const date= new Date(today);
    const hour = String(date.getHours()).padStart(2, "0"); 
    const minute = String(date.getMinutes()).padStart(2, "0"); 
    return `${hour}:${minute}`;
  }
  export default DateToHour;