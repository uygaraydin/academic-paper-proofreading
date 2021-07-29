const BaseDatabase = require('./base-database')
const Permission = require('../models/permission')

class PermissionDatabase extends BaseDatabase {

}

module.exports = new PermissionDatabase(Permission)