const { User, Statistic } = require('../models');
const BaseDatabase = require('./base-database');
const createUserModelFromObjectByRole = require('../lib/create-user-model-from-object-by-role');
const getStates = require('../lib/get-states');

class UserDatabase extends BaseDatabase {

  login() {
    user = null
    loginServiceResponse = {
      id: 233,
      identificationNumber: "343244324324",
      institutionalNumber: "776767777",
    }

    if (loginServiceResponse.id > 0) user = this.#controlUserRecord(loginServiceResponse)

    return user == null ? this.#addFromService(loginServiceResponse) : user

  }

  #controlUserRecord = loginServiceResponse => {
    return this.findUserByIdentificationNumber(loginServiceResponse.identificationNumber)
  }

  #addFromService = loginServiceResponse => {
    const user = createUserModelFromObjectByRole(loginServiceResponse)
    return userDatabase.insert(user)
  }

  changeRole(user) {
    return user
  }
}

module.exports = new UserDatabase(User);
