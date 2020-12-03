import Property from "./Property"

export default class JsonShcemaPropertiesBuilder {
  constructor() {
    this.properties = []
  }

  getProperties() {
    return this.properties;
  }

  loadProperties(schema, level = [], parent = null) {
    const properties = this.getSchemaPropertiesDef(schema)
    const required = schema.required || []
    for (let propKey in properties) {
      const propDef = properties[propKey]
      const isReq = required.indexOf(propKey) !== -1
      const disabled = propDef.type === "object" || ((propDef.items) && propDef.items.type === "object")
      const complexArray = propDef.type === "array" && disabled
      const newProps = new Property(propKey, propDef.description, isReq, level,
        this.getExtraPropterties(propDef), complexArray, disabled, parent)
      this.properties.push(newProps)
      this.processChildren(propDef, level, propKey, newProps)
    }
  }

  processChildren(propDef, level, propKey, parent) {
    const newLevel = [...level, propKey]
    if (propDef.type === "object")
      this.loadProperties(propDef, newLevel, parent)
    if (propDef.type === "array")
      this.loadProperties(propDef.items, newLevel, parent)
  }


  getSchemaPropertiesDef(schema) {
    if (schema["$ref"])
      throw new Error("no ref available")
    return schema.properties;
  }

  getExtraPropterties(propDef) {
    return {
      type: propDef.type
    }
  }

}
