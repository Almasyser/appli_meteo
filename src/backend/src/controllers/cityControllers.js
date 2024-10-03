/* eslint-disable no-undef */
const models = require("../models");
// récupérer l'ensemble des brands OK
const getCities = (req, res) => {
  models.cities
    .findAll()
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.sendStatus(500);
    });
};
// récupérer un brand OK
const getCityById = (req, res) => {
  const cityId = req.params.city_id;
  if (!cityId) {
    return res.status(400).send("city_id is required");
  }
  console.log("######",cityId);
  models.cities
    .find(cityId)
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.sendStatus(500);
    });
};
// ajouter un brand OK
const addCity = (req, res) => {
  const el = req.body;
  models.cities
    .add(el)
    .then(([rows]) => {
      if (rows.affectedRows) {
        res.status(201).send(rows);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      if (err.code === "ER_DUP_ENTRY") {
        res.sendStatus(409);
      } else {
        console.error(err);
        res.sendStatus(500);
      }
    });
};
const updateCity = (req, res) => {
  const cityId = req.params.city_id;
  const el = req.body;
  models.cities
    .modify(cityId, el)
    .then(([rows]) => {
      if (rows) {
        res.status(200).send(el);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const deleteCity = (req, res) => {
  const cityId = req.params.city_id;
  
  models.cities
    .delete(cityId)
    .then(([rows]) => {
      if (rows) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getDepartements = (req, res) => {
  models.cities
    .findAllDepartments()
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.sendStatus(500);
    });
};
const getRegions = (req, res) => {
  models.cities
    .findAllRegions()
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.sendStatus(500);
    });
};
const getCitiesByDep = (req, res) => {
  const depId = req.params.dep_id;
  console.log("###depId",depId, typeof(depId));
  if (!depId) {
    return res.status(400).send("dep_id is required");
  }
  models.cities
    .findCitiesByDep(depId)
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.sendStatus(500);
    });
};
const getCitiesByCode = (req, res) => {
  const codeId = req.params.code_id;
  console.log("###codeId",codeId, typeof(codeId));
  if (!codeId) {
    return res.status(400).send("code_id is required");
  }
  models.cities
    .findCitiesByCode(codeId)
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.sendStatus(500);
    });
};
const getDatasByCity = (req, res) => {
  const cityName = req.params.city_name;
  console.log("###cityName",cityName, typeof(cityName));
  if (!cityName) {
    return res.status(400).send("city_name is required");
  }
  models.cities
    .findDatasByCity(cityName)
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.sendStatus(500);
    });
};
module.exports = {
  getCities,
  getCityById,
  addCity,
  updateCity,
  deleteCity,
  getDepartements,
  getRegions,
  getCitiesByDep,
  getCitiesByCode,
  getDatasByCity
};
