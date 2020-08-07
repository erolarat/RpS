let userScore = 0;
let computerScore = 0;
let userScoreSpan = document.getElementById("user-score");
let compScoreSpan = document.getElementById("computer-score");
let resultP = document.querySelector('.result > p')
const rockButton = document.getElementById("r");
const paperButton = document.getElementById("p");
const scissorButton = document.getElementById("s");


    getCompCoice = () => {
    let coices = ['r','p','s'];
    let randomNumbers = Math.floor(Math.random() * 3);
    return coices[randomNumbers];
}

    converted = (letter) => {
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    return 'Scissors'
}

    win = (userCoice, compCoice) => {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${converted(userCoice)} beats ${converted(compCoice)} You Win!!`
}

    lose = (userCoice, compCoice) => {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${converted(userCoice)} loses to ${converted(compCoice)} You lost!!`
}

    draw = (userCoice, compCoice) => {
    resultP.innerHTML = `${converted(userCoice)} same ${converted(compCoice)} Same Choice!!`
}

    function play(userCoice) {
    let compCoice = getCompCoice();
    switch (userCoice + compCoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win()
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose()
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw()
            break;
    }
}

main = () => {
    rockButton.addEventListener('click', function() { 
        play('r')
})
    paperButton.addEventListener('click', function() { 
        play('p')  
})
    scissorButton.addEventListener('click', function() { 
        play('s')  
})}

main();