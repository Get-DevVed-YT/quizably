# Quizzably
Quizably is a package for building quiz or question interfaces fast. It is super simple to use and you can adapt it to most apps.

Here's an example
```javascript
const quizzably = require("quizzably");

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

quizzably(questions, 2, "5");
```
The quizably function takes in 3 parameters.

`qObj`: The first parameter, an array of JSON objects each having a `q` field (the question), `a` field (the answer), and `e` field (the explanation).

`qNum`: The second parameter, the number of the question. NOTE: Do not use the JSON position for the number, use the actual number of the question (or the JSON position + 1).

`qAns`: The answer that was given in response to the question. We will check this against the `a` field in the JSON object.

It returns one of 2 JSON objects depending on whether the `qAns` param matches the `a` field.

Correct:
```json
{ question: "question", correct: true };
```
Incorrect:
```json
{ question: "question", correct: false, answer: "answer", expl: "explanation" }
```
