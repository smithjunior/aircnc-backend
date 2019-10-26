const mongoose = require('mongoose')

const SpotSchema = new mongoose.Schema({
  thumbmail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true
  }
})

SpotSchema.virtual('thumbmail_url').get(function () {
  return `${process.env.AIRCNC_API_HOST}files/${this.thumbmail}`
})

module.exports = mongoose.model('Spot', SpotSchema)
