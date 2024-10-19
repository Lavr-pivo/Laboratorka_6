function power(a,b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

let num_1 = parseFloat(prompt("Введите число 1"));
let num_2 = prompt("Введите число 2");
if (num_2 === "") {
    alert(power(num_1,num_2=2))
} else {
    alert(power(num_1,num_2))
}