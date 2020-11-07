export default class Property {
  constructor(key, description, isRequired, level, extraProperties) {
    this.key = key
    this.description = description
    this.isRequired = isRequired
    this.level = level
    this.extraProperties = extraProperties
    this.visable = true
  }

  getID() {
    return [...this.level, this.key].join("-")
  }
}