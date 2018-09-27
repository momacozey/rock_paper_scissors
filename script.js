    

let win = 0 
let loss = 0
let draw = 0

function computerPlay(){
        let computerChoice = Math.floor(Math.random() * 3);
            if (computerChoice == 1){
                computerChoice = "bulbasaur";
           }
            else if (computerChoice == 2) {
                computerChoice = "charmander";              
            } else if (computerChoice == 0){
                computerChoice = "squirtle";               
            }
            return computerChoice;
    }
    

  function startRound(clicked_id){
    if(win < 5 && loss < 5){
    var playerSelection = clicked_id;
    var computerSelection = computerPlay();
    var value = playRound(playerSelection, computerSelection);
    console.log("your choice " +playerSelection)
    console.log("pc choice " + computerSelection)


//everything below is fine just need to track score
function playRound(){
    if (playerSelection == "bulbasaur" && computerSelection == "squirtle" || playerSelection == "charmander" && computerSelection == "bulbasaur" || playerSelection == "squirtle" && computerSelection == "charmander"){
        document.getElementById("demo").innerHTML = playerSelection + " beats " + computerSelection + "!";
        win++
        
    }
     else if (playerSelection === computerSelection){
        document.getElementById("demo").innerHTML = playerSelection + " ties with " + computerSelection + "!";
        draw++
    } else {
        document.getElementById("demo").innerHTML = playerSelection + " loses to " + computerSelection + "!";
        loss++
    }
             document.getElementById("userScore").innerHTML = win
             document.getElementById("computerScore").innerHTML = loss
             document.getElementById("draw").innerHTML = draw
    }}
    
    
    }
    function reset(){
        win = 0
        loss = 0
        draw = 0
        document.getElementById("userScore").innerHTML = win
        document.getElementById("computerScore").innerHTML = loss
        document.getElementById("draw").innerHTML = draw
        document.getElementById("demo").innerHTML = "MEWTWO HAS WIPED THE BOARD!"
        }
  
//keeping this here for use in the fucture for self refrence on its usage
//document.getElementById("rock").addEventListener("click", function() { playRound("rock", computerPlay()); } );
//document.getElementById("paper").addEventListener("click", function() { playRound("paper", computerPlay()); } );
//document.getElementById("scissors").addEventListener("click", function() { playRound("scissors", computerPlay()); } );
