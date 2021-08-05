const User = require("./user")
const getRoles = require('../lib/get-roles')


class Admin extends User {
  constructor(id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents = []) {
    super(id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents)
    this.role = getRoles().ADMIN
  }

  static create({ id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents = [] }) {
    return new Admin(id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents)
  }
}

module.exports = Admin