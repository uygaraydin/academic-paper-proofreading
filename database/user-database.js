const BaseDatabase = require("./base-database");
const User = require("../models/user");

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

  getUserInfo(user) {
    const results = [];
    return results;
  }
}

module.exports = new UserDatabase(User);
