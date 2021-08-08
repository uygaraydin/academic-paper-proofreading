const { User, Statistic } = require('../models');
const BaseDatabase = require('./base-database');
const createModelFromObject = require('../lib/create-model-from-object');
const getStates = require('../lib/get-states');

class UserDatabase extends BaseDatabase {

  findUserById(id) {
    return this.findBy("id", id);
  }

  findUser(searchKey) {
    return this.findBy("name", searchKey);
  }

  findUserByIdentificationNumber(num) {
    return this.findBy("identificationNumber", num);
  }

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

  getPersonalStatistics(user) {
    const statistic = new Statistic()
    statistic.totalDocument = user.documents.length || 0
    statistic.waitingDocument = user.documents.filter(o => o.state == getStates().WAITING).length || 0
    statistic.examiningDocument = user.documents.filter(o => o.state == getStates().EXAMINING).length || 0
    statistic.rejectedDocument = user.documents.filter(o => o.state == getStates().REJECTED).length || 0
    statistic.completedDocument = user.documents.filter(o => o.state == getStates().READY_FOR_DOWNLOAD).length || 0
    return statistic
  }

  #controlUserRecord = loginServiceResponse => {
    return this.findUserByIdentificationNumber(loginServiceResponse.identificationNumber)
  }

  #addFromService = loginServiceResponse => {
    const user = createModelFromObject(loginServiceResponse)
    return userDatabase.insert(user)
  }
}

module.exports = new UserDatabase(User);
