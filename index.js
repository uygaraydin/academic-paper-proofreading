const GeneralMethods = require('./general-methods')
const User = require('./models/user')
const {userDatabase} = require('./database/')



const generalMethods = new GeneralMethods()
const role = generalMethods.getRoles()

const uygar = User.create({name: "uygar", surname: "aydin", email: "uygar.aydin@erdogan.edu.tr", phone: "23213", department: "Bilgi İşlem Daire Başkanlığı", title: "Öğr. Gör.", identificationNumber: "11", institutionalNumber: "22"})
const saygin = User.create({name: "saygin", surname: "aydin", email: "uygar.aydin@erdogan.edu.tr", phone: "23213", department: "Bilgi İşlem Daire Başkanlığı", title: "Öğr. Gör.", identificationNumber: "11", institutionalNumber: "22"})

const user = generalMethods.findUser("uygar")
console.log(user.getPersonalStatistics())
