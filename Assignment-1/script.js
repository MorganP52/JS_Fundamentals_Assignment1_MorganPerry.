// Name: Morgan Perry
// W#:0487849
// Client Side Programming
// Assignment: Assignment 1
// Instructor: Nadia Gouda
// Date: February 17, 2025

//Part 1
document.write("<h1> Step 1 </h1>");

let StudentName = "Morgan Perry";
let StudentAge = 20;
let IsEnrolled = true;

document.write("Name: " + StudentName + "<br>");
document.write("Age: " + StudentAge + "<br>");
document.write("Enrolled: " + IsEnrolled + "<br>");

document.write("Data type of student age without conversion: " + typeof StudentAge + "<br>");

StudentAge = String(StudentAge);

document.write("Data type of student age after conversion: " + typeof StudentAge + "<br>");

//Step 2
document.write("<h1> Step 2 </h1>");
let num1 = prompt("Please enter a numbers", "2");
let numr2 = prompt("Please enter another number", "2");
num1 = Number(num1);
numr2 = Number(numr2);
// Using +
document.write("This is adding two variables together " + (num1 + numr2));
// Using -
document.write(" <br> This is subtracting two variables together ", num1 - numr2);
// Using *
document.write(" <br> This is multiplying two variables together ", num1 * numr2);
// Using /
document.write(" <br> This is dividing two variables together ", num1 / numr2);
// Using %
document.write(" <br> This is when modules is used on the two variables together ", num1 % numr2);

//Step 3

let Age;

prompt("Please enter your Age: ", "Ex: 20 ");

if (Age >= 18) {
    alert("You are eligible to Vote!");
} else {
    alert("You are too young. You cannot vote yet.");
}

//Step 4
document.write("<h1> Step 4 </h1>");

for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

let number;

while (true) {
    number = prompt("You must enter a real number greater than 10. Meaning no 1 or 2 especially not any number from 3 to 9. Anything else will be considered a 'SKILL ISSUE'.");
    number = Number(number);

    if (number > 10) {
        alert("you did it congradulations you didn't have a skill issue. good job putting all the school to good use :)!");
        break;
    } else {
        alert("UH OH. Looks like someone is having a SKILL ISSUE!. TRY AGAIN.");
    }
}