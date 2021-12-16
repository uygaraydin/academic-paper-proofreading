const getRoles = require('../lib/get-roles')
const Document = require('./document')
const uuid = require('uuid')



class User {
  #identificationNumber = null
  #institutionalNumber = null

  constructor(id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents = [], role) {
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
    this.role = role
  }

  uploadFile(file) {
    const document = new Document({ name: file.name, url: file.url })
    this.documents.push(document)
    return document.id
  }

  uploadCorrectedFile(id, file) {
    const index = this.documents.findIndex(o => o.id == id)
    const document = this.documents[index]
    const correctedDocument = new Document({ name: file.name, url: file.url })
    document.correctedFile = correctedDocument
    return document
  }

}

module.exports = User