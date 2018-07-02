/**
 * Created by Chinga on 28.04.2017.
 */
//var name, b;

//name = 10;
//b = 'Hello';

//var a = 'str';

//name = null;
//alert(name);
//alert(25);

//var name, admin;
//name = "Василий";
//admin = name;
//alert(admin);

//var a, b, c;
//a = 7;
//b = 2;
//c = a / b;
//alert(isFinite(c));

//var MyEarth = "Земля", UserName = "Петя";
//alert(UserName+ " бегает по планете "+MyEarth);

//var str = "Строка";
//var str1 = "Строка 2";
//var result = str +"  "+ str1;
//document.write(result);

//boolean Type

//var a,b,c;
//a = true;
//b = true;
//c = a && b;
//c = a || b;
//c = !a;
//alert(c);

//var test = 10.45;
//test = parseInt(test);
//alert(test);

/*
 var x,y,z;
 var result;
 x = 54.5;
 y = "55.3"
 z =  60.15
 y = parseFloat(y);
 result = x + y + z;
 document.write('<p>Результат сложения чисел: ' + x + ' + ' + y + ' + ' + z + ' = ' + '<span style="color:red">' + result + '</span></p>');
*/

/*
var a,b,c;

a = 50;
b = 20;
c = 10;

if (a > b || b < c) {
    console.log("a > b && b < c");
}
else if (b == a) {
    console.log("10");
}
else if (b == c) {
    console.log("30");
}
     else {
      console.log("NOT");
}
*/

/*
var a,b,c,y;

a = 50;
b = 200;
c = 10;
y = (a > b) ? 50: false;
console.log(y);
*/

/*
var test = "string";

switch (test) {
    case null:
        console.log("null");
        break;

    case "string":
        console.log("string");
        break;

    case 10:
        console.log(10);
        break;

    default:
        console.log("default");
}

*/
/*
var a = 1, b = 1, c, d;

c = ++a; console.log(c); // 2
d = b++; console.log(d); // 1

c = (2+ ++a); console.log(c);
d = (2+ b++); console.log(d);

console.log(a);
console.log(b);
*/

/*
var i = 1;
console.log(i++);
console.log(i);
*/

// Home Work
// 1
/*
var test, result;
var type;
test = null;
type = typeof(test);

if (type == "number") {
    result = "В переменной test содержится число, увеличенное значение числа - "  +  (++test);
}
else if(type == "string") {
    result = "Переменная test содержит строку - " + test;
}
else {
    result = "В переменной test ничего не записано";
}

document.write("<p>" + result + "<p>");
*/
// 2
/*
var date = 8;
var e_m, res, last_n;

e_m = 31 - date;

if (e_m < 0) {
    console.log("Введена не корректная дата");
}

res = String(e_m);
last_n = res[res.length - 1];

if (e_m > 4 && e_m < 21) {
    e_m = e_m + " дней";
}
else if(last_n == 1) {
    e_m = e_m + " день";
}
else if(last_n == 2 || last_n == 3 || last_n == 4) {
    e_m = e_m + " дня";
}
else {
    e_m = e_m + " дней";
}

document.write("<h2> До конца месеца осталось - " + e_m);
 */

/*
var name = prompt("Каково «официальное» название JavaScript?");
if (name == "ECMAScript") {
    alert("Верно");
}
else {
    alert("Не знаете? «ECMAScript»!");
}
*/

/*
var value = prompt("Введите число");
    if(value > 0) {
        alert("Значения больше нуля");
    }
    else if(value < 0) {
        alert("Значения меньше нуля");
    }
    else {
        alert("Значения равно нулю");
    }
 */

/*
var name = prompt("Введите Логин","");


if(name == "Admin") {

    var pass = prompt("Пароль", "");
    if (pass == "23071987ba1") {
        alert("Добро пожаловать!");
    }
    else if (pass == null) {
        alert("Вход отменён");
    }
    else {
        alert("Пароль неверен");
    }
}
else if(name == null) {
    alert("Вход отменен");
}
else {
    alert("Неверный Логин");
}
*/
/*
var i = 1;

while (i < 10) {
    document.write("Итерация № - " + i + "<br>");
    i++;
}
*/
/*
var i = 1;

do {
    if(i == 3) {
        break;
    }
    document.write("Итерация № do-while - " + i + "<br>");
    i++;
}
while (i <= 10);
*/

