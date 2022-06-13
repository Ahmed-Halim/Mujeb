const QuestionModel = require('../models/QuestionModel')

getQuestion = async (req, res, next) => {
    try {
        const [Question] = await QuestionModel.getQuestion(req.params.id)
        Question.answers = await QuestionModel.getAnswers(req.params.id)
        Question.relatedQuestions = await QuestionModel.getRelatedQuestions(Question.related)
        //console.log(Question)
        res.render('question', Question)
    } catch (error) {
        res.status(404).render('error');
    }
}

module.exports = { getQuestion }