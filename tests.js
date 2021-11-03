const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

let evenTotal = 0;

// for (let i = 0; i < numbers.length; i += 1){
//     // console.log(numbers[i]);
//     if (numbers[i] % 2 === 0) {
//         evenTotal += numbers[i];
//         console.log(evenTotal + "====" + numbers[i]);
//     }
// }
for (const number of numbers) {
    if (number % 2 === 0) {
        evenTotal += number;
    }
}
// console.log(evenTotal);
///==================================================================

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

let total = 0;

const array3 = array1.concat(array2);
// console.log(array3);

for (const arr of array3) {
    total += arr;
}
// console.log(total);
//====================================================================
//      ******************** indexOf == splice(indexOfElement, quantityOfElements) **************************
//                      DESTRUCTIVE
//=====================================================================
const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
const obj = {
    name: 'wade',
    age: '20'
}
const cardRemove = "card-3";
const index = cards.indexOf(cardRemove);

// console.log(index);
cards.splice(index, 1);
// console.log(cards);
//spice can push elements into array

cards.splice(3, 0, obj, "string", 5, false);// 3 specifies index where to push an element, 0 specifies number of element for delition and 0 literally means no elements will be deleted, and then add element(s) for inserting into an array


// console.log(cards);

//UPDAT array with splice - delition with substitution

const index2 = cards.indexOf("card-4");

cards.splice(2, 1, "card-4 updated");

// console.table(cards);

//****************PRACTICE*********************** */

function show(entity) {

    return Array.isArray(entity) ?
        console.table(entity) :
        console.log(entity);
    
}

function add(array, index, ...arg) {
    return array.splice(index, 0, ...arg);
}

function remove(array, index, numOfElemToRemove) {
    return array.splice(index, numOfElemToRemove);
}

function update(array, elemIndexToUpdate, updateToEntity) {
    return array.splice(elemIndexToUpdate, 1, updateToEntity);
}

show(cards);

add(cards, 0, 2, 3, "what", { name: "jeff", age: 20 });

show(cards);

remove(cards, 2, 6);

show(cards);

update(cards, 2, 4);
update(cards, 4, 6);
update(cards, 5, 7);
update(cards, cards.length, 8)
show(cards);
const string = 'hello there';
show(string);



