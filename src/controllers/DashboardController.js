const Spot = require('../models/Spot')
module.exports = {
  async show(request, response) {
    const {
      userid
    } = request.headers

    const spots = await Spot.find({
      user: userid
    })
    return response.json(spots)
  }
}
