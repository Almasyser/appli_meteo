// src/utils/SelectNebulositeImg.js
import intervals from "../../json/intervals.json";
import hauteurPluie from "../../json/hauteurPluie.json";
import omm_codes from "../../json/omm_codes.json";
export default function SelectNebulositeImg(cloud_cover, precipitation) {
  if (precipitation !== 0) {
    const matched = hauteurPluie.find(({ min, max }) => precipitation >= min && precipitation < max);
    return omm_codes.find(entry => entry.id === (matched ? matched.id : 0)) || { img: null, text: "inconnu" };
  } else {
    const matched = intervals.find(({ min, max }) => cloud_cover >= min && cloud_cover < max);
    return omm_codes.find(entry => entry.id === (matched ? matched.id : 0)) || { img: null, text: "inconnu" };
  }
}

