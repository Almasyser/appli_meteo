const ConvertDateToCustom = () => {

  const date = new Date();
  // const year = date.getFullYear();
  // const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
  // const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  // const minutes = String(date.getMinutes()).padStart(2, '0');
  // console.log("today",day);
  
  // return `${year}-${month}-${day}T${hours}:${minutes}`;
  return `${hours}`;
};
export default ConvertDateToCustom;