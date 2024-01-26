const sql = require("./db.js");

const orders = function (data) {
  this.mainDishId = data.mainDishId;
  this.sideDishIds = data.sideDishIds;
  this.dessertIds = data.dessertIds || null;
  this.OrderDate = data.OrderDate;
};

orders.create = (newOrder, result) => {
  sql.query(
    "INSERT INTO Orders (MainDishID,OrderDate) VALUES (?, ?)",
    [newOrder.mainDishId, newOrder.OrderDate],
    (err, res) => {
      if (err) {
        result(err, "");
        return;
      }

      const orderId = res.insertId;

      const sideDishIdsValues = newOrder.sideDishIds.map((sideDishId) => [
        orderId,
        sideDishId,
      ]);

      sql.query(
        "INSERT INTO OrderSideDishes (OrderID, SideDishID) VALUES ?",
        [sideDishIdsValues],
        (err, res) => {
          if (err) {
            console.error("Error executing SQL query for side dishes:", err);
            result(err, "");
            return;
          }

          if (newOrder.dessertIds && newOrder.dessertIds.length > 0) {
            const dessertIdsValues = newOrder.dessertIds.map((dessertId) => [
              orderId,
              dessertId,
            ]);
            sql.query(
              "INSERT INTO OrderDesserts (OrderID, DessertID) VALUES ?",
              [dessertIdsValues],
              (err, res) => {
                if (err) {
                  console.error("Error executing SQL query for desserts:", err);
                  result(err, "");
                  return;
                }

                result(null, res);
              }
            );
          } else {
            result(null, res);
          }
        }
      );
    }
  );
};

orders.getOrderMainDishDetails = (result) => {
  sql.query(
    `SELECT *
    FROM MainDishes
    INNER JOIN Orders ON MainDishes.ID = Orders.MainDishID;`,
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

orders.getOrderSideDishDetails = (result) => {
  sql.query(
    `SELECT *
    FROM SideDishes
    INNER JOIN OrderSideDishes ON SideDishes.ID = OrderSideDishes.SideDishId;`,
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

orders.getOrderDessertDetails = (result) => {
  sql.query(
    `SELECT *
    FROM  Desserts
    INNER JOIN OrderDesserts ON Desserts.ID = OrderDesserts.DessertId;`,
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

orders.getOrderPriceDetails = (result) => {
  sql.query(
    `SELECT
    O.OrderID,
    M.Price AS MainDishPrice,
    GROUP_CONCAT(SD.Price) AS SideDishPrices,
    GROUP_CONCAT(DE.Price) AS DessertPrices,
    (M.Price + COALESCE(SUM(SD.Price), 0) + COALESCE(SUM(DE.Price), 0)) AS Total
FROM
    Orders O
JOIN
    MainDishes M ON O.MainDishID = M.ID
LEFT JOIN
    OrderSideDishes OSD ON O.OrderID = OSD.OrderID
LEFT JOIN
    SideDishes SD ON OSD.SideDishId = SD.ID
LEFT JOIN
    OrderDesserts OD ON O.OrderID = OD.OrderID
LEFT JOIN
    Desserts DE ON OD.DessertId = DE.ID
GROUP BY
    O.OrderID, O.MainDishID, M.Price;`,
    (err, res) => {
      if (err) {
        
        result(err, "");
        return;
      }
      if (res.length) {
        res.forEach((order) => {
          const updateTotalQuery = 'UPDATE Orders SET Total = ? WHERE OrderID = ?';
          const values = [order.Total, order.OrderID];
          sql.query(updateTotalQuery, values, (err) => {
            if (err) {
              console.error('Error in UPDATE query:', err);
              result(err, "");
              return;
            }
          });
        });

        result("", res);
      } else {
        console.log('No results from SELECT query.');
        result("", "");
      }
    }
  );
};

orders.getAllOrderDetails = (result) => {
  sql.query(
    `SELECT *
    FROM  Orders`,
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

module.exports = orders;
