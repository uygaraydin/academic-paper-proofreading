class Document {
  constructor(name, url, correctedFile = null, state) {
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