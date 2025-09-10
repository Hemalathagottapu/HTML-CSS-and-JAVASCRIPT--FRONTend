

// // DOM Elements
// const startScreen = document.getElementById("start-screen");
// const quizScreen = document.getElementById("quiz-screen");
// const resultScreen = document.getElementById("result-screen");
// const startButton = document.getElementById("start-btn");
// const questionText = document.getElementById("question-text");
// const answersContainer = document.getElementById("answers-container");
// const currentQuestionSpan = document.getElementById("current-question");
// const totalQuestionsSpan = document.getElementById("total-questions");
// const scoreSpan = document.getElementById("score");
// const finalScoreSpan = document.getElementById("final-score");
// const maxScoreSpan = document.getElementById("max-score");
// const resultMessage = document.getElementById("result-message");
// const restartButton = document.getElementById("restart-btn");
// const progressBar = document.getElementById("progress");

// // Quiz questions
// const quizQuestions = [
//   {
//     question: "What is the capital of France?",
//     answers: [
//       { text: "London", correct: false },
//       { text: "Berlin", correct: false },
//       { text: "Paris", correct: true },
//       { text: "Madrid", correct: false },
//     ],
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     answers: [
//       { text: "Venus", correct: false },
//       { text: "Mars", correct: true },
//       { text: "Jupiter", correct: false },
//       { text: "Saturn", correct: false },
//     ],
//   },
//   {
//     question: "What is the largest ocean on Earth?",
//     answers: [
//       { text: "Atlantic Ocean", correct: false },
//       { text: "Indian Ocean", correct: false },
//       { text: "Arctic Ocean", correct: false },
//       { text: "Pacific Ocean", correct: true },
//     ],
//   },
//   {
//     question: "Which of these is NOT a programming language?",
//     answers: [
//       { text: "Java", correct: false },
//       { text: "Python", correct: false },
//       { text: "Banana", correct: true },
//       { text: "JavaScript", correct: false },
//     ],
//   },
//   {
//     question: "What is the chemical symbol for gold?",
//     answers: [
//       { text: "Go", correct: false },
//       { text: "Gd", correct: false },
//       { text: "Au", correct: true },
//       { text: "Ag", correct: false },
//     ],
//   },
// ];
// //Quiz state was
// let currentQuestionIndex=0;
// let score=0;
// let answerDisabled=false;
// totalQuestionsSpan.textcontent=quizQuestions.length;
// maxScoreSpan .textcontent=quizQuestions.length;
// scoreSpan.textContent=0;
// //event listerner
// startButton.addEventListener("click",startQuiz)
// restartButton.addEventListener("click",restartQuiz)
// function startQuiz(){
//    currentQuestionIndex=0;
//    score=0;
//    scoreSpan.textcontent=0;
//    startScreen.classList.remove("active");
//    quizScreen.classList.remove("active");

//    showQuestion()
// }
// function showQuestion(){
//     //reset state
//     answersDisabled=false;
//     const currentQuestion=quizQuestions[currentQuestionIndex];
//     currentQuestionSpan.textContent=currentQuestionIndex+1;
//     const progressPercent=[currentQuestionIndex/quizQuestions.length*100]
//     progressBar.style.width=progressPercent+"%";


//     questionText .textContent=currentQuestion.question

//     //todo:explai this in a conatiner

//    answersContainer.innerHTML="";

//     currentQuestion.answers.forEach(answer=>{
//         const button=document.createElement("button")
//         button.textcontent=answer.text;
//         button.classList.add("answer-btn")

//         //what is dataset?
//         button.dataset.correct=answer.correct;
//         button.addEventListener("click",SelectAnswer)
//         answersContainer.appendChild(button)
//     })

// }

// function SelectAnswer(event){
//   //optimization check
//   if(answerDisabled)return

//   answerDisabled=false;
//   const selectedButton=event.target;
//   const isCorrect=selectedButton.dataset.correct==="true"
//   //todo:expain this in a sec
//   Array.from(answersContainer,Children).forEach(button=>{
//     if(button.dataset.correct==="true"){
//       button.ClassList.add("correct")
//     }
//     else if(button===selectedButton)
//     {
//       button.ClassList.add("incorrect");
//     }
//   });
//   if(iscorrect)
//   {
//     score++;
//     scoreSpan.textContent=score
//   }
//   setTimeout(()=>{
//     currentQuestionIndex++;
//     //check if there are more questions or if the quiz is over
//     if(currentQuestionIndex<quizQuestions.length)
//     {
//       showQuestion()
//     }
//     else{
//       showResults()
//     }
//   },1000)
// }
// function showResults(){
//   quizScreen.ClassList.remove("active")
//   resultScreen.ClassList.add("active")
//   finalScoreSpan.textContent=score;
//   const percentage=(score/quizQuestions.length)*100
//   if(percentage===100)
//   {
//     resultMessage.textContent="perfect! you're a genius"
//   }
//   else if(percentage>=80)
//   {
//     resultMessage.textContent="greate job! you know your stuff!"
//   }
//   else if(percentage>=60)
//   {
//     resultMessage.textContent="good effort! keep learing!"
//   }
//   else if(percentage>=40)
//   {
//     resultMessage.textContent="not bad! try again to improve"
//   }
//   else{
//     resultMessage.textContent="keep studying ! you will get better"
//   }
// }

// function restartQuiz(){
//     resultScreen.ClassList.remove("active")
//     startQuiz()
// }

















// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Quiz questions
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// Event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
function startQuiz() {
  
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  answerDisabled = false;
  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answerDisabled) return;
  answerDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;
  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You’ll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}