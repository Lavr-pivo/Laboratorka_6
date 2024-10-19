let sek = prompt("Введите секунды");
sek = parseInt(sek);
alert(sek);

let hour = Math.floor(sek / 3600);
if (hour == 1) {
    alert("Остался 1 час");
} else if (hour > 1 && hour < 5) {
    alert("Осталось " + hour + " часа");
} else if (hour == 0) {
    alert("Осталось менее часа");
} else {
    alert("Осталось " + hour + " часов");
}