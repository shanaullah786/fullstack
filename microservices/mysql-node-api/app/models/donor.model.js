const sql = require("./db.js");

// constructor
const Doner = function (doner) {
  this.email = doner.email;
  this.name = doner.name;
  this.age = doner.age;
  this.mobile = doner.mobile;
  this.city = doner.city;
  this.gender = doner.gender;
  this.bloodgroup = doner.bloodgroup;
  this.recovered = doner.recovered;
  this.drinkCount = doner.drinkCount;
  this.liverDisease = doner.liver;
  this.kidneyDisease = doner.kidney;
  this.lungDisease = doner.lung;
  this.hiBloodPressure = doner.bp;
  this.diabetesDisease = doner.diabetes;
  this.hasAadhar = doner.aadhar;
  this.dateOfRecovery = doner.recoverydate;
  this.hasDischargeReport = doner.discharge;
};

Doner.create = (newCustomer, result) => {
  sql.query("INSERT INTO doners SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created doners: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

Doner.findById = (customerId, result) => {
  sql.query(`SELECT * FROM doners WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Doner.getAll = result => {
  sql.query("SELECT * FROM doners", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("doners: ", res);
    result(null, res);
  });
};

Doner.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE doners SET email = ?, name = ?, active = ? WHERE id = ?",
    [Doner.email, Doner.name, Doner.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};


module.exports = Doner;
