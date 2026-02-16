/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
/* ---- CITIES ROUTES ---- */
const citiesControllers = require("./controllers/cityControllers");
const urlControllers = require("./controllers/urlControllers");
// afficher 
router.get("/api/cities", citiesControllers.getCities);
// affiche les departements n° et texte
router.get("/api/departements", citiesControllers.getDepartments);
//affiche les regions
router.get("/api/regions",citiesControllers.getRegions);
// afficher un 
router.get("/api/cities/:city_id", citiesControllers.getCityById);
// créer
router.post("/api/addcities", citiesControllers.addCity);
// modifier
router.put("/api/updatecities/:city_id", citiesControllers.updateCity);
// supprimer
router.delete("/api/deletecities/:city_id", citiesControllers.deleteCity);

// afficher liste villes a la saisie
router.get("/api/city/:char", citiesControllers.getCity);
// afficher liste departement a la saisie
router.get("/api/departement/:char", citiesControllers.getDepartment);
// modifier
router.put("/api/updatecdepartement/:departement_id", citiesControllers.updateDepartement);
// afficher liste region a la saisie
router.get("/api/region/:char", citiesControllers.getRegion);
// modifier
router.put("/api/updateregion/:region_id", citiesControllers.updateRegion);

// affiche les villes d'un departement
router.get("/api/citiesbydep/:dep_id", citiesControllers.getCitiesByDep);
// affiche les villes selon zip code
router.get("/api/citiesbycode/:code_id", citiesControllers.getCitiesByCode);
// affiche infos from city
router.get("/api/datasbycity/:city_name", citiesControllers.getDatasByCity);
// affiche les urls
router.get("/api/urls", urlControllers.getUrls);
// affiche url selon Id
router.get("/api/urls/:url_id", urlControllers.getUrlById);
// ajoute une url
router.post("/api/urls", urlControllers.addUrl);
// efface une url
router.delete("/api/urls/:url_id", urlControllers.deleteUrl);

module.exports = router;
