const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();
router.get('/', (req, res) => res.send('This is root!'))
router.get('/dish', controllers.Dish.findAll)
router.get('/User',controllers.User.findAll)
router.post('/User/signUp',controllers.User.create)
router.post('/User/signIn',controllers.User.signIn)

module.exports = router