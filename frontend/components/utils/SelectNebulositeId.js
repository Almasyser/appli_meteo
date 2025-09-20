import intervals from"../../json/intervals.json";
import hauteurPluie from "../../json/hauteurPluie.json";
export default function getNebulositeId(cloud_cover, precipitation) {
  if (precipitation !== 0) {
    const matched = hauteurPluie.find(({ min, max }) => precipitation >= min && precipitation < max);
    return matched ? matched.id : 0;
  } else {
    const matched = intervals.find(({ min, max }) => cloud_cover >= min && cloud_cover < max);
    return matched ? matched.id : 0;
  }
}
