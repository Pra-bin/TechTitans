const quizeQuestion = document.getElementById('quize-question-collection');
// const header = document.getElementById('quiz-header');
// const footer = document.getElementById('quiz-footer');
// const progressBarContainer = document.getElementById('progress-bar-container');
// const main = document.getElementById('quiz-main');
const quizContainer = document.getElementById('quiz-container');
const questionCollection = Array.from(quizeQuestion.children);
const nextButton = document.getElementById('next-button');
const scoreBoard = document.getElementById('scoreboard-container');
const progressBar = document.getElementById('progress-bar');
const questionNumber = document.getElementById('question-number');

const restart = document.getElementById('restart-button');


let currentIndex = 0;
questionNumber.textContent = `${currentIndex + 1}/${questionCollection.length - 1}`;
function updateProgressBar() {
    const progress = (currentIndex / (questionCollection.length - 1)) * 100;
    progressBar.style.width = `${progress}%`;
    questionNumber.textContent = `${currentIndex + 1}/${questionCollection.length - 1}`;

}
updateProgressBar();
questionCollection.forEach((question, index) => {
    question.classList.add('d-none');
});
questionCollection[currentIndex].classList.remove('d-none');
questionCollection[currentIndex].classList.add('block');

nextButton.addEventListener('click', () => {
    if (currentIndex <= questionCollection.length - 1) {
        questionCollection[currentIndex].classList.remove('block');
        questionCollection[currentIndex].classList.add('d-none');
        currentIndex += 1;
        questionCollection[currentIndex].classList.remove('d-none');
        questionCollection[currentIndex].classList.add('block');

        updateProgressBar();
    }
    if (currentIndex === questionCollection.length - 1) {
        quizContainer.classList.add('d-none');

        scoreBoard.style.display = 'block';
    }

});


// document.addEventListener("DOMContentLoaded", () => {
//     const quizData = [
//         {
//             question: "What is 5 + 3?",
//             options: ["7", "8", "9", "10"],
//             correct: "8"
//         },
//         {
//             question: "What is 10 - 4?",
//             options: ["4", "5", "6", "7"],
//             correct: "6"
//         },
//         {
//             question: "What is 3 × 4?",
//             options: ["10", "11", "12", "13"],
//             correct: "12"
//         },
//         {
//             question: "What is 18 ÷ 3?",
//             options: ["4", "5", "6", "7"],
//             correct: "6"
//         },
//         {
//             question: "What is 2²?",
//             options: ["2", "4", "6", "8"],
//             correct: "4"
//         },
//         {
//             question: "What is 10 % 3?",
//             options: ["0", "1", "2", "3"],
//             correct: "1"
//         },
//         {
//             question: "What is the square root of 49?",
//             options: ["5", "6", "7", "8"],
//             correct: "7"
//         },
//         {
//             question: "What is 15 + 7 - 3?",
//             options: ["17", "18", "19", "20"],
//             correct: "19"
//         },
//         {
//             question: "What is 2 × (6 + 3)?",
//             options: ["12", "15", "18", "21"],
//             correct: "18"
//         },
//         {
//             question: "What is 24 ÷ 6?",
//             options: ["2", "3", "4", "5"],
//             correct: "4"
//         }
//         // Add more questions as needed
//     ];
//     let currentQuestionIndex = 0;
//     let score = 0;
//     let timerInterval;
//     const userAnswers = [];

//     const questionNumberElement = document.getElementById("question-number");
//     const questionTextElement = document.getElementById("question-text");
//     const optionsContainer = document.querySelector(".options");
//     const nextButton = document.getElementById("next-button");
//     const timerElement = document.getElementById("timer");
//     const scoreElement = document.getElementById("score");
//     const progressBar = document.getElementById("progress-bar");
//     const scoreboardContainer = document.getElementById("scoreboard-container");
//     const scoreboardBody = document.querySelector("#scoreboard tbody");
//     const restartButton = document.getElementById("restart-button");

//     // Function to save progress to localStorage
//     // function saveProgress() {
//     //     localStorage.setItem(
//     //         "quizProgress",
//     //         JSON.stringify({
//     //             currentQuestionIndex,
//     //             score,
//     //             userAnswers
//     //         })
//     //     );
//     // }

//     // Function to retrieve progress from localStorage
//     // function retrieveProgress() {
//     //     const savedProgress = localStorage.getItem("quizProgress");
//     //     if (savedProgress) {
//     //         const {
//     //             currentQuestionIndex: savedIndex,
//     //             score: savedScore,
//     //             userAnswers: savedAnswers
//     //         } = JSON.parse(savedProgress);
//     //         if (savedIndex < quizData.length) {
//     //             currentQuestionIndex = savedIndex;
//     //             score = savedScore;
//     //             userAnswers.push(...savedAnswers);
//     //             loadQuestion();
//     //         } else {
//     //             displayResults();
//     //         }
//     //     } else {
//     //         initializeQuiz();
//     //     }
//     // }

