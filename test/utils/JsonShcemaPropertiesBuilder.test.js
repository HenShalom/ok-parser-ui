import assert from 'assert'
import { simpleSchmea, deptSchema } from './data/jsonSchema'
import JsonShcemaPropertiesBuilder from '../../src/utils/jsonschema/JsonShcemaPropertiesBuilder'

describe('JsonShcemaPropertiesBuilder', function () {
  describe('#loadProperties()', function () {
    it('should return basic proprties', function () {
      const builder = new JsonShcemaPropertiesBuilder()
      builder.loadProperties(simpleSchmea)
      assert.deepEqual(builder.getProperties().map(i => i.key), ["firstName", "lastName", "age"]);
    });


    it('should return complex proprties', function () {
      const builder = new JsonShcemaPropertiesBuilder()
      builder.loadProperties(deptSchema)
      assert.deepEqual(builder.getProperties().map(i => i.key), ["fruits", "vegetables", "veggieName", "veggieLike"]);
    });

    it('check levels', function () {
      const builder = new JsonShcemaPropertiesBuilder()
      builder.loadProperties(deptSchema)
      assert.deepEqual(builder.getProperties().find(i => i.key === "veggieName").level, ["vegetables"]);
    });
  });
}); 