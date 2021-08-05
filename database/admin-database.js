const { User } = require("../models");
const UserDatabase = require("./user-database");

class AdminDatabase extends UserDatabase {

  delete(user) {
    return document
  }

  changeRole(user) {
    return user
  }

  edit(staticPage) {
    return staticPage
  }

  add(permission) {
    return permission
  }

  delete(permission) {
    return permission
  }

  updatePermission(permission) {
    return permission
  }

  updateRole(role) {
    return role
  }

  getStatistics() {
    // const statistic = new Statistic()
    // statistic.totalDocument = this.documents.length || 0
    // statistic.waitingDocument = this.documents.filter(o => o.state == 1).length || 0
    // statistic.examiningDocument = this.documents.filter(o => o.state == 2).length || 0
    // statistic.rejectedDocument = this.documents.filter(o => o.state == 3).length || 0
    // statistic.completedDocument = this.documents.filter(o => o.state == 4).length || 0
    // return statistic
  }
}

module.exports = AdminDatabase(User)