const getRoles = require("./get-roles")
const { User, Admin, Translator } = require("../models")
const _ = require('lodash');

const classes = { User, Admin, Translator };

function createModelFromObject({ id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents = [], role }) {

  const key = _.findKey(getRoles(), () => { return role })

  return new classes[_.capitalize(key)](id, name, surname, email, phone, department, title, identificationNumber, institutionalNumber, documents)
}


module.exports = createModelFromObject