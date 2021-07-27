class User {
  #identificationNumber = null
  #institutionalNumber = null
  constructor(name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents, role) {
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

  login() {

  }

  getStatistics() {

  }

  #controlUserRecord(user) {
    console.log(user)
  }

  #add(user) {

  }

  upload(document) {
    return document
  }
}

class Translator extends User {
  constructor(name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents = [], role) {
    super(name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents, role)
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
}

class Admin extends User {
  constructor(name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents = [], role) {
    super(name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents, role)
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
}

class Document {
  constructor(originalName, originlaFileUrl, correctedFileName, correctedFileUrl, state) {
    this.originalName = originalName
    this.originlaFileUrl = originlaFileUrl
    this.correctedFileName = correctedFileName
    this.correctedFileUrl = correctedFileUrl
    this.state = state.WAITING
  }
}

class StaticPage {
  constructor(name, title, content) {
    this.name = name
    this.title = title
    this.content = content
  }
}

class Role {
  constructor(name, permissions) {
    this.name = name
    this.permissions = permissions
  }
}

class Permission {
  constructor(title) {
    this.title = title
  }
}


class GeneralMethods {
  getRoles() {
    return {
      "USER": 1,
      "TRANSLATOR": 2,
      "ADMIN": 3
    }
  }

  findUser(searchKey) {
    const results = []
    return results
  }

  getStates() {
    return {
      "WAITING": 1,
      "EXAMINING": 2,
      "REJECTED": 3,
      "READY_FOR_DOWNLOAD": 4
    }
  }

  getUserInfo(user) {
    const results = []
    return results
  }
}

const generalMethods = new GeneralMethods()
const role = generalMethods.getRoles()
const uygar = new User("uygar", "aydin", "uygar.aydin@erdogan.edu.tr", "23213", "Bilgi İşlem Daire Başkanlığı", "Öğr. Gör.","11", "22", null, role.ADMIN)

console.log(uygar)