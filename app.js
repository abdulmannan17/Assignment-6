// Chapter 21-25
/*


var a = prompt("Enter your First Name");
var b = prompt("Enter your Surname");
var fullName = a + " " + b;
alert("Hello! "+fullName);


var favPhone = prompt("Enter your Favourite Phone");
console.log(favPhone)
var length = favPhone.length;
document.write("Mr Favourite Phone is: "+favPhone+ "<br>"+"Length of String: "+ length);


var a = "Pakistani";
var index = a.indexOf("n");
document.write("String: "+a+ "<br>"+"Index of n: "+ index);


var a = "Hello World";
var index = a.lastIndexOf("l");
document.write("String: "+a+ "<br>"+"Index of l: "+ index);



var a = "Pakistani";
var index = a[3];
document.write("String: "+a+ "<br>"+"Index of 3rd Index: "+ index);



var a = prompt("Enter your First Name");
var b = prompt("Enter your Surname");
var c = "Hello! ";
var fullName = c.concat(a," ",b);
alert(fullName);



var city = "Hyderabad"
document.write("City: "+city+ "<br>")
for (var i = 0; i < city.length; i++) {
 if (city.slice(i, i + 5) === "Hyder") {
city = city.slice(0, i) + "Islam" + city.slice(i + 5);
}
}

document.write("Replaced City: "+ city);



var text = "Ali and Sami are best friends. They play cricket and football together."
document.write(text+ "<br>")
for (var i = 0; i < text.length; i++) {
 if (text.slice(i, i + 3) === "and") {
text = text.slice(0, i) + "&" + text.slice(i + 3);
}
}

document.write(text);



var str = "476";
document.write("Value: "+str+ "<br>"+ "Type: String"+ "<br>");
var num = parseInt(str);
document.write("Value: "+str+ "<br>"+ "Type: Number");



var a = prompt("Enter Anyting in lowerCase");
document.write(a + "<br>");
var b = a.toUpperCase();
document.write(b);



var a = prompt("Enter Anyting");
document.write(a + "<br>");
var b = a.charAt(0).toUpperCase() + a.slice(1)
document.write(b);




var num = 35.36;
document.write("Value: "+num+ "<br>"+ "Type: Number"+ "<br>");
var str = num.toString();
for (var i = 0; i < str.length; i++) {
    if (str.slice(i, i+1) === ".") {
   str = str.slice(0,i) + "" + str.slice(i+1);
   }
   }

document.write("Value: "+str+ "<br>"+ "Type: String");




var a = prompt("Enter Username");
if(a.includes("!") || a.includes(",") || a.includes(".") || a.includes("@")){
    alert("Enter a valid username");
}
else{
    alert("Welcome Back "+ a);
}



var a = ["cake","apple pie","cookie","patties"];
var b = prompt("Welcome to ABC bakery. What do you want?")
var c = b.toLowerCase();

if(c == "cake"){
    alert(c + " is available at Index 0");
} 
else if(c == "apple pie"){
    alert(c + " is available at Index 1")
} 
else if(c == "cookie"){
    alert(c + " is available at Index 2")
} 
else if(c == "patties"){
    alert(c + " is available at Index 3")
} 
else{
    alert(c + " is not available")
}



var a = prompt("Enter your Password . It should contain alphabets & numbers. It should not start with a number. It must be 6 characters long");
if(a.length > 6 && a[0] !== Number){
    alert("You are good to go");
}
else{
    alert("Enter a valid Password");
}



var str = prompt("Enter your Password")
if(str.match(/[a-z]/g) && str.match(/[A-Z]/g) && str.match(/[0-9]/g) && str.length >= 6 && !str[0].match(/[0-9]/g)){
    alert("Youa are good to go");
}
else{
    alert("Enter a valid password");
}




var str = "University Of Karachi";
var res = str.split();
for(var i = 0; i < str.length; i++){
    document.write(str[i]+"<br>");
}



var a = "Pakistani";
var b = a;
var index = a.charAt(a.length - 1);
document.write("String: "+a+ "<br>"+"Last Character: "+ index);




var text = "The quick brown fox jumps over the lazy dog";
document.write(text+ "<br>")
var a = text.toLowerCase();
var count = (a.match(/the/g) || []).length;
document.write(count);
*/


//Chapter 26-30

/*
var a = prompt("Enter any number");
document.write("number: "+ a + "<br>");
var b = Math.round(a);
document.write("round off value: " +b + "<br>");
var c = Math.floor(a);
document.write("floor value: " +c + "<br>");
var d = Math.ceil(a);
document.write("ceil value: " +d);



var a = prompt("Enter any negative number");
document.write("number: "+ a + "<br>");
var b = Math.round(a);
document.write("round off value: " +b + "<br>");
var c = Math.floor(a);
document.write("floor value: " +c + "<br>");
var d = Math.ceil(a);
document.write("ceil value: " +d);




var a = prompt("Enter any Number");
var b = Math.abs(a);
document.write("The absolute value of "+a +" is "+ b);




var a = alert("Roll the dice");
var b = Math.random();
var c = b * 6;
var d = Math.round(c);
if(d === 0 ){
    alert("Your dice went off the board");
}
else{
document.write("random dice value: "+d);
}



var a = prompt("head or tails");
var coin = Math.random();
var b = coin * 2;
var num = Math.ceil(b);
if ( num <= 1){
    document.write(num + "<br>" + "random coin value: Tails");
}
else{
    document.write(num + "<br>" + "random coin value: Heads");
}



var a = alert("Random Number between 1-100");
var b = Math.random();
var c = b * 100;
var num = Math.round(c);
document.write("random number between 1 and 100: "+ num);



var a = prompt("Enter your weight in Kilograms");
var b = parseFloat(a);
document.write("The weight of user is "+b + " kilograms");




var a = Math.random();
var b = a*10;
var c = Math.ceil(b);
var user = prompt("Any Number Between 1 and 10");
if (user == c){
    alert("Congrats");
}
else{
    alert("You Lost");
}

*/


