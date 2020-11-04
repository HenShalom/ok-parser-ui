import Property from "./Property"

export default class JsonShcemaPropertiesBuilder {
  constructor() {
    this.properties = []
  }

  getProperties() {
    return this.properties;
  }

  loadProperties(schema, level = []) {
    const properties = this.getSchemaPropertiesDef(schema)
    const required = schema.required || []
    for (let propKey in properties) {
      const propDef = properties[propKey]
      const isReq = required.indexOf(propKey) !== -1
      const newProps = new Property(propKey, propDef.description, isReq, level, this.getExtraPropterties(propDef))
      this.properties.push(newProps)
      this.processChildren(propDef, level, propKey)
    }
  }

  processChildren(propDef, level, propKey) {
    const newLevel = [...level, propKey]
    if (propDef.type === "object")
      this.loadProperties(propDef, newLevel)
    if (propDef.type === "array")
      this.loadProperties(propDef.items, newLevel)
  }


  getSchemaPropertiesDef(schema) {
    if (schema["$ref"])
      throw new Error("no ref available")
    return schema.properties;
  }

  getExtraPropterties() {
    return null;
  }

}
