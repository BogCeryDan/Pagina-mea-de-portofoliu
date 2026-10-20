var score1 = 0;
var score2 = 0;
var rounds = 0

function NewRound(){
    rounds +=1;
    var randomNumber1 = Math.floor(Math.random()*6+1);
    var randomNumber2 = Math.floor(Math.random()*6+1);   
    document.querySelector('.img1').src = "images/dice"+randomNumber1+".png";
document.querySelector('.img2').src = "images/dice"+randomNumber2+".png";
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
    score1 +=1;
} else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins!";
    score2 +=1;
} else{
    
    document.querySelector("h1").textContent = "Meh... a draw...";
}
console.log(randomNumber1 + " " + randomNumber2);
document.querySelector("h2").textContent = "Round " + rounds +": " + score1 + "-"+score2;
}