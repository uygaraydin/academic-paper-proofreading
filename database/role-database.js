const BaseDatabase = require('./base-database')
const Role = require('../role')

class RoleDatabase extends BaseDatabase {

}

module.exports = new RoleDatabase(Role)