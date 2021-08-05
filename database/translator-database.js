const { User } = require("../models");
const UserDatabase = require("./user-database");

class TranslatorDatabase extends UserDatabase {

  addAsManually(user) {
    return user
  }

  removeManuallyAdded(user) {
    return user
  }

}

module.exports = TranslatorDatabase(User)