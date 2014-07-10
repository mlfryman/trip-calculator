/* TRIP CALCULATOR: In-class Assignment
 *
 *Prompt Questions:
   (1) How far are you driving (miles)?
   (2) What type of vehicle are you driving (car or truck)?
   (3) How big is your gas tank (gallons)?
   (4) What is your vehicle's miles per gallon (MPG) rating?
   (5) How fast are you going to drive?
   (6) How much is gas per gallon ($0.00)?
 
 *Goals:
   (1) Determine vehicle's true MPG, or fuel efficiency.
   (2) Determine if they have enough $ to take a trip.

 *Output:
   (1) Here are the details for your upcoming trip:
       You are driving a __(car/truck/motorcycle)__ with a ____-gallon fuel tank and a MPG rating of _____ MPG.
       You will be traveling _____ miles at ____ mph. 
       Fuel is currently $____ per gallon.

   (2) Your trip will cost you $_____.  

   (3) You will need to refuel ____ times
*/

//Prompts
//
var prompt = require('sync-prompt').prompt;
var distance = prompt('How many miles are you driving? (e.g., 1000) ');
distance = parseInt(distance);
var vehicle = prompt('What type of vehicle (car, truck, or motorcycle) are you driving? (e.g., car) ');
var tankSize = prompt('How many gallons does your fuel tank hold? (e.g., 11) ');
tankSize = parseInt(tankSize);
var mpgRating = prompt("What is your vehicle's miles per gallon (MPG) rating? (e.g., 25) ");
mpgRating=parseInt(mpgRating);
var speed = prompt('How fast (mph) are you going to drive? (e.g., 60) ');
speed = parseInt(speed);
var fuelPrice = prompt('How much does fuel cost ($) per gallon? (e.g., 0.00) ');
fuelPrice = parseFloat(fuelPrice);

console.log('\n\nHere are the details for your upcoming trip:\n ');
console.log('You are driving a ' + vehicle + ' with a ' + tankSize + '-gallon gas tank and a MPG rating of ' + mpgRating + ' MPG.');
console.log('You will be traveling ' + distance + ' miles at ' + speed + ' mph.');
console.log('Fuel is currently $' + fuelPrice + ' per gallon.\n\n');


//Calculate vehichle's real/true fuel efficiency in MPG.
//
var fuelEff = mpgRating;
var speedDelta = (speed - 55);
var offset;

switch(vehicle){
  case 'car':
    offset = 1;
    break;
  case 'truck':
    offset = 3;
    break;
  case 'motorcyle':
    offset = -1;
}

if(speedDelta > 0){
 for(speedDelta; speedDelta = 0; speedDelta--){
  fuelEff = fuelEff - offset;
  if(fuelEff < 10){
    fuelEff = 10;
  }
 }
}

// Calculate total fuel cost for the trip
//
var galTotal = (distance / fuelEff);
var tripCost = (fuelPrice * galTotal);


// Calculate No. refuel stops needed
//
var refuel = (galTotal / tankSize);


console.log("Given the vehicle's MPG rating & how fast you plan to drive, you will need " + galTotal.toFixed(0) + ' gallons of fuel.\n');
console.log('Your trip will cost you $' + tripCost.toFixed(2) + ' ,and you will need to refuel ' + refuel.toFixed(0) + ' times.\n\n');
