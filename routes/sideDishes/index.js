const routes = require ("express").Router();

var sideDishesController = require("../../controllers/sideDishes");

routes.post("/createSideDishes", sideDishesController.create);
routes.delete("/deleteSideDishes/:id", sideDishesController.delete);
routes.put("/updateSideDishes/:id", sideDishesController.update);
routes.get("/getAllSideDishes", sideDishesController.getAllSideDishes);
routes.get("/getMainDishesById/:id", sideDishesController.findSideDishesById);

module.exports = routes;