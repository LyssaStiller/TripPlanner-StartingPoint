var Sequelize = require("sequelize");
var db = new Sequelize('postgres://localhost:5432'+'/NY');

var Place = db.define




module.exports = {db: db}
