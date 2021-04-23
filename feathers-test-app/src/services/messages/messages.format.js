//const { ObjectId } = require('bson')
const { ObjectID } = require('mongodb')
const { feathersValidator, ANY } = require('../../../../dist/Sandhands-commonjs.js')

module.exports = feathersValidator({
  _: {
    text: String,
    _id: { _: ANY, validate: data => ObjectID.isValid(data) }
  },
  optionalProps: ['_id'],
  strict: true
})