/*
for(var i = 1; i <= 15; i++) {
    if (i == 6 || i == 7) {
        continue;
    }
    if (i == 9){
        break;
    }

    document.write("Цикл for - " + i + "<br>");
}
*/
/*
for(var i = 1; i <= 10; i++) {
    document.write(i);

    for(var j = 10; j > 0; j--) {
        document.write(j);
    }
    document.write("<br>");
}
*/
// Home Work 1 Вывести на экран числа, эти числа должны быть результатам
// Деления некого числа на 2. При этом все числа должны делиться без остатка.
/*
var x = 1024;

while (x > 0) {
    x = x / 2;

    if(x % 2 != 0) {
        continue;
    }
    if (x == 0)  {
        break;
    }
    document.write(x + "<br>");
}
*/

//Home Work 2 Таблица умножения с помощью вложенного оператора цикла for
/*
var color_tr, color_td;
document.write("<table border='1px'>");

for(var i = 1; i < 10; i++) {

    if(i == 1) {
        color_tr = "#c3c3c3"
    }
    else {
        color_tr = "#ffffff"
    }

    document.write("<tr style='height:30px;background-color:" + color_tr + "'>");

    for(var j = 1; j < 10; j++) {
        if(j == 1 || i == 1) {
            color_td = "#c3c3c3"
        }
        else {
            color_td = "#ffffff"
        }
        document.write("<td style='width:30px;background-color:" + color_td + "'>" + i * j + "</td>");
    }
    document.write("</tr>");
}

document.write("</table>");
 */
/*
do {
    var login = prompt("Введите ваш Логин");
    var correct = confirm("Ваши логин - " + login + "\nПодвердите введенные данные");
}
while (!correct);

alert("Ваш логин"  +  login);
 */

//showModalDialog("http://", "", "");


// Создания массива
/*
var a,b;
a = 5;
b = 5;
var array = [1,10,5,20,a,b,a + b,,3,5];
var array2 = ["hello","world",2,3,4,true];
var array3 = [,,];

var array4 = new Array(10,23,34,45);
var array5 = new Array(5);

document.write(array4);
*/


//Как получить доступ к ячейкам массива (чтения, изминения)

/*
var a,b;
a = 8;
b = 10;
var array = [1,10,5,20,a,b,a + b,,3,5];
var array2 = ["hello","world",2,3,4,true];
var array3 = [,,];

var array4 = new Array(10,23,34,45);
var array5 = new Array(5);

// Изменения ячейки с индексом один и присваение нового значения
array[1] = "new";
//
array["one"] = "hello world";
document.write(array["one"]);
*/

// Длина массива
/*
var a = [1,"Hello",3,3,4,8,76];


for (var i = 0; i < a.length; i++) {
      console.log(a[i]);
}

for (var index in a) {
    document.write("Ячейка массива - " + index + " - Значения данной ячейки - " + a[index] + "<br>");
}
*/

//Такой массив называется многомерной
/*
var arr = [1,2,3,4,["Hello","world"]];
document.write(arr[4][1]);
 */

// Метод join с помощью которого будут соединены в строку все элементы массива.
// Если аргумент не задан, элементы будут соединены запятыми.
//var array = ["Мандарин","Апельмин","Груша","Банан"];
//document.write(array.join());

//Метод reverse меняет порядок следование всех элементов в массиве на обратный
//document.write(array.reverse());

//Метод sort сортирует исходный элемент массива
/*
var array = [40,100,1,2,3,5,10,20,-50];
array.sort(function(a,b) {
        if(a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
});
document.write(array);
*/
//Метод concat позволяет нам создовать новые массивы, данный метод
//создает и возвращает нам уже новый массив который сожержит элементы исходного
//массива и собственно тех элементов который переданно параметру методу concat
/*
var arr = ["a","b","c"];
var a = arr.concat("d","e","f");
document.write(a);
 */

//Метод slice позволяет получить под массив или фрагмент исходного массива
/*
var arr = ["a","b","c","d","e","f"];
document.write(arr.slice(2,4));
 */
// splice Он объединяет в себе две разные функциональности: удаляет часть массива и добавляет новые //элементы на место удаленных. При этом можно свести к нулю количество удаляемых элементов - тогда //это будет просто добавление. И можно не добавлять элементов - тогда это будет просто удаление.
//Метод возвращает массив из удаленных элементов.
/*
var arr = ["a","b","c","d","e","f"];
arr.splice(2,2);
document.write(arr);
 */

// Метод push полезен для добавления значений в массив (в конце).
// Он добавляет элементы, начиная с текущей длины length и возвращает новую, увеличенную длину массива.
/*
var arr = ["a","b","c","d","e","f"];
arr.push(1,2);
document.write(arr);
*/
//Метод pop полезен для удаления значений в массиве (в конце).

/*
var arr = ["a","b","c","d","e","f"];
arr.pop(1,2);
document.write(arr);
 */


