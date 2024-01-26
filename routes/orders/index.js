const routes = require ("express").Router();

var ordersController = require("../../controllers/orders");

routes.post("/createOrder", ordersController.create);
routes.get("/getOrderMainDishDetails", ordersController.getOrderMainDishDetails);
routes.get("/getOrderSideDishDetails", ordersController.getOrderSideDishDetails);
routes.get("/getOrderDessertDetails", ordersController.getOrderDessertDetails);
routes.get("/getOrderPriceDetails", ordersController.getOrderPriceDetails);
routes.get("/getAllOrderDetails", ordersController.getAllOrderDetails);

module.exports = routes;
