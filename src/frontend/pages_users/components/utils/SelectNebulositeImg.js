// src/utils/SelectNebulositeImg.js
import azur from "./assets/Soleil.png";
import voile_leger from "./assets/01_Partiel_degage.png";
import voile from "./assets/02_voile.png";
import nuageux from "./assets/03_Nuageux.png";
import tres_nuageux from "./assets/05_Tres_nuageux.png";
import couvert from "./assets/07_Couvert.png";
import bouche from "./assets/09_nuages_lourds.png";
import orageux from "./assets/11_Orageux.png";
import brume from "./assets/10_Brume.png";
import pluie_fine from "./assets/21_Pluie_fine.png";
import drache from "./assets/23_Pluie.png";
import averse from "./assets/25_Averse.png";
import deluge from "./assets/27_Deluge.png";
import grele from "./assets/29_Grele.png";
import intervals from "../../json/intervals.json";
import hauteurPluie from "../../json/hauteurPluie.json";
const nebulositeArray = [
  { id: 0, img: azur, text: "beau" },
  { id: 1, img: voile_leger, text: "dégagé" },
  { id: 2, img: voile, text: "voilé" },
  { id: 3, img: nuageux, text: "éclaircies" },
  { id: 4, img: tres_nuageux, text: "nuageux" },
  { id: 5, img: couvert, text: "couvert" },
  { id: 6, img: bouche, text: "bouché" },
  { id: 7, img: orageux, text: "orageux" },
  { id: 8, img: brume, text: "brume" },
  { id: 9, img: pluie_fine, text: "bruine" },
  { id: 10, img: drache, text: "pluie" },
  { id: 11, img: averse, text: "averses" },
  { id: 12, img: deluge, text: "déluge" },
  { id: 13, img: grele, text: "grêle" }
];
export default function SelectNebulositeImg(cloud_cover, precipitation) {
  if (precipitation !== 0) {
    const matched = hauteurPluie.find(({ min, max }) => precipitation >= min && precipitation < max);
      return nebulositeArray.find(entry => entry.id === (matched ? matched.id : 0)) || { img: null, text: "inconnu" };
  } else {
    const matched = intervals.find(({ min, max }) => cloud_cover >= min && cloud_cover < max);
      return nebulositeArray.find(entry => entry.id === (matched ? matched.id : 0)) || { img: null, text: "inconnu" };
  }

 
}