//// SORAX ////

// СТРОКИ
/*
var string = "Sometimes the same is different";
console.log(string.length);
console.log(string.charAt(0));
console.log(string.substring(10));
console.log(string.substring(10,21));
console.log(string.substr(14,4));
console.log(string.slice(-10));
console.log(string.lastIndexOf("me"));
*/
// ЛОГИЧЕСКИЕ ЗНАЧЕНИЯ
/*
console.log(6==6);
console.log(false == true);
console.log(true === false);
*/
// Преобразование типов
/*
console.log(5 + "5");
console.log(typeof(5 + "5"));
console.log("5" * 4);
console.log(typeof("5" * 4));
console.log("5" == 5);
console.log(Number("555"));
console.log(typeof(Number("555")));
console.log(String(4433));
console.log(typeof(String(4433)));
console.log(Boolean(1));
console.log(typeof(Boolean(1)));
console.log(!!5);
console.log(!!0);
console.log(typeof(345 + ""));
console.log(typeof(+"345"));

var number = 22;
console.log(typeof number.toString());
number = 45;
console.log(number.toString(3));
*/
// ЦИКЛЫ
/*
var i = 0;

for(i = 0; i < 10; i++) {
    console.log(i);
}


for (i = 10; i > 0; i--) {
    console.log(i);
}

while (i < 10) {
    console.log(i++);
}
*/

/// Функции ///
/*
function идентификатор(аргументы) {
  инструкции
}
*/

/*
function showMessage () {
  console.log("Привет всем присутствующим!");
}

showMessage();
*/
/*
function count() {
  var i, j; // передвинули объявления var в начало
  for (i = 0; i < 3; i++) {
    j = i * 2;
  }

  console.log( i ); // i=3
  console.log( j ); // j=4
}
count();
*/
// Внешние переменные
//Функция может обратиться ко внешней переменной, например:
/*
var userName = "Чингиз";

function showMessage() {
  userName = 'Азамат';   // (536) присвоение во внешнюю переменную
  var message = 'Привет, я ' + userName;
    console.log(message);
}

showMessage();
console.log(userName); // Азамат, значение внешней переменной изменено функцией
*/
// Параметры
/*
function showMessage(from, text) { // параметры from, text

  from = "** " + from + " **"; // здесь может быть сложный код оформления

  console.log(from + ': ' + text);
}

showMessage('Тиколя', 'Привет!');
showMessage('Тиколя', 'Как дела?');


function showMessage(from, text) {
  from = '**' + from + '**'; // меняем локальную переменную from
  console.log( from + ': ' + text);
}

var from = "Chingiz";

showMessage(from, "Привет");

console.log( from ); // старое значение from без изменений, в функции была изменена копия
*/
// Аргументы по умолчанию
/*
function showMessage(from, text) {
  if (text === undefined) {
    text = 'текст не передан';
  }

  console.log( from + ": " + text );
}

showMessage("привет", "Как дела?!"); // Маша: Привет!
showMessage("Что делаешь?"); // Маша: текст не передан
*/
/*
function getStr () {
    var str = prompt("Введите строку");
      if (!str) {
          getStr();
      }
      else {
        alert(str);
        return;
      }
}

getStr();
*/
/*
function getSum (a,b) {
      return a + b;
}
console.log(getSum(125,94));
*/

