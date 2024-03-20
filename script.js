
// selctions
let players = document.querySelectorAll("input");

let btns = document.querySelectorAll(".dice");

let score = document.querySelectorAll("span");

let endButton = document.querySelector('#endButton');

let winMessage = document.querySelector("#winMessage");






for(let t of btns){
    // t.addEventListener("click", () => rollDice(t.id))
    // t.addEventListener("click", (eventDetails) => rollDice(eventDetails, "abhi"))
    t.addEventListener("click", rollDice)
}



let btnClickCount = 0
function rollDice(eventDetails){

    btnClickCount = btnClickCount + 1;
    if(btnClickCount == 5){
        endButton.disabled = false
    }



    // console.log(eventDetails.target.id)

    // disable the button
    // disable the dice button once clicked
    eventDetails.target.disabled = true;

    // id = btn1, btn2, btn3, btn4, btn5
    let btn_id = eventDetails.target.id.slice(-1) - 1;  // btn1

    console.log(btn_id)

    // roll the dice

    let diceArray = [1,2,3,4,5,6];

    let randomIndex = parseInt(Math.random() * diceArray.length)

    let diceValue = diceArray[randomIndex];

    // add the dice value to the score
    score[btn_id].innerText = diceValue;

}


    // making the end button disabled so that end button cannot be clicked before the game starts
    endButton.disabled = true;
    endButton.addEventListener("click", findWinner)

    function findWinner(){

        endButton.disabled = true

        // find the highest score
        let highestScore = 0

        for(let t of score){
            if(+t.innerText > highestScore){
                highestScore = +t.innerText
            }
        }


        // find the index of all players with  the highest score
        let winnerIndex = []
    for(let i=0; i<=score.length-1; i++){
        if(+score[i].innerText == highestScore){
            winnerIndex.push(i)
        }
    }
    // console.log(winnerIndex)

    

    // find the names of the players with the highest score
    let playerNames = "" 
    for(let t of winnerIndex){
        playerNames = playerNames + players[t].value + ","
    }



    // remove the last comma
    playerNames = playerNames.slice(0, -1)
    // console.log(playerNames)


    // display the winner
    winMessage.innerText = playerNames + " wins"
}


    




















// function addEventListener(t1, rollDice){
//     // ...

//     rollDice({....})    // eventDetails
// }










// function rollDice(btn_id){
//     console.log(btn_id)
// }




// function hello(n, fun){
//     fun()
// }

// function hii(){

// }

// hello(1, hii)