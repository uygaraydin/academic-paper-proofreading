class User {
    constructor(name, surname, email, phone, department, title, role, identificationNumber, institutionalNumber, documents) {
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.department = department
        this.title = title
        this.role = role
        this._identificationNumber = identificationNumber
        this._institutionalNumber = institutionalNumber
        this.documents = documents
    }

    login() {

    }

    getStatistics(){

    }

    controlUserRecord(user) {

    }

    add(user) {

    }
}

class Academic extends User {
    constructor(name, surname, email, phone, department, title, role, identificationNumber, institutionalNumber, documents = []){
        super(name, surname, email, phone, department, title, role, identificationNumber, institutionalNumber, documents)
    }

    upload(document) {
        return document
    }
}

class Translator extends User {
    constructor(name, surname, email, phone, department, title, role, identificationNumber, institutionalNumber, documents = []){
        super(name, surname, email, phone, department, title, role, identificationNumber, institutionalNumber, documents)
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
    constructor(name, surname, email, phone, department, title, role, identificationNumber, institutionalNumber, documents = []){
        super(name, surname, email, phone, department, title, role, identificationNumber, institutionalNumber, documents)
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

    find(searchKey) {
        const results = []
        return results
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

role = {
    "ACADEMIC": 1,
    "TRANSLATOR": 2,
    "ADMIN": 3
}

state = {
    "WAITING": 1,
    "EXAMINING": 2,
    "REJECTED": 3,
    "READY_FOR_DOWNLOAD": 4
}

const uygar = new Academic("uygar","aydin","uygar.aydin@erdogan.edu.tr", "23213", "Bilgi İşlem Daire Başkanlığı", "Öğr. Gör.", role.ACADEMIC, "11", "22")