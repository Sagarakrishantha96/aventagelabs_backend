const desserts = require("../models/desserts.model");

exports.create = async function (req, res) {
  try {
    if (!req.body) {
      res.status(400).json({
        code: 400,
        status: "BadRequest",
        message: "Content can not be empty!",
      });
    }

    const newDesserts = new desserts({
      DessertName: req.body.DessertName,
      Price: req.body.Price,
    });

    desserts.create(newDesserts, (err, data) => {
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

exports.delete = async function (req, res) {
  try {
    desserts.delete(req.params.id, (err, data) => {
      if (err) {
        return res.status(500).send({
          success: false,
          code: 500,
          status: "not success",
          message: "Internal Server Error",
        });
      }
      if (data.affectedRows === 1) {
        return res.status(200).json({
          success: true,
          code: 200,
          status: "success",
          message: "successfully deleted",
        });
      } else {
        return res.status(200).send({
          success: false,
          code: 200,
          status: "success",
          message: "Dessert is not found",
        });
      }
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      code: 400,
      status: "not success",
      message: "error",
    });
  }
};

exports.update = async function (req, res) {
  try {
    if (!req.body) {
      res.status(400).json({
        code: 400,
        status: "BadRequest",
        message: "Content can not be empty!",
      });
    }
    const updateDesserts = {
      DessertName: req.body.DessertName,
      Price: req.body.Price,
    };
    desserts.update(req.params.id, updateDesserts, (err, data) => {
      if (err) {
        return res.status(500).send({
          success: false,
          code: 500,
          status: "not success",
          message: "Internal Server Error",
        });
      }
      if (data) {
        return res.status(200).json({
          success: true,
          code: 200,
          status: "success",
          data: data,
          message: "successfully Updated",
        });
      } else {
        return res.status(200).send({
          success: false,
          code: 200,
          status: "not success",
          data: data,
          message: "dessert is not found",
        });
      }
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      code: 400,
      status: "not success",
      message: "error",
    });
  }
};

exports.getAllDesserts = async function (req, res) {
  try {
    desserts.getAllDesserts((err, data) => {
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

exports.findDessertsById = async function (req, res) {
  try {
    desserts.findDessertsById(req.params.id, (err, data) => {
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
