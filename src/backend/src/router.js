const express = require("express");
const router = express.Router();
/* ---- CITIES ROUTES ---- */
const citiesControllers = require("./controllers/cityControllers");
// afficher 
router.get("/cities", citiesControllers.getCities);
// afficher un 
router.get("/cities/:city_id", citiesControllers.getCityById);
// créer
router.post("/addcities", citiesControllers.addCity);
// modifier
router.put("/updatecities/:city_id", citiesControllers.updateCity);
// supprimer
router.delete("/deletecities/:city_id", citiesControllers.deleteCity);

// affiche les departements n° et texte
router.get("/departements", citiesControllers.getDepartements);

//affiche les regions
router.get("/regions",citiesControllers.getRegions);

// affiche les villes d'un departement
router.get("citiesbydep/:dep_id", citiesControllers.getCitiesByDep);


module.exports = router;