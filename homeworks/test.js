// ==========================
// - є масив
 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];
// -- відсортувати його за спаданням за monthDuration
let newArr = coursesAndDurationArray.sort((a,b) => a.monthDuration > b.monthDuration)
console.log(newArr);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let copy = coursesAndDurationArray.filter(i => i.monthDuration > 5)
console.log(copy)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let copy2 = coursesAndDurationArray.map((value, index)=> {
    let newVal = {
        id: index +1,
        title: value.title,
        monthDuration: value.monthDuration
    }
    return newVal;
})
console.log(copy2)