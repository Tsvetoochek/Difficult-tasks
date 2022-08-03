let lang = prompt("Введите ваш язык", "ru/en");

switch (lang) {
  case "ru" :
    console.log("Понедельник", "Вторник", "Среда");
  break
  case "en" : 
  console.log("Monday", "Tuesday", "Wednesday");
};

let namePerson = prompt("Введите имя");

switch(namePerson) {
  case "Артем":
    console.log("директор");
  break
  case "Александр":
    console.log("преподаватель");
  break
  default:
    console.log("студент");
  break
};

