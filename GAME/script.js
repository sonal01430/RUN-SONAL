score = 0;
cross = true;

audiogo = new Audio('gameover.mp3');
audio = new Audio('game.mp3');
setTimeout(() => {
	audio.play()
	
}, 1000);


document.onkeydown = function(e){
	console.log("Key Code is: " , e.keyCode)
	if(e.keyCode==38)
	{
		sonal = document.querySelector('.sonal');
		sonal.classList.add('animateSonal');
		setTimeout(() => {
			sonal.classList.remove('animateSonal')
		}, 700);
}
    if(e.keyCode==39)
	{
		sonal = document.querySelector('.sonal');
		sonalX = parseInt(window.getComputedStyle(sonal, null).getPropertyValue('left'));
        sonal.style.left = sonalX + 112 + "px";		
}
    if(e.keyCode==37)
	{
		sonal = document.querySelector('.sonal');
		sonalX = parseInt(window.getComputedStyle(sonal, null).getPropertyValue('left'));
        sonal.style.left = sonalX - 112 + "px";		
}
}

setInterval(() => {
	sonal = document.querySelector('.sonal');
	gameOver = document.querySelector('.gameOver');
	obstacle =  document.querySelector('.obstacle');
	
	sx = parseInt(window.getComputedStyle(sonal, null).getPropertyValue('left'));
	sy = parseInt(window.getComputedStyle(sonal, null).getPropertyValue('bottom'));
	
	ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
	oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));
	
	offsetX = Math.abs(sx-ox);
	offsetY = Math.abs(sy-oy);
	console.log(offsetX,offsetY)
	
	if(offsetX<73 && offsetY<52)
	{
		sonalB = parseInt(window.getComputedStyle(sonal, null).getPropertyValue('bottom'));
		sonal.style.bottom = sonalB - 210 + "px"; 
		gameOver.innerHTML = "Game-over - Reload to Start over";
		obstacle.classList.remove('obstacleSnake')
		cross= false;
		
		audiogo.play();
		setTimeout(() => {
			audiogo.pause();
			audio.pause();
			
			
		},1000);
	}
	else if(offsetX<145 && cross)
	{
		score+= 1;
		updateScore(score);
		cross = false;
		setTimeout(() => {
		 cross = true;
		},1000);
		
		setTimeout (() =>{
		anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation - duration'));
		newdur = anidur - 0.1 ;
		obstacle.style.animationDuration = newdur = 's';
		} , 500);
		
	}
	


	
}, 10);

function updateScore(score){
	
	scoreCont.innerHTML = "Your Score: " + score ;
	
}