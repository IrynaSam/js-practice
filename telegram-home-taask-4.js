// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(
//   getCommonElements(
//     [
//       1,
//       2,
//       3,
//       2123,
//       34,
//       4,
//       566,
//       778,
//       ,
//       55,
//       4,
//       33,
//       45,
//       7,
//       8,
//       9,
//       76,
//       4,
//       3,
//       ,
//       7,
//       8,
//     ],
//     [
//       2,
//       1,
//       17,
//       19,
//       234,
//       66,
//       79,
//       9,
//       87654,
//       34,
//       57,
//       9,
//       987,
//       66,
//       4,
//       346,
//       ,
//       898,
//       98,
//       67,
//       4,
//     ]
//   )
// );

const changeEven = (numbers, value) => {
  // Change code below this line
  const newArr = [];
  numbers.forEach(element => {
    if (element % 2 === 0) {
      element += value;
      newArr.push(element);
    } else {
      newArr.push(element);
    }
  });

  return newArr;
  // Change code above this line
};

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

const getUserNames = users => {
  //   const userNames = [];
  //   users.forEach(user => {
  //     userNames.push(user.name);
  //   });

  //   return userNames;
  users.map(user => console.log(user.name));
};

// console.log(users);
// console.log(getUserNames(users));
const getFriends = users => {
  const allFriends = users.flatMap(user => user.friends);

  const friends = allFriends.filter(
    (friend, index, array) => array.indexOf(friend) === index
  );

  return friends;
};

// console.log(getFriends(users));
//=============================================================
// const getActiveUsers = users => {
//   const activeFriends = users.filter(user => user.isActive);
//   return activeFriends;
// };

const getActiveUsers = users => users.filter(user => user.isActive);

// console.log(getActiveUsers(users));
//================================================================
const getInactiveUsers = users => users.filter(user => !user.isActive);

// console.log(getInactiveUsers(users));
//===================================================================
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

//====================================================================

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

// console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));
//===================================================================

const array = [2, 6, 48, 80, 58, 42, 10, 12];

const array2 = [23, 2, 3556, 68, 9, 9, 8, 766455, 3, 434];

const elementsAreEven = array => array.every(arr => arr % 2 == 0);

// console.log(elementsAreEven(array));
// console.log(elementsAreEven(array2));
//===================================================================
const isEveryUserActive = users => users.every(user => user.isActive);

// console.log(isEveryUserActive(users));
//===================================================================
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(element => element % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(element => element % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 !== 0);

//========================================================================
const isAnyUserActive = users => users.some(user => user.isActive);

// console.log(isAnyUserActive(users));

//=====================================================================
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce(
  (prevValue, number) => prevValue + number
);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;

const func = array =>
  array.reduce((value, number) => {
    console.log(value);
    console.log(number);
    return value + number;
  });

// function func(arr) {
//   return arr.reduce((value, number) => {
//     return value + number;
//   });
// }

// console.log(func(playtimes));

//==================================================================
const students = [
  { name: 'Mango', score: 83 },
  { name: 'Poly', score: 59 },
  { name: 'Ajax', score: 37 },
  { name: 'Kiwi', score: 94 },
  { name: 'Houston', score: 64 },
];

// Название аккумулятора может быть произвольным, это просто параметр функции
const totalScore = students.reduce((total, student) => {
  // console.log(total);
  // console.log(student);
  return total + student.score;
}, 0);

// console.log(totalScore);
const averageScore = totalScore / students.length;
//===========================
const players1 = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players1.reduce(
  (total, player) => total + player.playtime / player.gamesPlayed,
  0
);

// console.log(totalAveragePlaytimePerGame);
//=========================================================================================
const calculateTotalBalance = users =>
  users.reduce((total, userBalance) => total + userBalance.balance, 0);

// console.log(calculateTotalBalance(users));
//========================================================================================
const getTotalFriendCount = users =>
  users.reduce((totalFriends, user) => totalFriends + user.friends.length, 0);

// console.log(getTotalFriendCount(users));
//==========================================================================================
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);
// console.log(releaseDates);
// console.log(authors);
//==========================================================================================
const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => {
  // let count = 0;
  // console.log('this is a: ', a);
  // console.log('this is b: ', b);
  // count += 1;
  // console.log(`iteration numbeer ${count}`);
  // console.log('this is array on current iteration ', ascendingScores);
  return a - b;
});

// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

const releaseDates1 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates1 = [...releaseDates1].sort((a, b) => a - b);

const descendingReleaseDates1 = [...releaseDates1].sort((a, b) => b - a);

//=============================================================================================
const students1 = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];

const inAlphabetOrder = [...students1].sort((a, b) => {
  // console.log('this is a: ', a);
  // console.log('this is b: ', b);
  // console.log('end');
  return a.localeCompare(b);
});
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = [...students1].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder);

const authors1 = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
  'Howard Lovecraft',
];
// Change code below this line

const authorsInAlphabetOrder = [...authors1].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors1].sort((a, b) => b.localeCompare(a));
//============================================================================================
const books1 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books1].sort((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author)
);

const sortedByReversedAuthorName = [...books1].sort((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author)
);

const sortedByAscendingRating = [...books1].sort(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating
);

const sortedByDescentingRating = [...books1].sort(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating
);
//==================================================================================================
const sortByAscendingBalance = users =>
  [...users].sort(
    (firstUser, secondUser) => firstUser.balance - secondUser.balance
  );

//=================================================================================================
const sortByDescendingFriendCount = users =>
  [...users].sort(
    (userA, userB) => userB.friends.length - userA.friends.length
  );
//==================================================================================================
const sortByName = users =>
  [...users].sort((userA, userB) => userA.name.localeCompare(userB.name));
//====================================================================================================
const books2 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

// const names = [...books2]
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .sort((bookA, bookB) => bookA.author.localeCompare(bookB.author))
//   .map(book => book.author);

const filterBooks = books =>
  [...books].filter(book => book.rating > MIN_BOOK_RATING);

// console.log(filterBooks(books2));

const mapBooks = users => users.map(user => user.author);

// console.log(mapBooks(filterBooks(books2)));

const sortedAuthors = users =>
  users.sort((userA, userB) => userA.author.localeCompare(userB.author));

// console.log(mapBooks(sortedAuthors(filterBooks(books2))));
//===========================================================================================
const getNamesSortedByFriendCount = users =>
  [...users]
    .sort((userA, userB) => userA.friends.length - userB.friends.length)
    .map(user => user.name);

// console.log(getNamesSortedByFriendCount(users));

//=============================================================================================
const getSortedFriends = users =>
  [...users]
    .flatMap(user => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((friendA, friendB) => friendA.localeCompare(friendB));
//=============================================================================================
const getTotalBalanceByGender = (users, gender) =>
  [...users]
    .filter(user => user.gender === gender)
    .reduce((total, userBalance) => total + userBalance.balance, 0);
