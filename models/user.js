const GeneralMethods = require('../general-methods')
const Document = require('../models/document') 
const uuid = require('uuid')

const generalMethods = new GeneralMethods()

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
    this.role = generalMethods.getRoles().USER
  }

  login() {

  }

  getStatistics() {

  }

  #controlUserRecord(user) {
    console.log(user)
  }

  #add(user) {

  }

  upload(file = null) {
    file = {
      "name": "test"
    }
    const state = generalMethods.getStates()
    const document = new Document(file.name, `./file/${file.name}`, null, null, state.WAITING)
    this.documents.push(document)
    return document
  }

  static create({id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents = []}) {
    return new User(id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents)
  }
}

module.exports = User