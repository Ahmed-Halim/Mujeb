DB = require('../DB')

getQuestion = async (id) => { 
    const [result, ] = await DB.execute("SELECT * FROM question WHERE id = ?", [id]);
    return result
}

getAnswers = async (id) => { 
    const [result, ] = await DB.execute("SELECT * FROM answer WHERE question_id = ?", [id]);
    return result
}

getRelatedQuestions = async (related) => { 
    const [result, ] = await DB.execute("SELECT * FROM question WHERE id IN ("+related+")");
    return result
}
module.exports = { getQuestion, getAnswers, getRelatedQuestions }