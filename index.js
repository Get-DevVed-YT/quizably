const quizably = require("quizably");

var questions = [
  {
    "q": "2+2",
    "a": "4",
    "e": "Add 2 and 2",
  },
  {
    "q": "2+3",
    "a": "5",
    "e": "Add 2 and 3",
  }
]

quizably(questions, 2, "5");