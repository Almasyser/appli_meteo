import forceVent from "../../json/forceVent.json";
 function SelectWindLabel({windSpeed}) {
    const matched = forceVent?.find(({ min, max }) => windSpeed >= min && windSpeed < max);
    return matched? matched.label : "vent nul";
  } 
  export default SelectWindLabel;
