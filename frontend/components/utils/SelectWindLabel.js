import forceVent from "../../json/forceVent.json";
export default function SelectWindLabel({windSpeed}) {
    const matched = forceVent.find(({ min, max }) => windSpeed >= min && windSpeed < max);
    return matched ? matched.label : forceVent[0];
  } 
