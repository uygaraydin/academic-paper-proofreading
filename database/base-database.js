const fs = require('fs')
const flatted = require('flatted')
const createUserModelFromObjectByRole = require("../lib/create-user-model-from-object-by-role");

class BaseDatabase {
  constructor(model) {
    this.model = model
    this.filename = model.name.toLowerCase()
  }

  save(objects) {
    fs.writeFileSync(`./${this.filename}.json`, flatted.stringify(objects, null, 2))
  }

  load() {
    const file = fs.readFileSync(`./${this.filename}.json`, 'utf8')
    const objects = flatted.parse(file)
    return objects.map(createUserModelFromObjectByRole)
  }

  insert(object) {
    const objects = this.load()
    this.save(objects.concat(object))
  }

  remove(index) {
    const objects = this.load()
    objects.splice(index, 1)
    this.save(objects)
  }

  update(object) {
    const objects = this.load()
    const index = objects.findIndex(o => o.id == object.id)

    if (index == -1) throw new Error(`Cannot find ${this.model.name} instance with id ${object.id}`)

    objects.splice(index, 1, object)
    this.save(objects)
  }

  findBy(property, value) {
    return this.load().find(o => o[property] == value)
  }
}

module.exports = BaseDatabase