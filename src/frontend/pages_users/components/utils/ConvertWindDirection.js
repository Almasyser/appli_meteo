import arrayWind from "../../json/arrayWind.json";
function ConvertWindDirection (props) {
  const { angle } = props;
  const value = Math.round(angle/45);
  return arrayWind[value]
}
export default ConvertWindDirection;

