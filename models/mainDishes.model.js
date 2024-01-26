const sql = require("./db.js");

const mainDishes = function (data) {
    this.MainDishName = data.MainDishName;
    this.Price = data.Price;
  };

  mainDishes.create = (newMainDishes, result) => {
    sql.query("INSERT INTO MainDishes SET ?", newMainDishes, (err, res) => {
      if (err) {
        result(err, "");
        return;
      } else {
        result("", { id: res.insertId, ...newMainDishes });
      }
    });
  };
  
  mainDishes.delete = (id, result) => {
    sql.query(`DELETE FROM MainDishes WHERE id ='${id}'`,
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


  mainDishes.update = (id, updateMainDishes, result)=> {
    sql.query(
        `UPDATE MainDishes SET 
        MainDishName = ?, 
        Price = ? 
        WHERE id = ?`,
        [updateMainDishes.MainDishName, updateMainDishes.Price, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result("", err);
          return;
        }
  
        if (res.affectedRows === 1) {
          result("", { id: id, ...updateMainDishes });
          return;
        }
  
        result("", "");
        return;
      }
    );
  };

  mainDishes.getAllMainDishes = (result) => {
    sql.query(`select * from MainDishes`, (err, res) => {
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

  mainDishes.findMainDishesById = (id, result) => {
    sql.query(`SELECT * FROM MainDishes WHERE id='${id}'`, (err, res) => {
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
  
  module.exports = mainDishes; 