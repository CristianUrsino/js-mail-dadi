const validEmail = [
    'hello@gmail.com',
    'world@yahoo.com',
    'lorem@libero.it'
];

const sendBtn = document.querySelector('.btn-primary');
let flagValidEmail = false;
const textResult = document.getElementById('result');
textResult.classList.add('d-none');

sendBtn.addEventListener('click', function(){
    const email = document.getElementById('email').value;
    let resultMessage;
    flagValidEmail = false;
    for(let i = 0; i < validEmail.length && !flagValidEmail; i++){
        if(validEmail[i] === email){
            flagValidEmail = true;
            resultMessage = `
            <h2>
                ACCESSO RIUSCITO
            </h2>
            `;
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


// Utility
function randomInteger(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
   }