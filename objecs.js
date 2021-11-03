function show(entity) {
  return Array.isArray(entity) ? console.table(entity) : console.log(entity);
}

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);

const c = {
  ...a,
  ...b,
  name: 'mango',
};
console.log(c);

// const numbers = [1, 2, 3, 4].concat([4, 5, 6], [7, 8, 9]);
// const temps = [34, 657, 213, 546, 90, 45, 45];

// const numbers = [...temps]; распыляет temp в numbers

// show(numbers === temps); false

// console.log(numbers);

// const numbers = [1000, 34374, 347, 459, 94545, ...temp, 23, 45, 67];

// show(numbers);

// const temps = [34, 657, 213, 546, 90, 45, 45];
// const lastWeek = [2, 334, 3, 45, 56, 56, 343];
// const thisWeek = [78766, 65, 5, 4, 34, 567, 79, 98, 86, 54, 4];

// const allArrs = [...temps, ...lastWeek, ...thisWeek];

// console.log(allArrs);
// console.log(...allArrs);

// console.log(...temps);
// // show(Math.max(...temps));
// // show(Math.min(...temps));

// // show(temps);

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// show(a);
// show(b);

// show(a[0] === b[0]);
// show(a === b);
