const GeneralMethods = require('./general-methods')
const User = require('./models/user')



const generalMethods = new GeneralMethods()
const role = generalMethods.getRoles()

const uygar = User.create({name: "uygar", surname: "aydin", email: "uygar.aydin@erdogan.edu.tr", phone: "23213", department: "Bilgi İşlem Daire Başkanlığı", title: "Öğr. Gör.", identificationNumber: "11", institutionalNumber: "22"})
uygar.upload()
console.log(uygar)