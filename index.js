const { userDatabase, documentDatabase } = require('./database/')
const { User, Statistic } = require("./models")
const createUserModelFromObjectByRole = require("./lib/create-user-model-from-object-by-role")
const getRoles = require("./lib/get-roles")
const util = require('util')

// const saygin = User.create({ name: "saygin", surname: "aydin", email: "uygar.aydin@erdogan.edu.tr", phone: "23213", department: "Bilgi İşlem Daire Başkanlığı", title: "Öğr. Gör.", identificationNumber: "11", institutionalNumber: "22" })

// const user = userDatabase.findUser("uygar")


// const userr = userDatabase.findBy('id', '752f0723-b820-41e2-a459-64f366c33867')
// console.log(userr)

// console.log(documentDatabase.getPersonalDocumentStatistics(userr))

const rashad = createUserModelFromObjectByRole({ name: "Rashad", surname: "Monahan", email: "Alanis_Senger60@hotmail.com", phone: "751-657-6651", department: "Bilgi İşlem Daire Başkanlığı", title: "Dynamic Markets Representative", identificationNumber: "11", institutionalNumber: "22", role: getRoles().USER })

const rashad2 = createUserModelFromObjectByRole({ name: "Rashad", surname: "Monahan", email: "Alanis_Senger60@hotmail.com", phone: "751-657-6651", department: "Bilgi İşlem Daire Başkanlığı", title: "Dynamic Markets Representative", identificationNumber: "11", institutionalNumber: "22", role: getRoles().USER })


var file = {
  name: 'test.docx',
  url: '../uploads/docs/test.docx'
}

var fileC = {
  name: 'testC.docx',
  url: '../uploads/docs/testC.docx'
}


uploadedDocumentID = rashad.uploadFile(file)

uploadedDocumentC = rashad.uploadCorrectedFile(uploadedDocumentID, fileC)

console.log(util.inspect(rashad2, { showHidden: false, depth: null, colors: true }))

userDatabase.save([rashad, rashad2])