//Chapter 31-34

/*
var a = new Date();
document.write(a);



var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var m = months[d.getMonth()];
document.write("This Month: "+m);



var a= new Date();
var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
var b = day[a.getDay()];
document.write("Today is: "+ b);


var a= new Date();
var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
var b = day[a.getDay()];
if(day[6] === b || day[0] === b){
    alert("It's Funday");
}
else{
    alert("Working Day");
}




var a = new Date();
var b = a.getDate();
console.log(b);
if(b <= 14){
    alert("First Fifteen Days of the Month");
}
else{
    alert("Last Fifteen Days of the month");
}



var a = new Date();
document.write("Current Date: "+a+ "<br>");
var b = a.getTime();
document.write("Elapsed Miliseconds since Jan 1, 1970: "+b+ "<br>");
var c = b/(1000*60*60);
document.write("Elapsed Minutes since Jan 1, 1970: "+c);




var a = new Date();
var b = a.getHours();
if(b <= 11){
    alert("It's AM");
}
else{
    alert("It's PM");
}



var dt = new Date("January 01, 2021");
dt.setDate(dt.getDate()- 1);
document.write("Later Date: "+ dt);




var a = new Date("April 25, 2020");
var b = new Date();
var c = b - a;
var d = c/(1000*60*60*24);
var e = Math.floor(d);
document.write(e+ " days past since 1st Ramadan");


var a = new Date("December 05, 2015");
var b = new Date();
var c = b - a;
var d = c/(1000);
var e = Math.floor(d);
document.write(a+"<br>"+e+ " seconds past since the Reference Date");



var dt = new Date();
document.write("Current Date: "+ dt + "<br>");
dt.setHours(dt.getHours()- 1);
document.write("1 Hour Ago: "+ dt);



var dt = new Date();
document.write("Current Date: "+ dt + "<br>");
dt.setFullYear(dt.getFullYear()- 100);
document.write("100 Years Back: "+ dt);





var a = prompt("Enter your Age");
var b = new Date();
var c = b.getFullYear();
var d = c - a;
var e = Math.floor(d);
document.write("Your age is "+ c + "<br>" + "Your birth year is " +e);




var customerName = prompt("Enter your name");
var date = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var m = months[date.getMonth()];
document.write("K-Electric Bill"+"<br>"+"Customer Name: "+ customerName+"<br>"+"This Month: "+m);
var numUnits = 410;
var unitCharge = 16;
var paySurge = 350;
var bill = numUnits*unitCharge;
document.write("Number of units: "+ numUnits + "<br>" + "Charges per unit: " + unitCharge + "<br>" + "<br>" + "Net Amount Payable (within Due Date): "+ bill + "<br>" + "Late payment surcharge: " + paySurge + "<br>" + "Gross Amount Payable (after Due Date): " + (+bill + +paySurge) );
*/



//Chapter 35-38


/*
function date(){
    var a = new Date();
    alert(a);
}

date();




function greet(n1,n2){
    var n1 = prompt("Enter your name");
    var n2 = prompt("Enter your second name");
    alert("Hello " + n1 + " " + n2);
}

greet();




function add ( a, b){
    var a = prompt("Enter any number");
    var b = prompt("Enter any number");
    alert ("Addition: " + (+a + +b));
}


add();




function calc(n1,oper,n2){
    var n1 = prompt("Enter Number");
    var oper = prompt("Enter Operator");
    var n2 = prompt("Enter Number");
    if(oper === "+"){
        alert((+n1 + +n2));
    }
    else if ( oper === "-"){
        alert(n1-n2);
    }
    else if ( oper === "/"){
        alert(n1/n2);
    }
    else if ( oper === "*"){
        alert(n1*n2);
    }
    else{
        alert("Wrong Operator");
    }
}


calc();





function squ(){
    var a = prompt("Enter Number To Be Squared");
    return a*a;
}


alert(squ());



function factorial(){
    var input = prompt("Enter the number to get factorial of: ");
    var result = input;
    for(var i=1;i < input;i++){
       result = i * result;
    }
    alert(result);
}

factorial();



function nums(a,b){
var a = prompt("Start Number");
var b = prompt("End Number");
for(var i = a; i <= b ; i++){
    document.write(i + "<br>");
}
}

nums();


*/

function calHypotenuse(a,b){
    var a = prompt("Base");
    var b = prompt("Perpendicular");
    var aSqr = a*a;
    var bSqr = b*b;
    var Hypo = (+aSqr + +bSqr);
function calSqr(){
    var Hypotenuse = Math.sqrt(Hypo);
    alert(Hypotenuse); 
}
}
calHypotenuse();