//Home Work Домашнее задание к 13-му уроку.
/*
var fruit = ["апельсин", "банан", "груша"];
document.write("Фрукты: " + fruit + "<br>");
document.write("На данный момент у нас в массиве фруктов: " + fruit.length + "<br>");
fruit.push("яблоко", "ананас");
fruit.unshift("грейпфрут");
document.write("Фрукты: " + fruit + "<br>");
document.write("На данный момент у нас в массиве фруктов: " + fruit.length + "<br>");
fruit.pop("ананас");
fruit.shift("грейпфрут");
document.write("Фрукты: " + fruit + "<br>");
document.write("На данный момент у нас в массиве фруктов: " + fruit.length + "<br>");
*/
/*
var students = ["Чингиз Кабыкенов", "Маметханов Шухрат", "Азамат Сулейменов", " Денис Телеген", " Александр Максименко"];
students.splice(2,0,"Санжар Абильдин, Жанболат Рыспеков");
document.write(students);
*/
//Домашнее задание к 14-му уроку.
//var fruits = ["яблоко", "апельсин", "груша", "гранат"];
/*
var fruits = ["банан", "мандарин", "манго"];
fruits.splice(fruits.length - 2,1,"ананас");
document.write(fruits);
*/
// МНОГОМЕРНЫЕ МАССИВЫ:
/*
var students = ["Чингиз Кабыкенов", "Маметханов Шухрат", "Азамат Сулейменов", " Денис Телеген", " Александр Максименко"];
students.splice(1,0,'Сергей','Марк');

var students2 = ["Арсен Злавдинов", "Ушкун", "Алтыншаш Куркгкнова" ];
var students3 = ["Оксана Зинова", "Елена Умекова"];

var myCollege = [students, students2, students3];


var appleSorts = ["Антоновка", "Семеринка"];
var orangeSorts = ["Египетский апельсин", "Турецкий апельсин", "Апельсин из ЮАР"];
var fruits = ["Банан", appleSorts, "Груша", orangeSorts];


var fruits = ['Ананас', 'Яблоко', 'Банан'];
fruits.pop();
document.write(fruits.length);
*/
// КОНСТРУКЦИЯ IF ELSE
/*
var pogoda = "Ясно";

if (pogoda == "Ясно") {
      document.write("Ура, едем на пляж!!");
}
else {
    document.write("Придется сидеть дома");
}

var count = 10;

if (count <= 10) {
      document.write("Переменная count меньше или равна десяти");
}
else {
    document.write("Переменная count больше десяти");
}
*/
// Домашнее задание к 17-му уроку.
/*
var students = ["Абаканов Сергей", "Гагарин Матвей", "Хантухова Лейла", "Алалина Алина",  "Сакуров Иоган"];

if (students.length >= 3) {
      document.write("это большой массив, в котором как минимум 3 элемента.");
}
else {
  document.write("что это маленький массив, в  котором менее 3-х элементов.");
}
*/
// МНОЖЕСТВЕННЫЕ УСЛОВИЯ
/*
var pogoda = "Ясно";
var car = "Да";

if (pogoda == "Ясно" && car == "Да") {
      document.write("Ура, едем на пляж!!");
}
else {
    document.write("Придется сидеть дома");
}
*/
/*
var myFriend = "Паша"

if (myFriend == "Саша" || myFriend == "Паша") {
      document.write("Идем играть в бильярд");
}
else {
    document.write("Идем играть в теннис");
}
*/
/*
Домашнее задание к 18-му уроку.

У Вас есть массив:  var students = ["Дмитрий", "Алексей", "Петр", "Виктор"];
Вам нужно написать условие, что, если длина этого массива равна 4 и последним элементом
является "Виктор", то вывсти на экран сообщение "Этот массив мне подходит",
а иначе вывести на экран, что массив вам не подходит.


var students = ["Дмитрий", "Алексей", "Петр", "Виктор"];
if (students.length == 4 && students[students.length-1]) {
      document.write("Этот массив мне подходит");
}
else {
  document.write("массив вам не подходит");
}
*/
/*
НЕСКОЛЬКО УСЛОВИЙ ОДНОВРЕМЕННО
Домашнее задание к 19-му уроку.

Напишите множественное условие для действий при различных сигналах светофора.
Если сигнал красный, то надо стоять, иначе, если желтый, то надо приготовиться, а иначе, можно идти.


var signal = "Красный";
if (signal == "Красный") {
      document.write("надо стоять");
}
else if (signal == "Желтый") {
      document.write("надо приготовиться");
}
else {
  document.write("можно идти");
}
*/

//ЦИКЛЫ
//Цикл while
/*
var i = 1;
while (i <= 10) {
    document.write(i + "<br>");
    i = i + 1;
}

Домашнее задание к 22-му уроку.

Есть массив студентов:
students2 = ['Абаканов Сергей', 'Алалина Алина', 'Гагарин Матвей', 'Хантухова Лейла', 'Викторов Сергей',  'Масалкин Андрей', 'Петравкин Алексей', 'Московин Павел', 'Данилов Станислав'];
С помощью цикла while  вам нужно вывести на экран всех студентов начиная с Гагарина Матвея и
заканчивая Петравкиным Алексеем. При условии, что мы видим массив и знаем, как расположены студенты в массиве.


var students2 = ['Абаканов Сергей', 'Алалина Алина', 'Гагарин Матвей', 'Хантухова Лейла', 'Викторов Сергей',  'Масалкин Андрей', 'Петравкин Алексей', 'Московин Павел', 'Данилов Станислав'];
var i = 2;
while (i < 7) {
      document.write(students2[i] + "<br>");
      i++;
}
*/
//ЦИКЛ for
/*
var students2 = ['Абаканов Сергей', 'Алалина Алина', 'Гагарин Матвей', 'Хантухова Лейла', 'Викторов Сергей',  'Масалкин Андрей', 'Петравкин Алексей', 'Московин Павел', 'Данилов Станислав'];
for (var i = 2; i < 7; i++) {
  document.write(students2[i] + "<br>");
}
*/
/*
Домашнее задание к 23-му уроку.

Написать цикл для вывода квадратов всех чисел от 1 до 7.

В итоге вы должны получить такую картину:
Квадрат 1 = 1
Квадрат 2 = 4
Квадрат 3 = 9
Квадрат 4 = 16
Квадрат 5 = 25
Квадрат 6 = 36
Квадрат 7 = 49


for (var i = 1; i < 8; i++) {
    document.write("Квадрат " + i + "= " + i * i + "<br>");
}
*/
//open("","New windows","width 15= 400, height = 300");

