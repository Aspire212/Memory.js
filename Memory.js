/*Рекурсивный разворот*/

let test = (str) => str === "" ? "" : newStr = test(str.substr(1)) + str.charAt(0);

/*---------------------------------------*/

/*рекурсивный подсчет многомерного массива*/

let count = 0;
function isogram(arr){
     for (let elem of arr) {
       if(typeof elem === 'number'){
          count += elem;
       }
       else{
         isogram(elem);
       }
   }
     return count;
}

/*---------------------------------------*/

//поиск ключей объекта в строке при помощи рекурсии 

function vowels(str, letter) {
  if (str === "") {
    return Object.values(letter).reduce((sum, el) => sum + el, 0);
  } else {
    for (let key in letter) {
      str.charAt(0) === key ? letter[key]++ : 0;
    }
    return vowels(str.substr(1), letter);
  }
}

/*---------------------------------------*/

/*функция замены нескольких элементов массива*/

function searchDot(arr, sym) {
  arr.map((el, i) => {
    el === sym ? el = arr.splice(i - 1, 3, (arr[i - 1] + arr[i] + arr[i + 1])) : false;
  });
}

/*---------------------------------------*/

/*Поиск уникальных элементов в строке*/

const isIsogram = (str) => {
  let result = [];
  str = str.toLowerCase().split("");
  for (let el of str) {
    if (!result.includes(el)) {
      result.push(el)
    }
  }
  return result.length === str.length;
}

/*---------------------------------------*/

/*рандом целого числа от  m до n*/

const randomDiap = (n, m) => Math.floor(Math.random()*(m - n + 1))+n;

/*---------------------------------------*/

/*округленте числа n до m*/

const roundingNum = (n, m) => Math.round(n/m)*m;

/*---------------------------------------*/

//проверить  на целосность числа
//num^0 - обязательно в скобках

const isInteger = (num) => (num ^ 0) === num;
//Number.isIntege() тоже самое

/*---------------------------------------*/

/*получить ключ по значению*/

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

/*---------------------------------------*/

/*функции форматирования времени*/

function formatDateTime(dt){
    let year    = dt.getFullYear();
    let month   = dt.getMonth() + 1;
    let day     = dt.getDate();
    let hours   = dt.getHours();
    let minutes = dt.getMinutes();
    let seconds = dt.getSeconds();
    
    return `${str01(day,2)}.${str01(month, 2)}.${year} ${str01(hours, 2)}:${str01(minutes, 2)}:${str01(seconds, 2)}`;
}

function str01(val, len){
  let StrVal = val.toString();
  while(strVal.length < len){
    strVal = '0' + len;
  }
  return strVal;
}

/*---------------------------------------*/

/*Синтаксис записи ф-ции в пртотипы*/

//Метод проверяет четное или не четное число

Number.prototype.isOdd = function(){
  return Number.isInteger(this / 2);
}
//const a = 24; a.isOdd() => true;

/*---------------------------------------*/

/* преобразование 2ичного в 10чное*/

const binaryArrayToNumber = a => parseInt(a, 2)
  // a - двоичная строка
  
/*---------------------------------------*/

/*Счетчик на кнопках, на каждой свой при помощи делегирования и замыкания*/

const allBtn = document.querySelectorAll ('button');
  allBtn.forEach(el => {
    let count = 0;
    el.addEventListener('click', function(){
      count++;
      el.innerHTML = count;
    })
  })
  
/*---------------------------------------*/

/*Ф-ция создающая элемент и добавяющая его в дом, при этом можно добавить сразу class и TextContent*/

//ввожу нал в аргумент если его нет нет
function createAndAppend(parent, chid, className, contTxt){
  let el = document.createElement(chid);
  className !== null  ? el.classList.add(className): false;
  contTxt !== null ? el.textContent = contTxt : false;
  parent.append(el);
}

/*---------------------------------------*/

/*Сортировка объекта по по полю*/

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

/*---------------------------------------*/

 /*Сортировка HTML колекции по дата атрибуту*/
/*
1.PARENT -  родительский элемент
2.COLECTION - его чилды
3.DATA - дата атрибут чилдов
4.TYPE - T/F для сортировки по возр/убыв
*/
 
 function sortCol(parent, collection, data, type = true) {
   let arr = [...collection];
   type ? arr.sort((a, b) => a.getAttribute(data) - b.getAttribute(data)) : arr.sort((a, b) => b.getAttribute(data) - a.getAttribute(data));
   let output = "";
   arr.forEach(el => output += el.outerHTML);
   return parent.innerHTML = output;
 }
 
/*---------------------------------------*/

/*Функции валидации формы*/

/*если в allinput(нодлист с инпутами и текстареями) нет текста, бордер формы окрашивается в красный цвет, при помощи класса "red" */

function createAndPush() {
  let objVal = {};
  allInput.forEach(input => {
    objVal[input.id] = input.value;
  });
  Object.keys(objVal).some(el => {
    allInput.forEach(input => {
      if (!objVal[el]) {
        input.id === el && toggleClas(input, 'red');
        console.log('Заполните все поля')
      } else {
        input.id === el && toggleClas(input, 'red', false);
      }
    });
  });
  if (Object.values(objVal).every(val => !!val.length)) {
    objVal.price += '$';
    arr.push(objVal);
    setTimeout(() => clearForm(), 100);
  }
}
//функция добавления/удаления класса, зависит от истинности значения toggle

function toggleClas(elem, name, toggle = true) {
  toggle ? elem.classList.add(name) : elem.classList.remove(name);
}

/*---------------------------------------*/



/*Глубинное копирование объектов*/

function deepCopy(obj, newObj = {}) {
  for (let key in obj) {
    if (obj[key] instanceof Object && !(obj[key] instanceof Function)) {
      newObj[key] = Array.isArray(obj[key]) ? deepCopy(obj[key], []) : newObj[key] = deepCopy(obj[key]);
      continue;
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

/*---------------------------------------*/


/*Получение дня недели*/

function dayWeek(date) {
  date = new Date(date);
  let arrWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return arrWeek[date.getDay()];
}

//dayWeek("18 October 1909 10:27")

/*---------------------------------------*/

/*Складывать цифры числа до тех пор пока не выйдет от 1 до 9*/

function addDigits(num){
  num = num.toString();
  if(num.length === 1){
    return parseInt(num);
  }
  else{
     num = num.split("").reduce((a, b) => +a + +b, 0);
     return num.toString().length === 1 ? num : addDigits(num);
  }
}

/*---------------------------------------*/

/*каррирорование*/

const sum = (a, b) => b !== undefined ? a+b : (b) => a + b;


//console.log(sum(1)(2))

/*---------------------------------------*/
