let num1 = Math.floor(Math.random() * 9) + 1;
let num2 = Math.floor(Math.random() * 9) + 1;
let userAnswer = prompt("Какой ответ будет "+num1+" * "+num2);
let Answer = num1 * num2;
if(userAnswer == Answer){
    alert("You are correct!")
}
else{
    alert("You are wrong")
}