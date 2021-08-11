const { User } = require("../models");
const { documentDatabase } = require("./");

class AdminDatabase extends UserDatabase {

}

module.exports = AdminDatabase(User)