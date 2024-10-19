/* eslint-disable no-undef */
const models = require("../models");

const getUrls = (req, res) => {
  models.urls
    .findUrls()
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
const getUrlById = (req, res) => {
  const urlId = req.params.url_id;
  if (!urlId) {
    return res.status(400).send("url_id is required");
  }
  models.urls
    .findUrlById(urlId)
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
const addUrl = (req, res) => {
  const el = req.body;
  models.urls
    .addUrl(el)
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
const deleteUrl = (req, res) => {
  const urlId = req.params.url_id;
  models.cities
    .deleteUrl(urlId)
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
module.exports = {
  getUrls,
  getUrlById,
  addUrl,
  deleteUrl
}