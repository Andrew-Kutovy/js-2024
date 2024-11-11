// --створити масив з:
// - з 5 числових значень
let arrNums = [0,1,2,3,4];
console.log(arrNums);

// - з 5 стічкових значень
let arrStrings = ['andr', 'serv', 'dfg', 'koks', 'dffsd'];
console.log(arrStrings);

// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arrMix = [12, 'fffd', true, 43, false];
console.log(arrMix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let newArr = [];
newArr[0] = 34;
newArr[1] = 'dfgfg';
newArr[2] = true;
newArr[3] = 13.34;
newArr[4] = 'dfgdfgdg';
console.log(newArr);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arrNumbers = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let ind = 0;
while (ind < arrNumbers.length){
    console.log(arrNumbers[ind]);
    ind++;
}

//     2. перебрати його циклом for
for (let item of arrNumbers) {
    console.log(item);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('------------------------числа тільки з непарним індексом--------------------------------------');
ind = 0;
while (ind < arrNumbers.length){
    if (ind%2 !== 0) {
        console.log(arrNumbers[ind]);
    }
    ind++
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('------------------------числа тільки з непарним індексом--------------------------------------');
for (let i =0; i <arrNumbers.length; i++) {
    if (i%2 !== 0){
        console.log(arrNumbers[i])
    }
}

console.log('5. перебрати циклом while та вивести  числа тільки парні  значення');
ind = 0;
while (ind < arrNumbers.length) {
    if (arrNumbers[ind]%2 === 0){
        console.log(arrNumbers[ind]);
    }
    ind++;
}

console.log('6. перебрати циклом for та вивести  числа тільки парні  значення')
for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i]%2 === 0) {
        console.log(arrNumbers[i]);
    }
}

console.log('7. замінити кожне число кратне 3 на слово "okten"');
let newNumbArr = [];
for (let i =0; i< arrNumbers.length; i++) {
    if (arrNumbers[i]%3 === 0) {
        newNumbArr[i] = 'okten';
    } else {
        newNumbArr[i] = arrNumbers[i];
    }
}
console.log(newNumbArr);

console.log('8. вивести масив в зворотньому порядку');
for (let i = arrNumbers.length -1; i >= 0; i--){
    console.log(arrNumbers[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
console.log('9.1. перебрати його циклом while')
ind = arrNumbers.length -1;
while (ind >= 0) {
    console.log(arrNumbers[ind]);
    ind--;
}

console.log('9.2. перебрати його циклом for')
for (let i = arrNumbers.length-1; i>=0; i--){
    console.log(arrNumbers[i]);
}

console.log('9.3. перебрати циклом while та вивести  числа тільки з непарним індексом');
ind = arrNumbers.length -1;
while (ind >= 0) {
    if (ind%2 !== 0) {
        console.log(arrNumbers[ind]);
    }
    ind--;
}

console.log('9.4. перебрати циклом for та вивести  числа тільки з непарним індексом');
for (let i = arrNumbers.length -1; i >= 0; i--) {
    if (i%2 !== 0) {
        console.log(arrNumbers[i]);
    }
}

console.log('9.5. перебрати циклом while та вивести  числа тільки парні  значення')
ind = arrNumbers.length -1;
while (ind >= 0) {
    if (arrNumbers[ind]%2 ===0 ) {
        console.log(arrNumbers[ind]);
    }
    ind--;
}

console.log('9.6. перебрати циклом for та вивести  числа тільки парнні  значеня');
for (let i = arrNumbers.length -1; i >= 0; i--) {
    if (arrNumbers[i]%2 === 0) {
        console.log(arrNumbers[i]);
    }
}

console.log('9.7. замінити кожне число кратне 3 на слово "okten"');
let newNumbArr2 = [];
for (let i = arrNumbers.length -1; i >= 0; i--) {
    if (arrNumbers[i]%3 === 0) {
        newNumbArr2[i] = 'okten';
    } else {
        newNumbArr2[i] = arrNumbers[i];
    }
}
console.log(newNumbArr2);

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers = [1,2,3,6,8,45,23,45,7,99];
for (const number of numbers) {
    console.log(number);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let strings = ['andr', 'serv', 'dfg', 'koks', 'dffsd', 'dsfdf', 'dva', 'tri', '459599', 'five'];
for (const string of strings) {
    console.log(string);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mixes = [12, 'fffd', true, 43, false, -13, 0, 'false', 'try', 44];
for (const mix of mixes) {
    console.log(mix);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
console.log('За допомогою if та typeof вивести тільки булеві елементи');
for (const mix of mixes) {
    if (typeof mix === 'boolean') {
        console.log(mix);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
console.log('вивести тільки числові елементи');
for (const mix of mixes) {
    if (typeof mix === "number"){
        console.log(mix);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
console.log('вивести тільки рядкові елементи');
for (const mix of mixes) {
    if (typeof mix === "string"){
        console.log(mix)
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let array = [];
array[0] = 32;
array[1] = 'twenty';
array[2] = true;
array[3] = 'TRUE';
array[4] = 324;
array[5] = false;
array[6] = 'world';
array[7] = 'hello';
array[8] = -14;
array[9] = true;
for (const elem of array) {
    console.log(elem);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(`<p>${i}</p>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 100; i++) {
    console.log(i);
    document.write(`<p>${i}</p>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 100; i+=2) {
    console.log(i);
    document.write(`<p>${i}</p>`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 1; i <= 100; i++) {
    if (i%2 === 0){
        console.log(i);
        document.write(`<p>${i}</p>`);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i <= 100; i++) {
    if (i%2 !== 0){
        console.log(i);
        document.write(`<p>${i}</p>`);
    }
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: 'hghghg3',
        pageCount: 432,
        genres: ['dsfdsfds'],
        authors: [
            {
                name: 'Dfffdg',
                age: 43
            },
            {
                name: 'dfgfgfd',
                age: 65
            }
        ]
    },
    {
        title: 'hghghg',
        pageCount: 332,
        genres: ['dsfdsfds'],
        authors: [
            {
                name: 'Dfffdg',
                age: 43
            },
            {
                name: 'dfgfgfd',
                age: 65
            }
        ]
    },
    {
        title: 'hghghg fgfd',
        pageCount: 42,
        genres: ['dsfdsfds', 'jfjdfk'],
        authors: [
            {
                name: 'Dfffdg',
                age: 43
            }
        ]
    }
]

console.log('-знайти наібльшу книжку.');
let max = 0;
let title;
for (let book of books) {
        if (book.pageCount > max) {
            max = book.pageCount;
            title = book.title;
        }
    console.log(`The most greeter book is ${title}, it have ${max} pages`);
}

console.log('- знайти книжку/ки з найбільшою кількістю жанрів')
let genres = 0;
let booksWithMaxGenres = [];
for (let book of books){
    if (book.genres.length > genres){
        genres = book["genres"].length;
        booksWithMaxGenres = [book.title];
    } else if (book["genres"].length === genres) {
        booksWithMaxGenres.push(book.title);
    }
    console.log(`The book with the most genres is ${booksWithMaxGenres}, it have ${genres} genres`);
}

console.log('- знайти книжку/ки з найдовшою назвою');
max = 0;
let bookTitles = [];
for (let book of books) {
    if (book.title.length > max){
        max = book.title.length;
        bookTitles = [book.title];
    } else if (book.title.length === max ){
        bookTitles.push(book.title);
    }
    console.log(`The books with most titles is ${bookTitles}`);
}

// - знайти книжку/ки які писали 2 автори


// - знайти книжку/ки які писав 1 автор