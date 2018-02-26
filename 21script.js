

var scores, roundscore,activePlayer;
init();

document.querySelector('.btn-roll').addEventListener('click', function(){
	//1.Random Number

	var dice= Math.floor(Math.random()*6)+1;

	//2.Display the Result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-'+dice+'.png'; 
	
	// 3. update the round score if the rolled num is not 1
	if(dice !== 1){
		roundscore += dice;
		document.querySelector('#current-'+ activePlayer).textContent = roundscore;

	}else{
		nextPlayer();
	}
});


document.querySelector('.btn-hold').addEventListener('click',function(){
	//Add current score to global score
	scores[activePlayer] += roundscore;


	//Update the UI
	document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

	//Check the winner
if(scores[activePlayer]>=100){
		document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-'+[activePlayer]+'-panel').classList.add('winner');
		document.querySelector('.player-'+[activePlayer]+'-panel').classList.remove('active');
}
else{
	nextPlayer();

}
	

});

function nextPlayer(){
			//Next Player
		activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
		roundscore =0;
		document.getElementById('current-0').textContent ='0';
		document.getElementById('current-1').textContent = '0';
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector('.dice').style.display = 'none';
		console.log('	Testting')
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
	scores = [0,0];
    roundscore =0;
    activePlayer =0;

	document.querySelector('.dice').style.display = 'none';


	document.getElementById('score-0').textContent ='0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent ='0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent='Player 1';
	document.getElementById('name-1').textContent='Player 2';
}




