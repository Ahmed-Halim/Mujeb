var express = require('express');
var router = express.Router();
const UserController = require('../controller/UserController')

router.get('/', UserController.getUsers)

module.exports = router;