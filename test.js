
/*var getToDaChoppa = function(){

  var condition = false;
  do {
      console.log("It's almost time to eat!");
} while(condition);
  

getToDaChoppa()*/


//Dragon slayer game
/*var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying) {  
    if (youHit) {
    console.log("You hit!");
    totalDamage += damageThisRound;
        if (totalDamage >= 4) {
        console.log("You slew the dragon, good job!!");
        slaying = false;
        }
        else {
            youHit = Math.floor(Math.random() * 2);
            } 
        } else {
            console.log("You missed! You lose.");
            slaying = false;
        } 
        slaying = false;
    }*/ //end game


/*    var isEven = function(number) {
  if (number % 2 === 0) { return true;
  } else if (isNan(number) 
  	{ return "Your input is not a number"}
  else { return false;
  } 
  
};*/


/*//Game from Codecademy (choose your own adventure)
var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}*/


//my version of choose your own adventure
var user = prompt("What would you like to do this weekend? You can choose Watch a movie, Have sexy times, Eat fatty food, Go to the beach, Take a nap, Run 5 miles, and ALL OF THE ABOVE.").toUpperCase();
switch(user) {

case 'WATCH A MOVIE':
    console.log("Great idea, we're going tonight!")
    break;

case 'HAVE SEXY TIMES':
    console.log("Me too, that's gonna happen!")
    break;

case 'EAT FATTY FOODS':
    console.log("Let's have lots of it!")
    break;
    
case 'GO TO THE BEACH':
    console.log("Me too, let me know which day you want to go!")
    break;
    
case 'TAKE A NAP':
    console.log("Done!")
    break;
    
case 'RUN 5 MILES':
    console.log("We have to, unfortunately. But it'll be done quick!")
    break;

case 'ALL THE ABOVE':
    console.log("Sounds like a plan.")
    break;

default:
    console.log("Please try again, that's not an option I understand.")

}