/*
Первое домашнее задание к 24-му уроку.

Ваша задача написать код, который бы спрашивал у пользователя  сколько ему лет.
Вы должны  проанализировать полученный ответ, и если человеку больше 20 лет, то вам
нужно вывести на экран  фразу "Вы уже взрослый человек!", а если меньше 20 или равно 20,
то вывести "Вы еще молоды, у Вас  все впереди!".

При этом возьмем допущение, что пользователь правильно укажет свой возраст, т.е. напишет
именно  число, без дополнительных символов., т.к. различные проверки мы будет учиться писать позже.


var age = prompt("Сколько вам лет?");
if (age >= 20) {
    document.write("Вы уже взрослый человек!");
}
else {
  document.write("Вы еще молоды, у Вас все впереди!");
}
*/
/*
var age = prompt("Сколько вам лет?");
var year = prompt("Какой сейчас год?");

while (age >= 0) {

    if (age == 0) {
        document.write("В " + year + " вы родились");
    }
    else {
      document.write("В " + year + " году вам было лет: " + age + "<br>");
    }
    age--;
    year--;
}
*/
/*
function foo(a,b) {
  var result = a + b;
  document.write("Квадрат числа равен " +  result);
}

foo(5,5);
*/

/*
Первое домашнее задание к 25-му уроку.

В качестве домашнего задания вам надо написать функцию,
которая бы вычисляла квадрат переданного ей числа и выводила бы его на экран.

function square(number) {
  var result = number + number;
  document.write("Квадрат числа равен " +  result);
}
square(25);

function cub() {
  var number = prompt("Укажите число для вычисления куба:");
  var result = number * number * number;
  document.write("Куб " + number + " = " + result);
}
cub();
*/
/*
Домашнее задание к 27-му уроку.

Создать функцию fio(), которая поочередно запрашивает у пользователя имя, фамилию и отчество,
а в  качестве результата своей работы возвращает ФИО одной строкой с пробелами между словами.

function fio() {
    var name = prompt("Ваше имя");
    var surname = prompt("Ваше Фамилия");
    var middle = prompt("Ваше Отчества");
    var result = name + " " + surname + " " + middle;
    return result;
}

var all = fio();
document.write(all);
*/

