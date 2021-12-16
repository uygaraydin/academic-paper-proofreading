const uuid = require('uuid')
class Document {
  constructor({ id, name, url, correctedFile = null, state = 'True' }) {
    this.id = id || uuid.v4()
    this.name = name
    this.url = url
    this.correctedFile = correctedFile
    this.state = state
  }
}

module.exports = Document