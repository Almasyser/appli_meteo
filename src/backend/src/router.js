/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
/* ---- CITIES ROUTES ---- */
const citiesControllers = require("./controllers/cityControllers");
const urlControllers = require("./controllers/urlControllers");
// afficher 
router.get("/cities", citiesControllers.getCities);
// affiche les departements n° et texte
router.get("/departements", citiesControllers.getDepartments);
//affiche les regions
router.get("/regions",citiesControllers.getRegions);
// afficher un 
router.get("/cities/:city_id", citiesControllers.getCityById);
// créer
router.post("/addcities", citiesControllers.addCity);
// modifier
router.put("/updatecities/:city_id", citiesControllers.updateCity);
// supprimer
router.delete("/deletecities/:city_id", citiesControllers.deleteCity);

// afficher liste villes a la saisie
router.get("/city/:char", citiesControllers.getCity);
// afficher liste departement a la saisie
router.get("/departement/:char", citiesControllers.getDepartment);
// afficher liste region a la saisie
router.get("/region/:char", citiesControllers.getRegion);

// affiche les villes d'un departement
router.get("/citiesbydep/:dep_id", citiesControllers.getCitiesByDep);
// affiche les villes selon zip code
router.get("/citiesbycode/:code_id", citiesControllers.getCitiesByCode);
// affiche infos from city
router.get("/datasByCity/:city_name", citiesControllers.getDatasByCity);
// affiche les urls
router.get("/urls", urlControllers.getUrls);
// affiche url selon Id
router.get("/urls/:url_id", urlControllers.getUrlById);
// ajoute une url
router.post("/urls", urlControllers.addUrl);
// efface une url
router.delete("/urls/:url_id", urlControllers.deleteUrl);


module.exports = router;
