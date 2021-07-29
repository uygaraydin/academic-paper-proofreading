const BaseDatabase = require('./base-database')
const StaticPage = require('../models/static-page')

class StaticPageDatabase extends BaseDatabase {

}

module.exports = new StaticPageDatabase(StaticPage)