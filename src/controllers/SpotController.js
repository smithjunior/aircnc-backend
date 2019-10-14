const Spot = require('../models/Spot')
const User = require('../models/User')
module.exports = {
  async index(request, response) {

    const {
      tech
    } = request.query
    const spots = await Spot.find({
      techs: tech
    })
    return response.json(spots)
  },
  async store(request, response) {
    const {
      filename
    } = request.file

    const {
      company,
      price,
      techs
    } = request.body

    const {
      userid
    } = request.headers

    const user = await User.findById(userid)

    if (!user) {
      return response.status(400).json({
        error: 'User does not exists!'
      })
    }

    const spot = await Spot.create({
      user: userid,
      thumbmail: filename,
      company,
      price,
      techs: techs.split(',').map(tech => tech.trim())
    })
    return response.json(spot)
  }
}
