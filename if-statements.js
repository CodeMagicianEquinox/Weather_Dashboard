console.log("Conditionals")

//if-statement (condition = y/n?)
// if (condition) {
// code to be exe. if condition is true. 
//}

if(3<5){
    console.log("This is true");
}

let student1 = 45;
let student2 = 45;

if(student1 == student2){
    console.log("The values are the same");
}

// = means assign value (like 5=5 is true)
// == means compare the values (like 5=="5" is true)
// ==== compares value and data type (like 5==="5" is false)

//if-else statement
//if(condition){
// code to be exe. if the condition is true
//}else{
// code to be exe. if the condition is false
//}

let waterTemp = 102;

if (waterTemp >= 100){
    console.log("The water is boiling");
}else{
    console.log("The water is NOT boiliing");
}

//Check if age is under 21

let age = 21;

if (age >= 21){
    console.log("you are an adult");
}else{
    console.log("you are underage");
}


// else-if statement
// if(condition1){
// code to be exe. if the condition is true
//}else if (condition2){
// code to be exe. if condition2 is true
//}else{
// code to be exe. if the conditions were false
//}

function ageCalculator(){

    let age = prompt("Enter your age:");

    if(age<13){
        console.log("You are a child");
    }else if(age<21){
        console.log("You are a teenager");
    }else if (age<64){
        console.log ("You are an adult");
    }else{
        console.log("You are a senior");
    }
}
// ageCalculator();

// challenge 2: 

// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color 
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)

function TrafficLight(){

    let color = prompt("Enter traffic light color:");

    if(color == "green"){
        console.log("Go!");
    }else if(color == "yellow"){
        console.log("Slow down");
    }else if (color == "red"){
        console.log ("Stop");
    }else{
        console.log("Please obey traffic laws");
    }
}
//TrafficLight();

// you can use console.error() to give the user an error if the input is not valid..
// alert() is also acceptable


//function TicketPriceCalc(){

//   let age = prompt("Enter your age:");

// if(age<13){
//      console.log("Your ticket price is $5");
//    }else if(age<18){
//        console.log("Your ticket price is $8");
//    }else if (age>=18){
//        console.log ("Your ticket price is $10");
//    }else{
//        alert("Invalid input")
//}
//}
// TicketPriceCalc();

// How Dr Sam did it:

// let age = prompt("Enter your age");
// let price =0;

//if (age<12){
//   price=5;
//}else if(age<18){
//    price=8;
//}else{
// price =10;
//}

//document.getElementById("results").innerHTML="your ticket price is " + price;


//Challenge 4

//let temperature = prompt("Enter the temperature");

// if (temperature<15){
//  console.log("Wear a jacket");
// }else if(temperature<=25){
// console.log("Wear a sweater");
// }else{
// console.log("Wear a t-shirt")
// }


//function weatheroutput(){
//let tmp = prompt("enter yout temperature")
//let outfit="";
//let p  = document.getElementById

//outfit="Jacket";
//}else if(tmp<25){
//  outfit="sweater";
//}else{
//  outfit="t-shirt";
//}

//p.innerHTML="You should wear: " + outfit



//Switch-case
// use it to check a single var or expression

let action = prompt("Choose an action: Jump, run, attack, defend")

switch(action){
    case "jump":
        console.log("You jumped");
        break;
    case "run":
        console.log("You run");
        break;
    case "attack":
        console.log("You attacked");
        break;
        case "defend":
        console.log("You defend");
        break;
    default:
        console.log ("Unknown action, try again");
//use break; as a way to sort of escape out of this var checking. Otherwise it checks all of them.
}