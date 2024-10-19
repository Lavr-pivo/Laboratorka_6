let login = prompt("Введите ваш логин:");
if(login =="admin"){
    let password = prompt("Введите ваш пароль:");
    if(password =="BlackOverlord"){
        alert("Welcome!");
    }
    else{
        alert("Wrong password!")
    }
}
else if(login == ""){
    alert("Login canceled")
}
else if(login == null){
    alert("Login canceled")

}else{
    alert("Uncown user")
}