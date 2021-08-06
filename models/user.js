const getRoles = require('../lib/get-roles')
const uuid = require('uuid')



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
    this.role = getRoles().USER
  }

  upload(document) {
    this.documents.push(document)
    return document
  }
}

module.exports = User