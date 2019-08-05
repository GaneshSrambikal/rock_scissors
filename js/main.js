const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard ={
    player: 0,
    computer:0
}

//play game
function play(e){
    restart.style.display = 'inline-block';
   const playerChoice = e.target.id;
   const computerChoice = getComputerChoice();
   const winner = getWinner(playerChoice,computerChoice);
   showWinners(winner,computerChoice);
}

//get computer choice
function getComputerChoice(){
    const comp_action = Math.random();
    if(comp_action < 0.34){
        return 'rock';
    }
    else if(comp_action <=0.67){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}
//get game winner 
function getWinner(p,c){
    if(p === c){
        return 'draw';
    }
    else if(p === 'rock'){
        if(c === 'paper'){
            return 'you loss';
        }
        else{
            return 'you win'
        }
    }
    else if(p === 'paper'){
        if(c === 'scissors'){
            return 'you loss';
        }
        else{
            return 'you win'
        }
    }
    else if(p === 'scissors'){
        if(c === 'rock'){
            return 'you loss';
        }
        else{
            return 'you win'
        }
    
}
}

function showWinners(winner,computerChoice){
    if(winner === 'you win'){
        //incr player score
        scoreboard.player++;
        // show modal result
        result.innerHTML =`
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>They Chose <strong>${computerChoice}</strong></p>
        `;
    }else if(winner ==='you loss'){
        //incr computer score
        scoreboard.computer++;
        //show modal result
        result.innerHTML =`
        <h1 class="text-lose">You Loss</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>They Chose <strong>${computerChoice}</strong></p>
        `;
    }
    else{
        //show modal result
        result.innerHTML =`
        <h1>It's a Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>They Chose <strong>${computerChoice}</strong></p>
        `;
    }
    score.innerHTML =`
    <p>You : ${scoreboard.player}</p>
    <p>Random :${scoreboard.computer}</p>
    `;

    modal.style.display = 'block';
}

//clear modal
function clearModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

//restart game
function resetGame(){
    restart.style.display = 'none';
    score.innerHTML =`
    <p>You : ${scoreboard.player = 0}</p>
    <p>Random :${scoreboard.computer = 0}</p>
    `;
}

//event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click',clearModal);
restart.addEventListener('click',resetGame);