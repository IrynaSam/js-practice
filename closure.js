// makeDish('Frank', 'tea');

const makeCheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} is making ${dish}`);
  };
  return makeDish;
};

const frank = makeCheff('Frank');
console.log(frank);

frank('chicken nuggets');
const george = makeCheff('George');
george('shwarma');

const floatingPoint = 3.82743243297432984;
const someInt = Math.round(floatingPoint);
const withDecimals = Number(floatingPoint.toFixed(3));

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };

// console.log(rounder(floatingPoint, 5));
// console.log(rounder(floatingPoint, 6));
// console.log(rounder(floatingPoint, 9));
// console.log(rounder(floatingPoint, 1));
// console.log(rounder(floatingPoint, 3));
// console.log(rounder(floatingPoint, 8));

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

const places = rounder(5);

console.log(places(floatingPoint));

const salaryManagerFactory = function (employeeName, baseSalary) {
  let salary = baseSalary;

  const increaseBy = amount => (salary += amount);
  const decreaseBy = amount => (salary -= amount);

  return {
    raise(amount) {
      return increaseBy(amount);
    },
    lower(amount) {
      return decreaseBy(amount);
    },
    current() {
      return `${employeeName} current salary is ${salary}`;
    },
  };
};

const max = salaryManagerFactory('max', 1405);

console.log(max);
console.log(max.raise(1000));
console.log(max.lower(150));
console.log(max.current());

// console.log(salaryManagerFactory('max', 1405));

const arrowFunc = () => ({ a: 5 });

console.log(arrowFunc());
