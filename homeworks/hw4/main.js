// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calculateRectanglea(a, b) {
    return a * b;
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const PI = 3.14;
function calculateCircleArea(radius) {
    return PI * radius*2;
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calculateSurfaceArea(radius, height) {
    return 2 * PI * radius * height + 2 * PI * radius*2;
}

// - створити функцію яка приймає масив та виводить кожен його елемент
function printerOfArray(array) {
    for (let item of array) console.log(item);
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textBuilder(text) {
    return document.write(`<p>${text}</p>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function liBuilder(text) {
    return document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`);
}

// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function castomLiBuilder(text, count) {
    document.write('<ul>');
    for (let i =0; i < count; i++) document.write(`<li>${text}</li>`);
    document.write('</ul>');
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listFromArrayBuilder(array) {
    document.write('<ul>');
    for (let item of array) document.write(`<li>${item}</li>`);
    document.write('</ul>');
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function castomLiBuilder(array) {
    for (let item of array) {
        document.write('<div>');
        for (let field in item) {
            document.write(`<p>${field}: ${item[field]}</p>`)
        }
        document.write('</div>');
    }
}

// - створити функцію яка повертає найменьше число з масиву
function minimaizer(array) {
    let min = array[0];
    for (let num of array) {
        if (num < min)  min = num;
    }
    return min
}

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let [val1, val2] = [arr[index1], arr[index2]];
    [arr[index1], arr[index2]] = [val2, val1];
    return arr
}

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let value;
    for (let i = 0 ; i<currencyValues.length; i++){
        if (exchangeCurrency === currencyValues[i].currency) value = +currencyValues[i].value
    } console.log(sumUAH/value)
}