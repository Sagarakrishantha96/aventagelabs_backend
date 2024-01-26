const reports = require("../models/reports.model");

exports.getMostFamousMainDish = async function (req, res) {
    try {
        reports.getMostFamousMainDish((err, data) => {
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

  exports.getMostFamousSideDish = async function (req, res) {
    try {
        reports.getMostFamousSideDish((err, data) => {
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