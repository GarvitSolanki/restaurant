const models = require("../models")

module.exports = {
    addToCart: async (req, res) => {
        const {userId, itemId} = req.body
        
        return res.status(200).json(dishes)
    }
}