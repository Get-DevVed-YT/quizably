module.exports = function(qObj, qNum, qAns){
let question = JSON.parse(JSON.stringify(qObj[qNum - 1])).q;
let answer = JSON.parse(JSON.stringify(qObj[qNum - 1])).a;
let expl = JSON.parse(JSON.stringify(qObj[qNum - 1])).e;
let correct = true;
if(answer == qAns){
    return { question: question, correct: correct };
 } else {
    correct = false;
    return { question: question, correct: correct, answer: answer, expl: expl };
 }
}