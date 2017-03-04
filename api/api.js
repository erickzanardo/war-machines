const express = require("express");
const router = express.Router();

const {
  tanks,
  tanksByPeriod,
  tanksByNation,
  tanksByVariant,
  aircrafts,
  aircraftsByPeriod,
  aircraftsByNation,
  aircraftsByVariant,
  nations,
  periods,
} = require("../repository/repository");

const sendAsJson = (json, res) => {
  if (json) {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(json));
  } else {
    res.sendStatus(404);
  }
};

const renderJsonPromise = (promise, res) => promise.then(resource => sendAsJson(resource, res));

router.get("/tanks", (req, res) => renderJsonPromise(tanks(), res));
router.get("/tanks/:id", (req, res) => renderJsonPromise(tanks(req.params.id), res));
router.get("/tanks/:id/variants", (req, res) => renderJsonPromise(tanksByVariant(req.params.id), res));
router.get("/aircrafts", (req, res) => renderJsonPromise(aircrafts(), res));
router.get("/aircrafts/:id", (req, res) => renderJsonPromise(aircrafts(req.params.id), res));
router.get("/aircrafts/:id/variants", (req, res) => renderJsonPromise(aircraftsByVariant(req.params.id), res));
router.get("/periods", (req, res) => renderJsonPromise(periods(), res));
router.get("/periods/:id", (req, res) => renderJsonPromise(periods(req.params.id), res));
router.get("/periods/:id/tanks", (req, res) => renderJsonPromise(tanksByPeriod(req.params.id), res));
router.get("/periods/:id/aircrafts", (req, res) => renderJsonPromise(aircraftsByPeriod(req.params.id), res));
router.get("/nations", (req, res) => renderJsonPromise(nations(), res));
router.get("/nations/:id", (req, res) => renderJsonPromise(nations(req.params.id), res));
router.get("/nations/:id/tanks", (req, res) => renderJsonPromise(tanksByNation(req.params.id), res));
router.get("/nations/:id/aircrafts", (req, res) => renderJsonPromise(aircraftsByNation(req.params.id), res));

module.exports = router;
