const User = require("./user")
const getRoles = require('../lib/get-roles')


class Translator extends User {
  constructor(id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents = []) {
    super(id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents)
    this.role = getRoles().TRANSLATOR
  }
}

module.exports = Translator