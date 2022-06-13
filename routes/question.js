var express = require('express');
var router = express.Router();
const QuestionController = require('../controller/QuestionController')

router.get('/:id([0-9]+)', QuestionController.getQuestion)

module.exports = router;


