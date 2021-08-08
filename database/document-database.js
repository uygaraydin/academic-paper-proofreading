const BaseDatabase = require('./base-database')
const Document = require('../models/document')

class DocumentDatabase extends BaseDatabase {

  upload(document) {
    this.insert(document)
    return document
  }

}

module.exports = new DocumentDatabase(Document)