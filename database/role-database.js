const BaseDatabase = require('./base-database')
const Role = require('../models/role')

class RoleDatabase extends BaseDatabase {
  getRoles() {
    return {
      "USER": 1,
      "TRANSLATOR": 2,
      "ADMIN": 3
    }
  }
}

module.exports = new RoleDatabase(Role)