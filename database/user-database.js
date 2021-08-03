const User = require("../models/user");
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

  getUserInfo(user) {
    const results = [];
    return results;
  }
}

module.exports = new UserDatabase(User);
