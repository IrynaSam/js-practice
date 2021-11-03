// const userName = prompt("what is your name?");

// if (userName.length < 4) {
//     alert("This is way too short! Try again");
//     userName;
// } else {
//     alert(`hello ${userName}`);
// // }

// const clients = ["Mango", "Poly", "Ajax"];

// function getExtremeElements(array) {
//   // Change code below this line
//     const empty = [];
// empty[0] = array[0];
// empty[1]= array[array.length-1];
 
  
//   return empty;

//   // Change code above this line
// }

// console.log(getExtremeElements(clients));
// console.log(clients[0].split(/));
//============================================================
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);
// }
//==============================================================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//     const values = Object.values(color);
//     for (const value of values) {
//         if(value.includes("#")){
//     	hexColors.push(value);
//     } else {
//     	rgbColors.push(value);
//     }
//     }
// }
// console.log(hexColors);
// console.log(rgbColors);
//==================================================================
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// // console.log(products.categories)
// function getAllPropValues(propName) {
//   // Change code below this line
//     const propNamesValue = [];

//     for (const product of products) {
//         console.log(product);
        
//         if (product.propName !== undefined) {
//             propNamesValue.push(product.propName);
//         }
//     }

//     return propNamesValue;
//   // Change code above this line
// }
   //========================================================================
//  const bookShelf = {
//    books: [
//      "The last kingdom",
//      "Haze",
//      "The guardian of dreams"
//    ],
//   updateBook(oldName, newName) {
//     // Change code below this line
// 	const index = this.books.indexOf(oldName);
//     this.books.splice(index, 1, newName);
	

//     // Change code above this line
//   },
// };
// console.log(bookShelf);
// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf);
// bookShelf.updateBook("The last kingdom", "Dune");
// console.log(bookShelf);


// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook("Мгла");
// bookShelf.addBook("Страж снов");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
// bookShelf.removeBook("Мгла");
// console.log(bookShelf.getBooks());

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

// 	const index = this.potions.indexOf(potionName);
//     this.potions.splice(index);

//     // Change code above this line
//   },
// };
// console.log(atTheOldToad);
// atTheOldToad.removePotion("Dragon breath")

//========================================
// console.log(potion);
      // console.log(potion["name"])
      // const potionKeys = Object.keys(potion);
      // const potionValues = Object.values(potion);
      // console.log(potionKeys);
      // console.log(potionValues);
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    //include?
    const potions = this.potions;
    for (const potion of potions) {
      if (potion.name === newPotion.name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
    }
    potions.push(newPotion);
  },
  removePotion(potionName) {

    const potions = this.potions;

    for (let i = 0; i < potions.length; i += 1){
      if (potions[i].name === potionName) {
       return potions.splice(i, 1);
      }
    }
    
      return `Potion ${potionName} is not in inventory!`;
    
  },
  updatePotionName(oldName, newName) {

    const potions = this.potions;

    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === oldName) {
        return potions[i].name = newName;
      }
    }

    return `Potion ${oldName} is not in inventory!`;
  }
  //   const potionIndex = this.potions.indexOf(oldName);

  //   if (potionIndex === -1) {
  //     return `Potion ${oldName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1, newName);
  // },
  // Change code above this line
};

atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
console.log(atTheOldToad.potions);




// atTheOldToad.addPotion({ name: "Speed potion", price: 460 })
// console.log(atTheOldToad.potions);
// atTheOldToad.getPotions();
// atTheOldToad.removePotion("Dragon breah");
// console.log(atTheOldToad.potions);/


// atTheOldToad.addPotion({ name: "tratata", price: 46087 });