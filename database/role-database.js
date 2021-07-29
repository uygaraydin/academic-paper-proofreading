const BaseDatabase = require('./base-database')
const Role = require('../models/role')

class RoleDatabase extends BaseDatabase {

}

module.exports = new RoleDatabase(Role)