

function ConvertWindDirection (props) {
  const { angle } = props;
  const arrayWind =["Sud","Sud-Ouest","Ouest","Nord-Ouest","Nord","Nord-Est","Est","Sud-Est","Sud"]
  const value = Math.round(angle/45);
  console.log(angle,"   ",value);

  return arrayWind[value]

}
export default ConvertWindDirection;