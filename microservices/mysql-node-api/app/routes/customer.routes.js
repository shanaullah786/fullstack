module.exports = app => {
    const customers = require("../controllers/customer.controller.js");
    const donor = require("../controllers/donor.controller.js");

    // Create a new Customer
    app.post("/customers", customers.create);

    // Retrieve all Customers
    app.get("/customers", customers.findAll);

    // Retrieve a single Customer with customerId
    app.get("/customers/:customerId", customers.findOne);

    // Update a Customer with customerId
    app.put("/customers/:customerId", customers.update);

    // Delete a Customer with customerId
    app.delete("/customers/:customerId", customers.delete);

    // Delete all Customers
    //app.delete("/customers", customers.deleteAll);


    // Create a new Customer
    app.post("/donors", donor.create);

    // Retrieve all Customers
    app.get("/donors", donor.findAll);

    // Retrieve a single Customer with customerId
    app.get("/donors/:customerId", donor.findOne);

    // Update a Customer with customerId
    app.put("/donors/:customerId", donor.update);

    // Delete a Customer with customerId
    app.delete("/donors/:customerId", donor.delete);
};
