const sql = require("./db.js");

const sideDishes = function (data) {
    this.SideDishName = data.SideDishName;
    this.Price = data.Price;
  };

  sideDishes.create = (newSideDishes, result) => {
    sql.query("INSERT INTO SideDishes SET ?", newSideDishes, (err, res) => {
      if (err) {
        result(err, "");
        return;
      } else {
        result("", { id: res.insertId, ...newSideDishes });
      }
    });
  };
  
  sideDishes.delete = (id, result) => {
    sql.query(`DELETE FROM SideDishes WHERE id ='${id}'`,
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


sideDishes.update = (id, updateSideDishes, result)=> {
    sql.query(
        `UPDATE SideDishes SET 
        SideDishName = ?, 
        Price = ? 
        WHERE id = ?`,
        [updateSideDishes.SideDishName, updateSideDishes.Price, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result("", err);
          return;
        }
  
        if (res.affectedRows === 1) {
          result("", { id: id, ...updateSideDishes });
          return;
        }
  
        result("", "");
        return;
      }
    );
  };

  sideDishes.getAllSideDishes = (result) => {
    sql.query(`select * from SideDishes`, (err, res) => {
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

  sideDishes.findSideDishesById = (id, result) => {
    sql.query(`SELECT * FROM SideDishes WHERE id='${id}'`, (err, res) => {
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
  
  module.exports = sideDishes; 