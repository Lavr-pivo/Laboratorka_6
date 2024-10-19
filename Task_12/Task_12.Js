function countChars(char, str) {
    char = char.toLowerCase();
    str = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }

    return count;
}

let char = prompt("Введите символ для поиска:");
let str = prompt("Введите строку:");
let result = countChars(char, str);
alert(`Символ '${char}' встречается ${result} раз(а) в строке.`);