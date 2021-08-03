const GeneralMethods = require('../general-methods')
const Document = require('./document')
const Statistic = require('./statistic')
const uuid = require('uuid')
const UserDatabase = require('../database/user-database')
// const generalMethods = new GeneralMethods()


class User {
  #identificationNumber = null
  #institutionalNumber = null

  constructor(id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents = []) {
    this.id = id || uuid.v4()
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.department = department
    this.title = title
    this.#identificationNumber = identificationNumber
    this.#institutionalNumber = institutionalNumber
    this.documents = documents
    // this.role = generalMethods.getRoles().USER
  }

  login() {
    user = null
    loginServiceResponse = {
      id: 233,
      identificationNumber: "343244324324",
      institutionalNumber: "776767777",
    }

    if (loginServiceResponse.id > 0) user = this.controlUserRecord(loginServiceResponse)

    return user == null ? this.add(loginServiceResponse) : user

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

  controlUserRecord(loginServiceResponse) {
    return userDatabase.findUserByIdentificationNumber(loginServiceResponse.identificationNumber)
  }

  add(loginServiceResponse) {
    const user = this.create(loginServiceResponse)
    return UserDatabase.insert(user)
  }

  upload(file = null) {
    // file = {
    //   "name": "test"
    // }
    // const state = generalMethods.getStates()
    // const document = new Document(file.name, `./file/${file.name}`, null, null, state.WAITING)
    // this.documents.push(document)
    // return document
  }

  static create({ id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents = [] }) {
    return new User(id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents)
  }
}

module.exports = User