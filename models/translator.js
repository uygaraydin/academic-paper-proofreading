const GeneralMethods = require('../general-methods')
const User = require("../models/user")


const generalMethods = new GeneralMethods()

class Translator extends User {
  constructor(id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents = []) {
    super(id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents)
    this.role = generalMethods.getRoles().TRANSLATOR
  }

  upload(document) {
    return document
  }

  addAsManually(user) {
    return user
  }

  removeManuallyAdded(user) {
    return user
  }

  static create({id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents = []}) {
    return new Translator(id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents)
  }
}

module.exports = Translator