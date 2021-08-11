const { userDatabase, documentDatabase } = require('./database/')
const { User, Statistic } = require("./models")
const createModelFromObject = require("./lib/create-model-from-object")
const getRoles = require("./lib/get-roles")
const getStatistics = require('./lib/get-statistics');

// cons./lib/get-statisticsr.create({ name: "uygar", surname: "aydin", email: "uygar.aydin@erdogan.edu.tr", phone: "23213", department: "Bilgi İşlem Daire Başkanlığı", title: "Öğr. Gör.", identificationNumber: "11", institutionalNumber: "22" })
// const saygin = User.create({ name: "saygin", surname: "aydin", email: "uygar.aydin@erdogan.edu.tr", phone: "23213", department: "Bilgi İşlem Daire Başkanlığı", title: "Öğr. Gör.", identificationNumber: "11", institutionalNumber: "22" })

// const user = userDatabase.findUser("uygar")

const rashad = createModelFromObject({ name: "Rashad", surname: "Monahan", email: "Alanis_Senger60@hotmail.com", phone: "751-657-6651", department: "Bilgi İşlem Daire Başkanlığı", title: "Dynamic Markets Representative", identificationNumber: "11", institutionalNumber: "22", role: getRoles().ADMIN })


const userr = userDatabase.findBy('id', '752f0723-b820-41e2-a459-64f366c33867')
console.log(userr)

console.log(documentDatabase.getPersonalDocumentStatistics(userr))