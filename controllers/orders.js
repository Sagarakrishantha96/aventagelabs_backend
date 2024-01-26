const orders = require("../models/orders.model");

exports.create = async function (req, res) {
  try {
    if (!req.body) {
      res.status(400).json({
        code: 400,
        status: "BadRequest",
        message: "Content can not be empty!",
      });
    }

    const currentDate = new Date();

    const newOrder = new orders({
        mainDishId: req.body.mainDishId,
        sideDishIds: req.body.sideDishIds,
        dessertIds: req.body.dessertIds,
        // Total : req.body.Total,
        OrderDate: currentDate,
      });

      orders.create(newOrder, (err, data) => {
      if (err) {
        return res.status(400).json({
          success: false,
          code: 400, 
          status: "not success",
          message: "error",
        });
      } else {
        return res.status(200).json({
          success: true,
          code: 200,
          status: "success",
          document: data,
        });
      }
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: "not success" });
  }
};


exports.getOrderMainDishDetails = async function (req, res) {
  try {
    orders.getOrderMainDishDetails((err, data) => {
      if (err) {
        return res.status(400).json({
          success: false,
          code: 400,
          status: "not success",
          message: "error",
        });
      } else {
        return res.status(200).json({
          success: true,
          code: 200,
          status: "success",
          document: data,
        });
      }
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: "error" });
  }
};

exports.getOrderSideDishDetails = async function (req, res) {
  try {
    orders.getOrderSideDishDetails((err, data) => {
      if (err) {
        return res.status(400).json({
          success: false,
          code: 400,
          status: "not success",
          message: "error",
        });
      } else {
        return res.status(200).json({
          success: true,
          code: 200,
          status: "success",
          document: data,
        });
      }
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: "error" });
  }
};

exports.getOrderDessertDetails = async function (req, res) {
  try {
    orders.getOrderDessertDetails((err, data) => {
      if (err) {
        return res.status(400).json({
          success: false,
          code: 400,
          status: "not success",
          message: "error",
        });
      } else {
        return res.status(200).json({
          success: true,
          code: 200,
          status: "success",
          document: data,
        });
      }
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: "error" });
  }
};

exports.getOrderPriceDetails = async function (req, res) {
  try {
    orders.getOrderPriceDetails((err, data) => {
      if (err) {
        return res.status(400).json({
          success: false,
          code: 400,
          status: "not success",
          message: "error",
        });
      } else {
        return res.status(200).json({
          success: true,
          code: 200,
          status: "success",
          document: data,
        });
      }
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: "error" });
  }
};

exports.getAllOrderDetails = async function (req, res) {
  try {
    orders.getAllOrderDetails((err, data) => {
      if (err) {
        return res.status(400).json({
          success: false,
          code: 400,
          status: "not success",
          message: "error",
        });
      } else {
        return res.status(200).json({
          success: true,
          code: 200,
          status: "success",
          document: data,
        });
      }
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: "error" });
  }
};