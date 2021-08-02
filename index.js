const User = require('./models/user')
const {UserDatabase, RoleDatabase} = require('./database/')



// const generalMethods = new GeneralMethods()
const role = RoleDatabase.getRoles()

const uygar = User.create({name: "uygar", surname: "aydin", email: "uygar.aydin@erdogan.edu.tr", phone: "23213", department: "Bilgi İşlem Daire Başkanlığı", title: "Öğr. Gör.", identificationNumber: "11", institutionalNumber: "22"})
const saygin = User.create({name: "saygin", surname: "aydin", email: "uygar.aydin@erdogan.edu.tr", phone: "23213", department: "Bilgi İşlem Daire Başkanlığı", title: "Öğr. Gör.", identificationNumber: "11", institutionalNumber: "22"})

const user = UserDatabase.findUser("uygar")
console.log(user.getPersonalStatistics())
