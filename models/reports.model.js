const sql = require("./db.js");

const reports = function (data) {
  this.MainDishName = data.MainDishName;
};

reports.getMostFamousMainDish = (result) => {
    sql.query(
      `SELECT MainDishes.MainDishName, COUNT(Orders.MainDishID) AS OrderCount
      FROM MainDishes
      LEFT JOIN Orders ON MainDishes.ID = Orders.MainDishID
      GROUP BY MainDishes.MainDishName
      ORDER BY OrderCount DESC
      LIMIT 1;`,
      (err, res) => {
        if (err) {
          result(err, "");
          return;
        }
        if (res.length) {
          result("", res);
          return;
        }
        result("", "");
        return;
      }
    );
  };


  reports.getMostFamousSideDish = (result) => {
    sql.query(
      `SELECT SideDishes.SideDishName, COUNT(OrderSideDishes.SideDishId) AS OrderCount
      FROM SideDishes
      LEFT JOIN OrderSideDishes ON SideDishes.ID = OrderSideDishes.SideDishId
      GROUP BY SideDishes.SideDishName
      ORDER BY OrderCount DESC
      LIMIT 1;`,
      (err, res) => {
        if (err) {
          result(err, "");
          return;
        }
        if (res.length) {
          result("", res);
          return;
        }
        result("", "");
        return;
      }
    );
  };

module.exports = reports;




