export default class Property {
  constructor(key, description, isRequired, level, extraProperties, complexArray, disabled, parent) {
    this.key = key
    this.description = description
    this.isRequired = isRequired
    this.level = level
    this.extraProperties = extraProperties
    this.visable = true
    this.disabled = disabled
    this.parent = parent
    this.complexArray = complexArray
    this.childOfComplex = (parent && parent.complexArray)
    if (this.parent)
      this.callback = this.parent.register(this.key)
    this.children = {}
  }

  register = (childKey) => {
    this.children[childKey] = true
    return this.clearChild;
  }

  clearChild = (childKey) => {
    this.children[childKey] = false
    this.visable = Object.values(this.children).reduce((a, b) => a || b)
    if (!this.visable && this.callback)
      this.callback(this.key)
  }

  hideProperty() {
    this.visable = false
    if (this.callback)
      this.callback(this.key)
  }

  getID() {
    return [...this.level, this.key].join("-")
  }
}