const user = {
  name: 'fuck',
  age: 20,
  city: 'kyiv',
  status: 'married',
  likes: [1, 2, 3, 4, 5],
};

// const { name, age, city, statu, likes } = user;

// likes.push(20);
// console.log(likes);

// console.log(name);
// console.log(age);

// console.log(city);

// console.log(status);
// user.name = 'mzafaka';
// console.log(name);
// console.log(user)

const profile = {
  name: 'max',
  tag: 'maxSam',
  location: 'Kyiv, Ukraine',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/1228.jpgh',
  status: {
    followers: 5603,
    views: 4343,
    likes: 121,
  },
};

// const {
//   name: userName,
//   tag,
//   location,
//   avatar,
//   status: { followers, views, likes },
// } = profile;

// console.log(userName, tag, location, avatar, followers, views, likes);

// const temps = [34, 657, 213, 546, 90, 45, 45];
// const lastWeek = [2, 334, 3, 45, 56, 56, 343];
// const thisWeek = [78766, 65, 5, 4, 34, 567, 79, 98, 86, 54, 4];

// const allArrs = [...temps, ...lastWeek, ...thisWeek];

// const authors = {
//   kiwi: 9,
//   max: 8,
//   ira: 10,
//   didi: 7,
// };

// const entries = Object.entries(authors);

// for (const [name, rating] of entries) {
//   console.log(name, rating);
//   console.log(Math.max([name, rating]));
// }

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        // console.log('we have this product already ', product.name);
        item.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (productName === name) {
        // console.log('found this product: ', productName);
        // console.log(i);
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity() {},
  decreaseQuantity() {},
};
console.log(cart.getItems());
cart.add({ name: 'lemon', price: 100 });

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 100 });
cart.add({ name: 'lemon', price: 100 });
cart.add({ name: 'grapefruit', price: 57 });
cart.add({ name: 'grapefruit', price: 57 });
cart.add({ name: 'grapefruit', price: 57 });
console.log(cart.getItems());

// console.log(cart.getItems());
// console.table(cart.items);

// cart.remove('lemon');
// console.log(cart.getItems());

console.log('total: ', cart.countTotalPrice());

// cart.clear();
// console.log(cart.getItems());
