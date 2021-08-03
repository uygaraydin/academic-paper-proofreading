const User = require('./models/user')
const {userDatabase, roleDatabase} = require('./database/')


const role = roleDatabase.getRoles()

const uygar = User.create({name: "uygar", surname: "aydin", email: "uygar.aydin@erdogan.edu.tr", phone: "23213", department: "Bilgi İşlem Daire Başkanlığı", title: "Öğr. Gör.", identificationNumber: "11", institutionalNumber: "22"})
const saygin = User.create({name: "saygin", surname: "aydin", email: "uygar.aydin@erdogan.edu.tr", phone: "23213", department: "Bilgi İşlem Daire Başkanlığı", title: "Öğr. Gör.", identificationNumber: "11", institutionalNumber: "22"})

const user = userDatabase.findUser("uygar")
console.log(user.getPersonalStatistics())
