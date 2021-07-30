const {UserDatabase} = require('./database/')


class GeneralMethods {
  getRoles() {
    return {
      "USER": 1,
      "TRANSLATOR": 2,
      "ADMIN": 3
    }
  }

  findUserBy(id) {
    return UserDatabase.findBy("id",id)
  }

  findUser(searchKey) {
    return UserDatabase.findBy("name",searchKey)
  }

  getStates() {
    return {
      "WAITING": 1,
      "EXAMINING": 2,
      "REJECTED": 3,
      "READY_FOR_DOWNLOAD": 4
    }
  }

  getUserInfo(user) {
    const results = []
    return results
  }

  // dataToModel(data,model){
  //   return data.map(Object.create(model))
  // }
}

module.exports = GeneralMethods