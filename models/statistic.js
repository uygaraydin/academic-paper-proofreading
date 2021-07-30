class Statistic {
    constructor(totalDocument, completedDocument, waitingDocument, examiningDocument, rejectedDocument) {
        this.totalDocument = totalDocument
        this.completedDocument = completedDocument
        this.waitingDocument = waitingDocument
        this.examiningDocument = examiningDocument
        this.rejectedDocument = rejectedDocument
    }
}

module.exports = Statistic