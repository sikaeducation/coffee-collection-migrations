const { Model } = require("objection")
const database = require("../database-connection")
Model.knex(database)

class Coffee extends Model {
  static tableName = "coffee"
}

module.exports = Coffee
