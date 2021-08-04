const { User } = require("../models")
const BaseDatabase = require("./base-database");

class UserDatabase extends BaseDatabase {
  findUserBy(id) {
    return this.findBy("id", id);
  }

  findUser(searchKey) {
    return this.findBy("name", searchKey);
  }

  findUserByIdentificationNumber(num) {
    return this.findBy("identificationNumber", num);
  }
}

module.exports = new UserDatabase(User);
