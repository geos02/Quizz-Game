// Selectores
const questionElement = document.querySelector('.quizz-question');

const input1 = document.querySelector('#answer-1');
const input2 = document.querySelector('#answer-2');
const input3 = document.querySelector('#answer-3');

const label1 = document.querySelector('#label-1');
const label2 = document.querySelector('#label-2');
const label3 = document.querySelector('#label-3');

const scoreText = document.querySelector('.score-text');

const radioButtons = document.querySelectorAll('.answer-input');
const button = document.querySelector('.quizz-button');

// Array de preguntas
const data = [
    {
        question : 'Who is the president of the EEUU?',
        a1 : 'Joe Biden',
        a2 : 'Donald Trump',
        a3 : 'Bill Clinton',
        correct : 'a'
    },
    {
        question : 'What is the capital of Spain?',
        a1 : 'Zaragoza',
        a2 : 'Barcelona',
        a3 : 'Madrid',
        correct : 'c'
    },
    {
        question : 'Which team won the 2022 Champions League?',
        a1 : 'Real Zaragoza',
        a2 : 'Real Madrid',
        a3 : 'A.C. Milán',
        correct : 'b'
    }
]

let currentQuestion = 0;
let score = 0;
const maxScore = data.length;

createQuestion();

function createQuestion() {

    if(currentQuestion >= data.length){
        finishQuizz();
        return;
    }

    const { question, a1, a2, a3 } = data[currentQuestion];
    questionElement.textContent = question;

    input1.value = 'a';
    input2.value = 'b';
    input3.value = 'c';

    label1.textContent = a1;
    label2.textContent = a2;
    label3.textContent = a3;
}

function nextQuestion() {
    
    currentQuestion++;
    createQuestion();
    
}

function checkAnswer(answer) {

    const { correct } = data[currentQuestion];
    console.log(`Has seleccionado: ${answer} y la respuesta correcta es ${correct}`);
    if(answer === correct)
        score++;
    
    resetRadioButtons();
}

function finishQuizz() {
    document.querySelector('.quizz-container').remove();
    document.querySelector('.score-container').style.display = 'block';

    scoreText.textContent = `Score: ${score}/${maxScore}!! Congratulations!!`

    // vuelve a cargar la pagína
    setTimeout(() => {
        location.reload();
    }, 3000)
}

function resetRadioButtons() {

    radioButtons.forEach( radioButton => radioButton.checked = false );
}

button.addEventListener('click', () => {
    
    for(let i=0; i < radioButtons.length; i++) {
        if(radioButtons[i].checked) {
            const answer = radioButtons[i].value;
            checkAnswer(answer);
            break;
        }
    }

    nextQuestion();
});

