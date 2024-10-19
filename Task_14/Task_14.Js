function printCorrectOrder() {
    const string3 = document.getElementById("string-3").textContent;
    const string2 = document.getElementById("string-2").textContent;
    const string4 = document.getElementById("string-4").textContent;
    console.log(`${string3}, ${string2}, ${string4}`);
}
window.onload = printCorrectOrder;