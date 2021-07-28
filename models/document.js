class Document {
  constructor(originalName, originlaFileUrl, correctedFileName = null, correctedFileUrl = null, state) {
    this.originalName = originalName
    this.originlaFileUrl = originlaFileUrl
    this.correctedFileName = correctedFileName
    this.correctedFileUrl = correctedFileUrl
    this.state = state
  }
}

module.exports = Document