const validEmail = [
    'hello@gmail.com',
    'world@yahoo.com',
    'lorem@libero.it'
];

const sendBtn = document.querySelector('.btn-primary');
let flagValidEmail = false;
const textResult = document.getElementById('result');
textResult.classList.add('d-none');
const playBtn = document.querySelector('.btn-success');
const textPlay = document.getElementById('game-result');
textPlay.classList.add('d-none');

sendBtn.addEventListener('click', function(){
    const email = document.getElementById('email').value;
    let resultMessage;
    flagValidEmail = false;
    for(let i = 0; i < validEmail.length && !flagValidEmail; i++){
        if(validEmail[i] === email){
            flagValidEmail = true;
            resultMessage = `
            <h2>
                ACCESSO RIUSCITO, PUOI CLICCARE "PLAY"
            </h2>
            `;
            playBtn.removeAttribute('disabled');
        }
    }
    if(!flagValidEmail){
        resultMessage =`
        <h2>
            ACCESSO NON RIUSCITO, EMAIL NON CORRETTA
        </h2>
        `;
    }
    textResult.innerHTML = resultMessage;
    textResult.classList.remove('d-none');
});

playBtn.addEventListener('click',function(){
    const playerNumber = randomInteger(1,6);
    const computerNumber = randomInteger(1,6);
    textPlay.classList.remove('d-none');
    textPlay.innerHTML = `
    <h3>
        hai ottenuto il numero: ${playerNumber};
        <br>
        il computer ha il numero: ${computerNumber};
    <h3>
    `;
    if(playerNumber > computerNumber){
        textPlay.innerHTML += `
        <h2>
            Hai vinto
        </h2>
        `;
    }else{
        textPlay.innerHTML += `
        <h2>
            Non hai vinto
        </h2>
        `;
    }
})

// Utility
function randomInteger(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
   }