const routes = require ("express").Router();

var mainDishesController = require("../../controllers/mainDishes");

routes.post("/createMainDishes", mainDishesController.create);
routes.delete("/deleteMainDishes/:id", mainDishesController.delete);
routes.put("/updateMainDishes/:id", mainDishesController.update);
routes.get("/getAllMainDishes", mainDishesController.getAllMainDishes);
routes.get("/getMainDishesById/:id", mainDishesController.findMainDishesById);

module.exports = routes;

