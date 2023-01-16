//const randNum1 = Math.ceil(Math.random() * 10);
//const randNum2 = Math.ceil(Math.random() * 10);

const randNum1 = Math.floor(Math.random() * (9 - 2 + 1) + 2);
const randNum2 = Math.floor(Math.random() * (9 - 2 + 1) + 2);

const formEl = document.getElementById('form');
const scoreEl = document.getElementById('score');
const questionEl = document.getElementById('question');
const inputEl = document.getElementById('input');

let score = JSON.parse(sessionStorage.getItem('score'));

if (!score) {
    score = 0;
}

questionEl.innerText = `What is ${randNum1} multiplied by ${randNum2}?`

const correctAns = randNum1 * randNum2

scoreEl.innerText = `Score: ${score}`;

formEl.addEventListener('submit', ()=>{
    const userAns = +inputEl.value
    if (correctAns === userAns) {
        score++
        updateScoreDisplay();
    } else {
        score--
        updateScoreDisplay();
    }
})


const updateScoreDisplay = ()=> {
    sessionStorage.setItem('score', JSON.stringify(score));
}

/*peek section*/


/* save the span with the revealed correct answer to the answerEl variable. If,when the code runs, the display style of answerEl is 'none', then it should be set equal to block instead. If display style is NOT set to none, it should be switched to none. The inner text of answerEl should be set equal to the variable correctAns THIS ONLY TAKES PLACE AFTER <button> has been clicked. the function is triggered by onclick event*/


/*shows correct answer when button is pushed*/

function showAndHide() {
    const answerEl = document.getElementById('answer');
    if (answerEl.style.display == 'none') {
        answerEl.style.display = 'block';
    } else {
        answerEl.style.display = 'none';
    }
    answerEl.innerText = correctAns;
}

let count = JSON.parse(sessionStorage.getItem('count'));

if (count === null) {
    count = 0;
}

if (count >= 5) {
    const showEl = document.getElementById('show');
    showEl.style.display = 'none';
}

document.getElementById('peeks').innerText = `Peeks used: ${count}/5`

const counterFunc = ()=> {
    count++;
    document.getElementById('peeks').innerText = `Peeks used: ${count}/5`
    updateSessionStoragePeeks();
}

const updateSessionStoragePeeks = ()=> {
    sessionStorage.setItem('count', JSON.stringify(count));
}










