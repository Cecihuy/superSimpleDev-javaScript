let score = JSON.parse(localStorage.getItem('score')) || {wins: 0, losses: 0, ties: 0};
    /*
    if(score === null ){
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      };
    }
    */
    updateScoreElement();
    function updateScoreElement(){
      document.querySelector('.js-score').innerHTML =
      `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
    function pickComputerMove(){
      const randomNumber = Math.random();
      let computerMove = '';
      
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
        computerMove = 'scissors';
      }
      return computerMove;
    }
    
    document.querySelector('.js-move-button-rock')
      .addEventListener('click', ()=>{
        playGame('rock');
      });
    document.querySelector('.js-move-button-paper')
      .addEventListener('click', () => {
        playGame('paper');
      });
    document.querySelector('.js-move-button-scissors')
      .addEventListener('click', () => {
        playGame('scissors');
      });
      
      //document.body.addEventListener()
      document.querySelector('.js-input').addEventListener('keydown', (event)=>{
        if(event.key === 'r'){
          playGame('rock');
        }else if(event.key === 'p'){
          playGame('paper');
        }else if(event.key === 's'){
          playGame('scissors');
        }
      });
    
    function playGame(playerMove){
      const computerMove = pickComputerMove();
      let result = '';
      
      if(playerMove === 'scissors'){
        if (computerMove === 'rock') {
          result = 'you lose';
        } else if (computerMove === 'paper') {
          result = 'you win';
        } else if (computerMove === 'scissors') {
          result = 'tie';
        }
      }else if(playerMove === 'paper'){
        if (computerMove === 'rock') {
          result = 'you win';
        } else if (computerMove === 'paper') {
          result = 'tie';
        } else if (computerMove === 'scissors') {
          result = 'you lose';
        }
      }else if(playerMove === 'rock'){
        if (computerMove === 'rock') {
          result = 'tie';
        } else if (computerMove === 'paper') {
          result = 'you lose';
        } else if (computerMove === 'scissors') {
          result = 'you win';
        }
      }
      if(result === 'you win'){
        score.wins = score.wins + 1;
      }else if(result === 'you lose'){
        score.losses += 1;
      }else if(result === 'tie'){
        score.ties++;
      }
      localStorage.setItem('score', JSON.stringify(score));
      updateScoreElement();
      document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-moves').innerHTML =
      `You <img class="move-icon" src="images/${playerMove}-emoji.png">
      <img class="move-icon" src="images/${computerMove}-emoji.png"> Computer`;
    }
    let isAutoPlay = false;
    let intervalId;
    
    function autoPlay(){
      if(isAutoPlay === false){
        intervalId = setInterval(()=>{
          const playerMove = pickComputerMove();
          playGame(playerMove);
        },1000);
        isAutoPlay = true;
      }else{
        clearInterval(intervalId);
        isAutoPlay = false;
      }
    };