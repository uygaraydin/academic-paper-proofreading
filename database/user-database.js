const { User, Statistic } = require("../models");
const BaseDatabase = require("./base-database");
const createModelFromObject = require("../lib/create-model-from-object");

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

  getPersonalStatistics() {
    const statistic = new Statistic()
    statistic.totalDocument = this.documents.length || 0
    statistic.waitingDocument = this.documents.filter(o => o.state == 1).length || 0
    statistic.examiningDocument = this.documents.filter(o => o.state == 2).length || 0
    statistic.rejectedDocument = this.documents.filter(o => o.state == 3).length || 0
    statistic.completedDocument = this.documents.filter(o => o.state == 4).length || 0
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
