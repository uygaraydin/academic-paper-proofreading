const GeneralMethods = require('../general-methods')
const User = require("../models/user")


const generalMethods = new GeneralMethods()

class Admin extends User {
  constructor(id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents = []) {
    super(id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents)
    this.role = generalMethods.getRoles().ADMIN
  }

  delete(user) {
    return document
  }

  changeRole(user) {
    return user
  }

  edit(staticPage) {
    return staticPage
  }

  add(permission) {
    return permission
  }

  delete(permission) {
    return permission
  }

  updatePermission(permission) {
    return permission
  }

  updateRole(role) {
    return role
  }

  static create({id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents = []}) {
    return new Admin(id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents)
  }
}

module.exports = Admin