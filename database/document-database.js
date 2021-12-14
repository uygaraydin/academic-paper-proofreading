const BaseDatabase = require('./base-database')
const { Document, Statistic } = require('../models/')

class DocumentDatabase extends BaseDatabase {

  upload(document) {
    this.insert(document)
    return document
  }

  getPersonalDocumentStatistics(user) {
    const statistic = new Statistic()
    const documents = this.findBy("id", user.id)

    statistic.totalDocument = documents.length || 0
    statistic.waitingDocument = documents.filter(o => o.state == getStates().WAITING).length || 0
    statistic.examiningDocument = documents.filter(o => o.state == getStates().EXAMINING).length || 0
    statistic.rejectedDocument = documents.filter(o => o.state == getStates().REJECTED).length || 0
    statistic.completedDocument = documents.filter(o => o.state == getStates().READY_FOR_DOWNLOAD).length || 0

    return statistic
  }

  getDocumentStatistics() {
    const statistic = new Statistic()
    const documents = this.load()

    statistic.totalDocument = documents.length || 0
    statistic.waitingDocument = documents.filter(o => o.state == 1).length || 0
    statistic.examiningDocument = documents.filter(o => o.state == 2).length || 0
    statistic.rejectedDocument = documents.filter(o => o.state == 3).length || 0
    statistic.completedDocument = documents.filter(o => o.state == 4).length || 0

    return statistic
  }

}

module.exports = new DocumentDatabase(Document)