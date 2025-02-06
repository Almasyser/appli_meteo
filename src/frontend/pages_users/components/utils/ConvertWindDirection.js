function ConvertWindDirection (props) {
  const { angle } = props;
  const arrayWind =["Vent du Sud","Vent du Sud-Ouest","Vent d'Ouest","Vent du Nord-Ouest","Vent du Nord","Vent du Nord-Est","Vent d'Est","Vent du Sud-Est","Vent du Sud"]
  const value = Math.round(angle/45);
  return arrayWind[value]
}
export default ConvertWindDirection;