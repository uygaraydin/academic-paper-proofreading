class Document {
  constructor(name, url, correctedFile = null, state, user_id) {
    this.user_id = user_id
    this.name = name
    this.url = url
    this.correctedFile = correctedFile
    this.state = state
  }

  uploadCorrectedFile(document) {
    this.correctedFile.push(document)
    return document
  }
}

module.exports = Document