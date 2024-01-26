const routes = require ("express").Router();

var dessertsController = require("../../controllers/desserts");

routes.post("/createDesserts", dessertsController.create);
routes.delete("/deleteDesserts/:id", dessertsController.delete);
routes.put("/updateDesserts/:id", dessertsController.update);
routes.get("/getAllDesserts", dessertsController.getAllDesserts);
routes.get("/findDessertsById/:id", dessertsController.findDessertsById);

module.exports = routes; 