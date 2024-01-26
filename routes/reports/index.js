const routes = require ("express").Router();

var reportsController = require("../../controllers/reports");

// routes.post("/sendDates", reportsController.sendDates);
routes.get("/getMostFamousMainDish", reportsController.getMostFamousMainDish);
routes.get("/getMostFamousSideDish", reportsController.getMostFamousSideDish);

module.exports = routes;
