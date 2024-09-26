// $('body').css("background-color", "white"); 

//when button is clicked 
//IIFE = immediately invoked f/n expression
$("#btnGetAnimal").on("click", function(){ 
//get the usename
let bakerName = $("#bakerName").val();
  
  $("#greetingArea").text("Hi there, " + bakerName + "!");
  let randomAnimal = spiritAnimals[(Math.floor(Math.random() * spiritAnimals.length))]
   $("#animalArea").text("Your spirit animal is:" + randomAnimal)
} )

// give them a greeting

let spiritAnimals = ["🐲","🐻","🦍","🦧","🐅","🐗","🐯",
"🐺","🐰","🐸","🦐","🐙"];
// next also tell spirit animal