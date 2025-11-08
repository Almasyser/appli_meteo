function ConvertDateJMA({dateISO}){
  const date = new Date(dateISO);
  const options = { day: '2-digit', month: 'long', year: 'numeric'};

  const dateFormat = date.toLocaleDateString('fr-fr', options);
  return dateFormat;
}
export default ConvertDateJMA;