//Find the culprit
alert("I'm JavaScript!");

//Find the culprit and invoke the alert
<script src="script.js" async defer></script>

//Explain the below how it works
alert("I'm JavaScript!"); // give an alert message
alert('Hello') // this line is not having semicolon
alert(`World`) // this line is not having semicolon
alert(3 + 1 + 2); // this is multiple line code and its working

//Fix the below to alert Guvi geek
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname; // here is the change in code
alert( admin ); // "Guvi geek"  

//Fix the below to alert hello Guvi geek
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+" "+lname; //here is the change in code
alert( `hello ${name} `);//hello Guvi geek

//Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
alert(Number(a) + Number(b)) //adds a and b

//If you run the below scritpt you will get “Code is Blasted”
//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
var a = "2" > "12";
// //Don't touch below this
if (a) {
  console.log("Code is Blasted")//not abel to compare string value "2" and "12" using > opertor
}
else
{
  console.log("Diffused");
}

//How to get the success in console.
let a = prompt("Enter a number?");
// //Don't modify any code below this
if (a) {                                // condition missing
 console.log( 'OMG it works for any number inc 0' );//not works on text
}
else
{
 console.log( "Success" );
}

//How to get the correct score in console.
let value = prompt('How many runs you scored in this ball');
if (value == 4) { //if 4 comes will print "uou hit a four"
      console.log("You hit a Four");
} else if (value == 6) {//if 6 comes will print "you hit a six"
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");//if 1 2 3 comes it print " i could't figure out"
}

// Fix the code to welcome the Employee
// let login = 'Employee';
// let message = ((login == 'Employee') ? :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';)
// console.log(message);

//Fix the code to welcome the boss
// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
  message = "welcome boss";
}
else
{
  message = "Go away";
}
console.log(message);

//Fix the code to welcome the boss
let message;
let lock = 0;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

//Change the code to print 3 2 1
//You can change only 2 characters
let i = 4;//value changed 3to 4
while (i>1) { //gave condition 
  console.log( --i );
}

//Change the code to print 1 to 10 in 4 lines
let number = 10;
for(let i=1;i<=number;i++)
{
console.log(i)
}

//Change the code to print even numbers
//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
    console.log(num6)
  }

  //Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`); //use back tick not single colon
}

