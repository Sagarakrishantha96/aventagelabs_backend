const sql = require("./db.js");

const desserts = function (data) {
    this.DessertName = data.DessertName;
    this.Price = data.Price;
  };

  desserts.create = (newDesserts, result) => {
    sql.query("INSERT INTO Desserts SET ?", newDesserts, (err, res) => {
      if (err) {
        result(err, "");
        return;
      } else {
        result("", { id: res.insertId, ...newDesserts });
      }
    });
  };
  
  desserts.delete = (id, result) => {
    sql.query(`DELETE FROM Desserts WHERE id ='${id}'`,
      (err, res) => {
        if (err) {
          result(err, "");
          return;
        }
  
        if (res) {
          result("", res);
          return;
        }
  
        result("", "");
      }
    );
  };


desserts.update = (id, updateDesserts, result)=> {
    sql.query(
        `UPDATE Desserts SET 
        DessertName = ?, 
        Price = ? 
        WHERE id = ?`,
        [updateDesserts.DessertName, updateDesserts.Price, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result("", err);
          return;
        }
  
        if (res.affectedRows === 1) {
          result("", { id: id, ...updateDesserts });
          return;
        }
  
        result("", "");
        return;
      }
    );
  };

  desserts.getAllDesserts = (result) => {
    sql.query(`select * from Desserts`, (err, res) => {
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
    });
  };

  desserts.findDessertsById = (id, result) => {
    sql.query(`SELECT * FROM Desserts WHERE id='${id}'`, (err, res) => {
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
    });
  };
  
  module.exports = desserts; 