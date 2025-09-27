// Exercise 4.1.1

console.log(
5 + "34"
,5 - "4"
,10 % 5
,5 % 10
,"Java" + "Script"
," " + " "
," " + 0
,true + true
,true + false
,false + true
,false - true
,3 - 4
,"Bob" - "bill"
,'Bobbill' - 'bill'
)

const str = "Bobbill";
console.log(str.slice(0,3))

console.log(
5 >= 1
,0 === 1
,4 <= 1
,1 != 1
,"A" > "B"
,"B" < "C"
,"a" > "A"
,"b" < "A"
,true === false
,true != true
)

console.log('a'.charCodeAt(0))
console.log('-'.charCodeAt(0))
console.log('b'.charCodeAt(0))

// Exercise 4.1.2 

var firstName = "Viktoriia";
var lastName = "Len";
var a = firstName + " " + lastName;
console.log(a);
console.log(firstName+lastName);


// Exercise 4.1.2 

var a = 34;
var b = 21;
var c;
a = 2;
console.log(a + b);
console.log(c);

// Exercise 4.1.4

let your_name = prompt('?');
console.log('Hello ' + your_name);

// Exercise 4.1.5

let number = prompt('Write your number: ');
    if (number % 2 == 0)
        console.log("The " + number + " is even");
    else if (number % 2 != 0)
        console.log("The " + number + " is odd");
    else
        console.log("This is not a number");

let number = prompt('Write your number: ');
    if (number % 2 == 0) {
        console.log('The ' + number + 'is even')
    }

    if (number % 2 != 0) {
        console.log("The " + number + " is odd");
    }

    if ( )

if (typeof number !== "number"){
     console.log("This is not a number");
} else{
    if (number % 2 == 0) {
        console.log('The ' + number + 'is even')
    } else {
        console.log('The ' + number + 'is odd')
    }
}

// Exercise 4.1.6

function experiencePoints () {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

// Exercise 4.2.1

let fizzBuzz = function (num) {
    let numberOne = 3;
    let numberTwo = 5;
    let numberThree = 7;
    for (let i = 1; i <= num; i++) {
        let line = '';
        if (i % numberOne === 0) {
            line += 'Power';
        }
        if (i % numberTwo === 0) {
            line += 'Coders';
        }
        if (i % numberThree === 0) {
            line += 'Hi';
        }
        if (line == ''){
            line = i
        }
        console.log(line)
    }
}
fizzBuzz(1000)

// Exercise 4.2.2

for (i=1; i<=10; i++){
    a_ij = "";
    for (j=1; j<=10; j++){
        a_ij += i*j + "\t";
    }
    console.log(a_ij);
}

// Exercise 4.2.4
let your_age = prompt('Input your age: ');
let retirement_expect = prompt('Input your expected retirement age: ');

your_age = 32;
retirement_expect = 65;

current_year = 2025;
remained_years = retirement_expect - your_age;
expected_year = current_year + remained_years;

console.log("You have " + remained_years + " years left until you can retire");
console.log("It\’s " + current_year +", so you can retire in " + expected_year);


// Exercise 4.2.5

let a = [];
let sum = 0;
for (i=1; i<=5; i++){
    a.push(prompt('Write number' + i +":"));
    a[i-1] = Number(a[i-1]);
    sum += a[i-1];
}

console.log(a);
console.log(sum);


function experiencePoints () {
    if ( winBattle () ) {
        return 10;
    } else {
        return 1;
    }
}

let experiencePoints = winBattle() ? 10 : 1;


// Exercise 4.1.9

let user_age = Number(prompt('Insert your age: '));

if (user_age < 18) {
    alert("Sorry, you are too young");
} else if (user_age === 18) {
    alert("Your first year");
} else {
    alert("Drive");
}

//Exercise 4.1.10

n = 7;
let multipl7 = '';
for (i=0; i<=10; i++){
    multipl7 += i*n + " ";
}
console.log(multipl7);


let row = "   |"; // header row starts with some spacing

// Build the header row (1 to 10)
for (let i = 1; i <= 10; i++) {
    row += "\t" + i;
}
console.log(row);

// Separator row
console.log("___|____________________________________________");

// Now the row for 7
let tableRow = " 7 |";
for (let i = 1; i <= 10; i++) {
    tableRow += "\t" + (7 * i);
}
console.log(tableRow);


// Exercise 4.1.11

//a
for (i=0; i<=20; i++){
    console.log(i);
}

//b
for (i=3; i<=29; i+=2){
    console.log(i);
}

//c
for (i=12; i>=-14; i-=2){
    console.log(i);
}

//d
for (i=50; i>=20; i--){
    if (i%3==0){
    console.log(i);
    }
}

// Exercise 4.1.12

//a
let fuel_lvl;

do {
    fuel_lvl = Number(prompt('Input starting level of fuel: '))
} 
while (
    fuel_lvl<5000 || fuel_lvl>30000
);


//b
let n_astronauts; 
    
do {
    n_astronauts = Number(prompt('Input number of astronauts (max. 7): '))
} 
while (
    n_astronauts < 1 || n_astronauts > 7
);

let altitude = 0;

while (fuel_lvl >= 100*n_astronauts) {
    altitude += 50;
    fuel_lvl -= 100*n_astronauts;
    //console.log("Current fuel level: " + fuel_lvl + ", current altitude: " + altitude);
}
console.log("Current fuel level: " + fuel_lvl + ", current altitude: " + altitude);


// Exercise 4.2.3

/* Write a function named helloWorld that:
• Takes 1 argument, a language code (e.g. "es", "de", "en")
• Returns "Hello, World" for the given language, for at least 3 languages. It should default to returning
English.
Call the function for each of the supported languages and log the result to make sure it works.*/

function ChooseLanguage(language) {
    let hello_statement  = "" ;
    switch(language) {
        case "en":
            console.log("Hello world!");
            break;
        case "de":
            console.log("Hallo Welt!");
            break;
        case "es":
            console.log("Hola Mundo!");
            break;
        case "uk":
            console.log("Привіт світ!");
            break;
        default:
            console.log("Hello world!");
            break;
    }
    return hello_statement ;
}

ChooseLanguage("de");

function ChooseLanguage(language) {
    let hello_statement  = "" ;
    switch(language) {
        case "en":
            hello_statement  = "Hello world!";
            break;
        case "de":
            hello_statement  = "Hallo Welt!";
            break;
        case "es":
            hello_statement  = "Hola Mundo!";
            break;
        case "uk":
            hello_statement  = "Привіт світ!";
            break;
        default:
            hello_statement  = "Hello world!";
            break;
    }
    return hello_statement ;
}

x = ChooseLanguage("de");
console.log(x);


// Exercise 4.2.6

let dec_number = 25;
let bit_list = "";
do {
    temp_dec_number = dec_number;
    dec_number = Math.floor(temp_dec_number/2);
    console.log(dec_number);
    if (temp_dec_number % 2 == 0)
        bit_list += 0;
    else 
        bit_list += 1;
}
while (
    dec_number > 0
)
console.log(bit_list.split("").reverse("").join(""));

// Exercise 4.3.4

let GCD;
let n = 200;
let m = 60;
let div_arr = [];

min_val = Math.min(n,m);

for (i=1; i<=min_val; i++){
    if (n % i == 0 && m % i == 0){
        div_arr.push(i);
        console.log(div_arr);
    }
}

arr_length = div_arr.length;
GCD = Math.max(div_arr[arr_length - 1]);
console.log(GCD);

// Exercise 4.3.3
