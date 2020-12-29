const DonorModal = require("../models/donor.model.js");

// Create and Save a new Doner
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Doner
  const donor = new Donor({
    email: req.body.email,
    name: req.body.name,
    mobile: req.body.mobile,
    age: req.body.age,
    city: req.body.city,
    gender: req.body.gender,
    bloodgroup: req.body.bloodgroup,
    recovered: req.body.recovered,
    drinkCount: req.body.drinkCount,
    liver: req.body.liver,
    kidney: req.body.kidney,
    lung: req.body.lung,
    bp: req.body.bp,
    diabetes: req.body.diabetes,
    aadhar: req.body.aadhar,
    recoverydate: req.body.recoverydate,
    discharge: req.body.discharge
  });

  // Save Doner in the database
  DonorModal.create(donor, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Donor."
      });
    else
      res.send({ status: 200, redirect: '/success', refId: data.mobile });
  });
};

// Retrieve all Doners from the database.
exports.findAll = (req, res) => {
  DonorModal.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Doners."
      });
    else res.send(data);
  });
};

// Find a single Doner with a id
exports.findOne = (req, res) => {
  DonorModal.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Doner with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Doner with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// Update a Doner identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  DonorModal.updateById(
    req.params.id,
    new Doner(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Doner with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Doner with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Doner with the specified id in the request
exports.delete = (req, res) => {
  DonorModal.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Doner with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Doner with id " + req.params.id
        });
      }
    } else res.send({ message: `Doner was deleted successfully!` });
  });
};

// Delete all Doners from the database.
exports.deleteAll = (req, res) => {
  DonorModal.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Doners."
      });
    else res.send({ message: `All Doners were deleted successfully!` });
  });
};
