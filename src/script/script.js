const state = {
    // acessando o HTML para pegar as Tags com as Classes indicadas
    view:{
        squeres: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values:{
        // Criado valores para ser usados nas funções
        
        gameVelocity: 1000,
        hitPosition: 0,
        result:0,
        currentTime: 60,
    actions:{
        // a Função serInterval() ele chama a Função a cada X tempo em MILISSEGUNDOS
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000)
    }
    }
};
// Função para por o Inimigo aleatoriamente nas caixas
function randomSquare(){
    // Selecionado as tags que contem a .square
    state.view.squeres.forEach((square) => {
        // removendo a .enemy das tags
        square.classList.remove("enemy");
    });
    
    // Criando um numero aleatorio de 1 a 9 com a 
    // Biblioteca Math() do Javascript
    // Math.floor() serve para pegar somente o numero inteiro
    // Math.random() serve para pegar um numero aleatorio
    let randomNumber = Math.floor(Math.random() * 9);

    // selecionando uma .square com o numero aleatorio
    let randomSquare = state.view.squeres[randomNumber];
    // coloado a .enemy na tag com a .square selecionada
    randomSquare.classList.add("enemy");
    // Guardando o ID do .square que foi sorteado
    state.values.hitPosition = randomSquare.id

}
// Movendo o inimigo nos blocos
function moveEnemy() {
    


}
// Função para pegar o clique e fazer o ponto
function addListenerHitBox() {
    state.view.squeres.forEach((square) => {
        // o addEventListener() é uma função do JS e ele fica escultando ate ter um evento e tem um callback() como retorno
        // o "mousedown" é o evento de clique do mouse.
        square.addEventListener("mousedown", ()=> {
            // comparando se o clique foi no mesmo .square do .enimy
            if(square.id === state.values.hitPosition){
                state.values.result++
                // com o textContent nos mudamos no documento o valor
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null
                playSound()
            }
        })
    });
}
// Contagem regressiva do tempo
function countDown() {
    state.values.currentTime--;
    // Colocando o tempo visivel, a função textContent() altera o Documento HTML
    state.view.timeLeft.textContent = state.values.currentTime;
    if(state.values.currentTime <= 0){
        
        alert("Game Over! O seu Resultado foi: " + state.values.result);
        // resentento intervalos das actions
        clearInterval(statea.actions.timerId)
        clearInterval(state.actions.countDownTimerId)

    }
}

// colocando audio no acerto do .enemy
function playSound() {
    // adicionando um audio com o "new Audio"
    let audio = new Audio("../src/sounds/hit.m4a");
    // Configurando o Volume do audio
    audio.volume = 0.2
    // Tocando o audio que foi adicionado
    audio.play()
}

function initialize() {
    addListenerHitBox();
}

initialize()