const routes= require('express').Router();

const mainDishesRoutes = require ("./mainDishes/index")
const sideDishesRoutes = require ("./sideDishes/index")
const dessertsRoutes = require ("./desserts/index")
const ordersRoutes = require ("./orders/index")
const reportsRoutes = require ("./reports/index")


routes.use('/mainDishes', mainDishesRoutes);
routes.use('/sideDishes', sideDishesRoutes);
routes.use('/desserts', dessertsRoutes);
routes.use('/orders', ordersRoutes);
routes.use('/reports', reportsRoutes);

module.exports= routes;