/*
Первое домашнее задание к 28-му уроку.

1. Напишите функцию, которая в качестве параметра получает строку,
а как результат своей работы,  возвращает количество символов в этой строке
(не печатает на экран, а именно возвращает).

2. Запросите у пользователя ввод любого слова и поместите этот ввод в переменную.

3. Вызовите вашу функцию, а в качестве параметра передайте ей переменную,
в которой сохранено слово пользователя.

4. Напечатайте на экран сообщение о том, сколько же символов оказалось в введенном
пользователем  слове.


function stroka(text) {
    return text.length;
}
var vvod = prompt("Введите слова");
document.write("Введено символов в слове: " + stroka(vvod));
*/
/*
Домашнее задание к 30-му уроку.

У вас есть переменная
var mySite = "http://ruseller.com";

Вам надо написать функцию, которая примет эту переменную в качестве параметра,
а в теле функции проверит с помощью метода indexOf, встречается ли в этой
переменной подстрока "http://".

Если да, то вывести на экран сообщение, что в названии сайта присутствует
указание протокола "http://", иначе - вывести, что не присутствует.


var mySite = "http://ruseller.com";
function foo(mySite) {
  mySite.indexOf("http://");
  var abc = "http://";
  if (mySite == abc) {
        document.write("Названии сайта присутствует указание протокола http://");
  } else {
    document.write("не присутствует.");
  }
}

foo("http://");
*/
/*
Домашнее задание к 31-му уроку.

У вас есть строка var myStr = "Хороший день.";
Ваша задача поместить слово "день" из этой строки в переменную day с помощью метода slice.
Вывести эту перменную на экран.

var myStr = "Хороший день.";
var day = myStr.slice(8,12);
document.write(day);
*/
/*
Домашнее задание к 32-му уроку.

У вас есть массив: var students = ["Илья","Greg", "Алина"];
Вам надо пройтись по каждому элементу этого массива и выяснить в каком элементе массива есть буквы,
которые не попадают в диапазон русских букв.

Подсказка. При решении нужно использовать цикл внутри цикла.
В первом цикле вы перебираете элементы массива, а во внутреннем цикле уже каждый символ
текущего элемента массива. Для  внутреннего цикла можете назвать счетчик var j = 0;

var students = ["Илья","Greg", "Алина"];
document.write(students.charAt());

var forTesting = "8 пингвинов и 9 карасей.";
function foo(mystring) {
  var regV = /^\d/;
  if (mystring.search(regV) == -1) {
      document.write("Строка не начинается с цифры");
  } else {
      document.write("В начале строки начинается цифра");
  }
}
 foo(forTesting);
*/
/*
Метод match() урок 35

var peoples = "Иванов Иван Иванович тел. 8(727)120-10-87 г.Алматы Кабыкенов Чингиз 8(727)276-58-82 Санжар Абильдин 8(7273)76-48-81";
var regV = /8\(727\)\d{3}-\d{2}-\d{2}/g;
var result = peoples.match(regV);
document.write(result);
*/
/*
Ищем сайты в строке урок 36

var testStr = "Вчера я открыл 5 сайтов: https://starbus.kz, www.nur.kz, zakon.kz, google.com, onay.KZ";
var regV = /(https:\/\/)?(www\.)?[a-z0-9-]{2,}\.kz/gi;
var result = testStr.match(regV);
for (var i = 0; i < result.length; i++) {
  document.write(result[i] + "<br>");
}
*/
/*
Домашнее задание к 36-му уроку.

Вам нужно написать регулярное выражение для поиска в тексте номера кредитной карты.
Текст: "Иван вчера потерял свою кредитку, ее номер 1178-9087-2384-8787.
Поэтому он пошел в банк и описал ситуацию. Там пошли ему навстречу и выдали
новую кредитку под номером:  1103-8899-0811-1722".

Напомню, что кредитные карты имеют формат: xxxx-xxxx-xxxx-xxxx

Например: 1178-9087-2384-8787

При этом, вам нужно найти только те номера, в которых первые 4 цифры содержат только 0, или 1 или 2, или 3,
т.е. вас, например, устроит номер 1103-8899-0811-1722, но не устроит 1490-8877-7345-8111 (т.к. здесь присутствует цифры 4 и 9, не удовлетворяющие нашим условиям).

При этом номер кредитки нужно не просто найти, а вытащить в переменную result и вывести на экран.

var textStr = "Иван вчера потерял свою кредитку, ее номер 1178-9087-2384-8787. Поэтому он пошел в банк и описал ситуацию. Там пошли ему навстречу и выдали новую кредитку под номером:  1103-8899-0811-1722";
var regV = /[0123]{4}-\d{4}-\d{4}-\d{4}/g;
result = textStr.match(regV);
for (var i = 0; i < result.length; i++) {
    document.write("Мне подходит этот номер карты: "+ result[i]);
}
*/
// Метод REPLACE
/*
Домашнее задание к 37-му уроку.

Написать функцию, которая меняет слэши на дефисы.

Ваша задача состоит в том, чтобы написать функцию, которая принимает два параметра.
1. Переменная, в которой содержится номер телефона, записанный с помощью слэшей.
var tel = "8/927/31/10/765";

2. Знак, на который нужно заменить слэш.
var sign = "-";

Внутри этой функции, с помощью регулярного выражения и метода replace()
вам надо заменить все слэши на указанный во втором параметре знак.

В качестве результата, нужно вывести уже измененный телефонный номер на экран.

Подсказка. Помните, что слэш это символ, который используется для создания
регулярного выражения (также  как и точка, скобки и т.д.) поэтому,
чтобы сообщить волшебнику, что надо искать именно слэш,
вы должны экранировать его обратным слэшем.

var tel = "8/927/31/10/765";
var sign = "-";

function changeTel(tel,sign) {
  var regV = /\//g;
  result = tel.replace(regV,sign);
  document.write(result);
}

changeTel(tel,sign);
*/
//ФУНКЦИЯ isNaN
/*
var fruit = "Апельсин";
var count = 10;

if (isNaN(fruit)) {
    document.write("Не число");
} else {
  document.write(fruit);
}
*/
/*
Домашнее задание к 39-му уроку.

Написать функцию, которая получает в качестве параметра массив,
затем перебирает все его элементы и выводит на экран, какая
информация содержится в каждом элементе: число или нечисло.
Массив для примера: var randSimbol = ["Молоко", 77, 11, "Мед", -88];

var randSimbol = ["Молоко", 77, 11, "Мед", -88];

function num(anyArray) {
  for (var i = 0; i < anyArray.length; i++) {
      if (isNaN(anyArray[i])) {
            document.write("Не число: "+ anyArray[i] + "<br>");
      } else {
          document.write("Число: " + anyArray[i] + "<br>");
      }
  }
}

num(randSimbol);
*/

