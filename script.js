const randNum1 = Math.ceil(Math.random() * 10);
const randNum2 = Math.ceil(Math.random() * 10);

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

console.log(+inputEl.value)

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

function showAndHide() {
    const x = document.getElementById('answer');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

