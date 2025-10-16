import forceVent from "../../json/forceVent.json";
export default function SelectWindLabel({windSpeed}) {
    const matched = forceVent.find(({ min, max }) => windSpeed >= min && windSpeed < max);
    console.log(matched.label);
    
    
    return matched? matched.label : "vent nul";
    
  } 