/*
Домашнее задание к 40-му уроку.

Напишите функцию, которая получает в качестве параметра массив и перебирает
его на предмет преобразования строк, начинающихся с числа в обычные числа.
В результате работы функции, массив должен изменить свои значения на полностью числовые.

Массив для задания:

var myArray = ["100 попугаев", "201 рубль", "624 доллара", "109 кроликов", "33 весельчака", "62 кабана"];


var myArray = ["100 попугаев", "201 рубль", "624 доллара", "109 кроликов", "33 весельчака", "62 кабана"];

function number(anyArray) {
    for (var i = 0; i < anyArray.length; i++) {
        document.write(parseInt(anyArray[i]) + "<br>");
    }
}

number(myArray);
*/
/*
Домашнее задание к 41-му уроку.

Напишите функцию, которая получает в качестве параметра массив и перебирает его на предмет
преобразования чисел из простых, в такие, у которых есть два знака после запятой., т.е., если
в исходном массиве было число 11, то на выходе должно быть 11.00.

В результате работы функции массив должен изменить свои значения.

Массив для примера:
var randSimbol = [10.5, 15, 112, 77.6];


var randSimbol = [10.5, 15, 112, 77.6];

function strP(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].toFixed(2);
    document.write(array[i] + "<br>");
  }
}

strP(randSimbol);
*/
/*
Домашнее задание к 42-му уроку.

Ваша задача написать функцию, которая принимает два параметра.
1. Массив, состоящий из чисел с дробями.
2. Метод округления "round", "ceil" или "floor".

На выходе функция должна выводить этот же массив, но при этом все элементы массива,
должны быть  округлены с помощью указанного во втором параметре метода объекта Math.

Исходный массив:
var numberArray = [34.82, 12.90, 17.01, 78.51];


var numberArray = [34.82, 12.90, 17.01, 78.51];

function mathR(anyArray, method) {
  for (var i = 0; i < anyArray.length; i++) {
    if (method == "round") {
       anyArray[i] = Math.round(anyArray[i]);
        document.write(anyArray[i] + "<br>");
    } else if (method == "ceil") {
        anyArray[i] = Math.ceil(anyArray[i]);
        document.write(anyArray[i] + "<br>");
    } else if (method == "floor"){
      anyArray[i] = Math.floor(anyArray[i]);
      document.write(anyArray[i] + "<br>");
    } else {
       document.write("Вы передали не верный метод" + "<br>");
    }

  }
}
mathR(numberArray, "floor");
*/
/*
var testR = Math.random() * 100;
document.write(testR);


Домашнее задание к 43-му уроку.

Вам нужно создать функцию, которая будет принимать три параметра.
1. Массив, состоящий из 10 пустых элементов.
2. Начальное значение интервала
3. Конечное значение интервала.

Функция должна заполнить пустой массив случайными числами в указанном диапазоне и вывести
содержимое массива на экран.

Исходный массив для примера:
var randomArray = new Array(10);


var randomArray = new Array(10);
function getRandom(anyArray, min, max) {
  for (var i = 0; i < anyArray.length; i++) {
    anyArray[i] = Math.floor(Math.random(anyArray[i]) * (max - min)) + min;
    document.write(anyArray[i] + "<br>");
  }

}
getRandom(randomArray, 1500, 8050);
*/
/*
var forTime = new Date();
var year = forTime.getFullYear();
document.write("Сейчас год: " + year + "<br>");
var month = forTime.getMonth() + 1;
document.write("Сейчас месяц: " + month + "<br>");
var day = forTime.getDate();
document.write("Сейчас число: " + day + "<br>");
var dayWeek = forTime.getDay();
document.write("Сейчас день: " + dayWeek + "<br>");
var hour = forTime.getHours();
document.write("Сейчас час: " + hour + "<br>");
var minutes = forTime.getMinutes();
document.write("Сейчас минут: " + minutes + "<br>");
var seconds = forTime.getSeconds();
document.write("Сейчас секунд: " + seconds + "<br>");
*/