//     function shuffleArray(array) {
//         for (let i = array.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [array[i], array[j]] = [array[j], array[i]];
//         }
//         return array;
//     }

//     function initializeQuiz() {
//         shuffleArray(quizData);
//         loadQuestion();
//     }

//     function zloadQuestion() {
//         const currentQuestion = quizData[currentQuestionIndex];
//         questionNumberElement.textContent = `${currentQuestionIndex + 1}/${quizData.length
//             }`;
//         questionTextElement.textContent = currentQuestion.question;

//         optionsContainer.innerHTML = "";
//         const shuffledOptions = shuffleArray([...currentQuestion.options]);
//         shuffledOptions.forEach((option) => {
//             const label = document.createElement("label");
//             const input = document.createElement("input");
//             input.type = "radio";
//             input.name = "answer";
//             input.value = option;

//             const span = document.createElement("span");
//             span.textContent = option;

//             label.appendChild(input);
//             label.appendChild(span);
//             optionsContainer.appendChild(label);
//         });

//         updateProgressBar();
//         resetTimer();
//     }



//     function resetTimer() {
//         clearInterval(timerInterval);
//         let timeLeft = 30;
//         timerElement.textContent = timeLeft;

//         timerInterval = setInterval(() => {
//             timeLeft--;
//             timerElement.textContent = timeLeft;

//             // Color change when timer is running low
//             if (timeLeft <= 10) {
//                 timerElement.style.color = "#e74c3c"; // Change to red
//             }

//             // Add additional visual cues as needed (e.g., animations, background color changes)

//             if (timeLeft <= 0) {
//                 clearInterval(timerInterval);
//                 handleNextButtonClick(); // Automatically move to next question or end quiz
//             }
//         }, 1000);
//     }

//     function handleNextButtonClick() {
//         const selectedOption = document.querySelector(
//             'input[name="answer"]:checked'
//         );
//         if (selectedOption) {
//             userAnswers.push({
//                 question: quizData[currentQuestionIndex].question,
//                 yourAnswer: selectedOption.value,
//                 correctAnswer: quizData[currentQuestionIndex].correct
//             });

//             if (selectedOption.value === quizData[currentQuestionIndex].correct) {
//                 score++;
//                 scoreElement.textContent = `Score: ${score}`;
//             }
//         } else {
//             userAnswers.push({
//                 question: quizData[currentQuestionIndex].question,
//                 yourAnswer: "No answer selected",
//                 correctAnswer: quizData[currentQuestionIndex].correct
//             });
//         }

//         currentQuestionIndex++;
//         if (currentQuestionIndex < quizData.length) {
//             saveProgress(); // Save progress before loading next question
//             loadQuestion();
//         } else {
//             saveProgress(); // Save progress before displaying results
//             displayResults();
//         }

//         document
//             .querySelectorAll('input[name="answer"]')
//             .forEach((input) => (input.checked = false));
//     }

//     function displayResults() {
//         clearInterval(timerInterval);
//         questionNumberElement.textContent = "Quiz Completed";
//         questionTextElement.textContent = `Your score is ${score}/${quizData.length}`;

//         optionsContainer.innerHTML = "";
//         nextButton.style.display = "none";
//         scoreboardContainer.style.display = "block";
//         renderScoreboard();
//         localStorage.removeItem("quizProgress"); // Clear saved progress after displaying results
//     }

//     function renderScoreboard() {
//         scoreboardBody.innerHTML = "";
//         userAnswers.forEach((answer, index) => {
//             const row = document.createElement("tr");
//             const questionCell = document.createElement("td");
//             const yourAnswerCell = document.createElement("td");
//             const correctAnswerCell = document.createElement("td");

//             questionCell.textContent = `Q${index + 1}: ${answer.question}`;
//             yourAnswerCell.textContent = answer.yourAnswer;
//             correctAnswerCell.textContent = answer.correctAnswer;

//             row.appendChild(questionCell);
//             row.appendChild(yourAnswerCell);
//             row.appendChild(correctAnswerCell);
//             scoreboardBody.appendChild(row);
//         });
//     }

//     function restartQuiz() {
//         currentQuestionIndex = 0;
//         score = 0;
//         userAnswers.length = 0;
//         scoreElement.textContent = `Score: ${score}`;
//         nextButton.textContent = "Continue";
//         nextButton.style.display = "block";
//         scoreboardContainer.style.display = "none";
//         nextButton.removeEventListener("click", restartQuiz);
//         nextButton.addEventListener("click", handleNextButtonClick);
//         localStorage.removeItem("quizProgress"); // Clear saved progress on restart
//         initializeQuiz();
//     }

//     nextButton.addEventListener("click", handleNextButtonClick);
//     restartButton.addEventListener("click", restartQuiz);

//     // Check localStorage for saved progress when DOM is loaded
//     retrieveProgress();
// });
