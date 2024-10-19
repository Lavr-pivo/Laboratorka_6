function validateNumber(){
    let input = prompt("Введите целое число:");
    if (input === null) {
        return "Вы нажали 'Отмена'";
    }
    let number = parseFloat(input);
    if (isNaN(number)) {
        return "Вы ввели не число";
    }
    if (!Number.isInteger(number)) {
        return "Вы ввели не целое число";
    }
    if (number > 0) {
        return "Вы ввели положительное число";
    } else if (number < 0) {
        return "Вы ввели отрицательное число";
    } else {
        return "Вы ввели ноль";
    }
}
window.onload = function() {
    alert(validateNumber());}