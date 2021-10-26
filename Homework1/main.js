//Last Name
let Lname = prompt('Введите Фамилию')
    while (!Lname) {
        Lname = prompt('Введите корректно Фамилию')
}


//Firs Name
let Fname = prompt('Введите Имя')
    while (!Fname) {
        Fname = prompt('Введите корректно Имя')
}


//Surname
let surname = prompt('Введите Отчество')
    while (!surname) {
        surname = prompt('Введите корректно Отчество')
}


//Age
let age = parseInt(prompt('Введите Возраст'))
    while (!age ) {
        age = prompt('Введите корректно Возраст')
}
    while (age > 123) {
        age = prompt('Введите корректно Возраст')
}
    while (age == Number) {
        age = prompt('Введите корректно Возраст')
}

// Гендер
let gender = confirm("ваш пол - Мужской?")
    if (gender == true) {
        gender = "Мужской"
}
    else {
        gender = "Женский"
}


//Пенсия
let old = ""
    if (age >= 63 ) {
        old = 'Да'
}
    else if (gender == true) {
        old = 'Да'
} 
    else{
        old = 'Нет'
};
    if (age >= 58 ) {
        old = 'Да'
}
    else if (gender == false) {
        old = 'Да'
} 
    else{
        old = 'Нет'
}


//Конечное табло
alert("Ваше ФИО:"+" "+Lname+" "+Fname+" "+surname+'\n'+
        "Ваш возраст в годах:" +" "+ age+"\n"+
        "Ваш возраст в днях:" +" "+ (parseInt(age)*365)+"\n"+
        "Через 5 лет вам будет:"+" "+(parseInt(age)+5)+"\n"+
        "Ваш пол:"+" "+gender+"\n"+
        "Вы на пенсии: " +" "+ old
)