/*
Первое домашнее задание к 44-му уроку.

Ваша задача, используя методы объекта date, вывести на экран
время в формате: час:минута:секунда (пример: 14:23:11)

При этом, если секунды и минуты попадают в интервал от 0 до 10,
они должны выводиться с нулем  впереди.
т.е. вместо 18:7:3 у Вас должно выводиться 18:07:03

var forTime = new Date();
var hour = forTime.getHours();
var minutes = forTime.getMinutes();
var seconds = forTime.getSeconds();
if (minutes < 10) {
      minutes = "0" + minutes;
}
if (seconds < 10) {
      seconds = "0" + seconds;
}
document.write("Сейчас время " + hour + ":" + minutes + ":" + seconds);
*/
/*
var now = new Date();
var from1970 = (now.getTime() / (1000 * 60 * 60 * 24));

var ny = new Date(2018,0,1,0,0,0);
var from1970toNY = (ny.getTime() / (1000 * 60 * 60 * 24));
document.write("До нового года осталось: " + (Math.round(from1970toNY) - Math.round(from1970)) + "<br>");
var myDays = ["Воскресенье","Понидельник","Вторник","Среда","Четверг","Пятница","Суббота"];
document.write("Это будет день недели: " + myDays[ny.getDay()]);
*/

/*
Домашнее задание к 45-му уроку.

Написать функцию, которая выводит на экран дату, которая наступит через n дней от сегодняшней.
n - количество дней, которое нужно запросить у пользователя при загрузке страницы.
Это значение передаете в функцию в качестве параметра.
При этом итоговую дату надо вывести в нормальном формате на русском языке.
Например так (пример для ввода числа 79):

Через 79 дней будет вот такая дата:
День недели: Воскресенье
Число: 10
Месяц: Октябрь
Год: 2010

При этом пользователь  должен ввести число от 1 до 1000.
Если он не попал в интервал или ввел не число, то надо вывести ошибку.
Проверку можно осуществлять за пределами функции.

Подсказка. Если задание кажется сложным, не спешите смотреть ответ.
Постарайтесь разбить задачу на как можно более мелкие шажки и для
начала попробуйте написать код просто для конкретного числа дней,
вообще не используя функцию.


function viewDay(n) {
var now = new Date();
var nowmili = now.getTime();
var nowPlus79 = new Date(1000 * 60 * 60 * 24 * n);
var mili79 = nowPlus79.getTime();
var summaMili = nowmili + mili79;
var itogMoment = new Date(summaMili);
var myDays = ["Воскресенье","Понидельник","Вторник","Среда","Четверг","Пятница","Суббота"];
var myMonth = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
document.write("День недели: " + myDays[itogMoment.getDay()] + "<br>");
document.write("Число: " + itogMoment.getDate() + "<br>");
document.write("Месяц: " + myMonth[itogMoment.getMonth()] + "<br>");
document.write("Год: " + itogMoment.getFullYear() + "<br>");
}

var userDays = prompt("Введите число дней от 1 до 1000");
if (userDays > 1000 || userDays < 1 || isNaN(userDays)) {
    document.write("Вы ввели некорректное значение!");
} else {
   var itog = Math.round(userDays);
  document.write("Через " + itog + " дней, будет вот такая дата: <br>");
  viewDay(itog);
}
*/
/*
function forlesson() {
  alert("Привет");
}

var idInt = setInterval(forlesson, 3000);

clearInterval(idInt);
*/
// Создание собственного объекта
/*
// Вариант 1
var car = new Object();
car.color = "Белый";
car.maxSpeed = 220;
car.brand = "Nissan";

// Вариант 2
var moto = {
  color: "blue",
  horsePower: 130,
  brand: "Yamaha"
}

document.write("У нашего мотоцикла вот такой производитель: " + moto.brand);
*/

// Создание методов для собственного объекта
/*
var summerTour = {
   Turkye: 30000,
   Spain: 60000,
   USA: 70000
}

summerTour.calc = function(people, days, country) {
   var result = people * days * summerTour[country];
   return result;
}

document.write("Общая сумма: " + summerTour.calc(2, 10, "USA") + "тенге");
*/
// Вывод на экран всех свойств объекта и их значений
/*
var option;
for (option in navigator) {
  document.write(option + " : " + navigator[option] + "<br>")
}
*/
// Объекты navigator.screen, localtion и их свойства
/*
function userDetails() {
  document.write("Название браузера: " + navigator.userAgent + "<br>");
  document.write("Язык браузера: " + navigator.language + "<br>");
  document.write("Название ОС: " + navigator.oscpu + "<br>");
  document.write("Включены ли куки: " + navigator.cookieEnabled + "<br>");
  document.write("Включен ли интернет: " + navigator.onLine + "<br>");
}

userDetails();
*/
