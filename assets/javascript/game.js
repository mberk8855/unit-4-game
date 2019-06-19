var ComputerNumber = Math.floor(Math.random() * 100) + 20;
console.log("computer: ", ComputerNumber)

//create a start button 

$("#computer").text("Computer: " + ComputerNumber)

//random numbers for crystals 


var crystals = {

    "blue": Math.floor(Math.random() * 12) + 1,
    "green": Math.floor(Math.random() * 12) + 1,
    "orange": Math.floor(Math.random() * 12) + 1,
    "red": Math.floor(Math.random() * 12) + 1
}

console.log("crystals: ", crystals)

var winsNumber = 0;
var lossesNumber = 0;

$("#wins").text("Wins: " + winsNumber)

$("#losses").text("Losses: " + lossesNumber)

var sum = 0;
$("#sum").text("Your Total Score: " + sum)




$(".crystal").on("click", function (event) {

    console.log("onclick")
    console.log(this)
    var crystalClicked = $(this).attr("id")
    console.log(crystalClicked)

    var value = crystals[crystalClicked]
    console.log("value: ", value)

    sum = sum + value;
    $("#sum").text("Your Total Score: " + sum)

    if (sum > ComputerNumber) {
        lossesNumber++
        $("#losses").text("Losses: " + lossesNumber)
        restart()
    }
    else if (sum === ComputerNumber) {
        winsNumber++
        $("#wins").text("Wins: " + winsNumber)
        restart()
    }


})

//
function restart(){
    
    // ComputerNumber = Math.floor(Math.random() * 100) + 20;
    ComputerNumber = Math.random() * (120-19) + 19;
    console.log("computer: ", ComputerNumber)
    //create a start button 
    
    $("#computer").text("Computer: " + ComputerNumber)
    //random numbers for crystals 
    
    
    crystals = {
    
        "blue": Math.floor(Math.random() * 12) + 1,
        "green": Math.floor(Math.random() * 12) + 1,
        "orange": Math.floor(Math.random() * 12) + 1,
        "red": Math.floor(Math.random() * 12) + 1
    }
    
    console.log("crystals: ", crystals)
    
 
    sum = 0;
    $("#sum").text("Your Total Score: " + sum)
    

}




//create a start button. begin 
//clean up code 
//send a message after loss and restart (do you want to play again?)
//when on click of button then code to restart 
//message saying you lost you win do you want to play again? 

//then work on style 
//reveal crystal value? 