const models = require("../models")

module.exports = {
    findAll: async (req, res) => {
        const dishes = await models.dish.findAll()
        return res.status(200).json(dishes)
    }
}