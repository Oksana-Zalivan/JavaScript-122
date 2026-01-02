// 1) Створення об’єктів (10)

// Створи об’єкт user з властивостями: name, age, isAdmin.
// const user = {
//     name: 'Oksana',
//     age:37,
//     isAdmin: true
// };


// Створи об’єкт book з властивостями: title, author, year, pages.
// const book = {
//     title: 'Oh no!',
//     author: 'Sarah Bennet',
//     year: 1965,
//     pages: 522,
// };
// console.log(book);


// Створи об’єкт car з вкладеним об’єктом engine (наприклад: type, power).
// const car = {
//     brand: "Bentley",
//     model: "Continental",
//     engine: {
//         type: "hybrid",
//         power: 635,
//     },
// };
// console.log(car);


// Створи об’єкт movie і додай метод getInfo(), який повертає рядок: "Title (Year)".
// const movie = {
//     title: "Ludwig",
//     year: 2024,
//     getInfo() {
//         return `${this.title} (${this.year})`;
//     },
// }
// console.log(movie.getInfo());


// Створи об’єкт settings з властивостями за замовчуванням: theme: "light", lang: "uk", notifications: true.
// const settings = {
//     theme: "light",
//     lang: "uk",
//     notifications: true
// }
// console.log(settings.lang);


// Створи об’єкт product з властивістю tags (масив рядків).
// const product = {
//     tags: [
//         "Apple iPhone 15",
//         "Apple iPad Air 11",
//         "Xiaomi Redmibook Pro 14"
//     ],
// };
// console.log(product.tags[1]);


// Створи об’єкт counter з властивістю value та методами inc() і dec() (змінюють value).
// const counter = {
//     value: 2500,
//     inc() {
//         return this.value += 1;
//     },
//     dec() {
//         return this.value -= 1;
//     }
// }
// console.log(counter.dec());


// Створи об’єкт point з x, y і методом move(dx, dy).
// const point = {
//     x: 45,
//     y: 15,
//     move(dx, dy) {
//         this.x += dx;
//         this.y += dy
//     },
// };
// point.move(10, -5)
// console.log(point.x, point.y);


// Створи об’єкт wallet з властивістю balance та методом add(amount) і pay(amount) (не дає піти в мінус).
// const wallet = {
//     balance: 1500,
//     add(amount) {
//         this.balance += amount;
//     },
//     pay(amount) {
//         if (this.balance >= amount) {
//             this.balance -= amount;
//         }
//     },
// }
// wallet.add(35);
// wallet.pay(200);
// console.log(wallet.balance);


// Створи об’єкт profile з властивостями firstName, lastName і геттером/методом, що повертає повне ім’я.
// const profile = {
//     firstName: "Oksana",
//     lastName: "Zalivan",
//     get fullName () {
//         return `${this.firstName} ${this.lastName}`;
//     },
// };
// console.log(profile.fullName);



// 2) Передача об’єкта або масиву в об’єкті (10)
// (вкладені структури: масиви/об’єкти всередині об’єкта)
// Створи user з властивістю skills (масив), додай 3 скіли.
// const user = {
//     skills: [],
// };
// user.skills.push("flexibility", "adaptability", "responsibility");
// console.log(user.skills[2]);


// Створи team з властивістю members (масив об’єктів {name, role}), мінімум 3 учасники.
// const team = {
//     members: [
//         {
//             name: "Thomas",
//             role: "goalkeeper",
//         },
//         {
//             name: "Edward",
//             role: "defender",
//         },
//         {
//             name: "James",
//             role: "attacker",
//         },
//     ],
// };
// console.log(team.members[1]);


// Створи order з властивістю items (масив об’єктів {title, price, qty}).
// const order = {
//     items: [
//         {
//             title: "cake",
//             price: 127,
//             qty: 5,
//         },
//         {
//             title: "candy",
//             price: 58,
//             qty: 49,
//         },
//         {
//             title: "chocolate",
//             price: 115,
//             qty: 8,
//         },
//     ],
// };
// console.log(order.items[0]);
// console.log(order.items[2].price * order.items[2].qty);


// Створи library з властивістю books (масив), де кожна книга — об’єкт.
// const library = {
//     books: [
//         {title: "Камінь. Ножиці. Папір", author: "Еліс Фіні"},
//         {title: "Йо-Ке-Ле-Ме-Не. 55 історій з дитинства", author: "Наталія Кальченко"},
//         {title: "The Pumpkin Spice Café", author: "Лорі Ґілмор"},
//         {title: "Як виміряти планету", author: "Катерина Кулик"},
//     ],
// };
// console.log(library.books);
// console.log(library.books[2]);


// Створи course з modules (масив об’єктів), кожен модуль має title і lessons (масив рядків).
// const course = {
//     modules: [
//         {
//             title: "HTML+CSS",
//             lessons: [
//                 "1. Основи HTML",
//                 "2. Вступ до CSS",
//                 "3. Блокова модель. Flexbox",
//                 "4. Декоративні ефекти",
//                 "5. Елементи форм. Доступність",
//                 "6. Адаптивний дизайн"
//             ],
//         },
//         {
//             title: "JavaScript",
//             lessons: [
//                 "1. Змінні та типи. Основи функцій",
//                 "2. Розгалуження і цикли",
//                 "3. Масиви і функції",
//                 "4. Об'єкти",
//                 "5. Перебираючі методи масивів",
//                 "6. ООП. Класи",
//                 "7. DOM. Події",
//                 "8. Події та бібліотеки",
//                 "9. Модульність коду і bundler Vite",
//                 "10. Асинхронний JavaScript і проміси",
//                 "11. HTTP-запити і взаємодія з бекендом",
//                 "12.Синтаксис async/await. Пагінація"
//             ],
//         },
//         {
//             title: "React.js+Next.js",
//             lessons: [
//                 "1. Основи TypeScript",
//                 "2. Компоненти та стан",
//                 "3. Форми та ефекти",
//                 "4. React Query та Formik",
//                 "5. Мутації з React Query",
//                 "6. Вступ до Next.js та маршрутизація",
//                 "7. Розширена маршрутизація",
//                 "8. Оптимізація продуктивності та керування станом",
//                 "9. Авторизація та безпека",
//                 "10. Додаткові матеріали"
//             ],
//         },
//     ],
// };
// console.log(course.modules[1]);


// Створи shop з categories (об’єкт), де ключі — назви категорій, значення — масив товарів.
// const shop = {
//     categories: {
//         products: ["cheese", "milk", "butter", "flour", "eggs"],
//         equipment: ["smartphone", "tablet", "laptop", "desktop", "printer"],
//     stationery: ["pencil", "pen", "scissors", "paper", "glue", "notebook"],
//         },
// };
// console.log(shop.categories.stationery);


// Створи company з вкладеним об’єктом address і вкладеним масивом departments.
// const company = {
//     address: {
//         country: "Ukraine",
//         city: "Kyiv",
//         street: "Shevchenka",
//     },
//     departments: ["IT", "Frontend", "Backend", "Fullstack"],
// };
// console.log(company.departments[3]);
// console.log(company.address.city);


// Створи playlist з tracks (масив об’єктів {artist, title, duration}).
// const playlist = {
//     tracks: [
//         {
//             artist: "Viviene Mort",
//             title: "Лети",
//             duration: 3.59
//         }
//     ],
// };
// console.log(playlist.tracks[0]);


// Створи post з comments (масив об’єктів {id, text, likes}).
// const post = {
//     comments: [
//         {
//             id: 5,
//             text: "It's my favorite summer",
//             likes: 1523,
//         }
//     ],
// };
// console.log(post.comments[0]);


// Створи trip з route (масив міст) і info (об’єкт з датами start, end).
// const trip = {
//     route: ["Lviv", "Odessa", "Rivne", "Korosten"],
//     info: {
//         start: 2025,
//         end: 2026,
//     },
// };
// console.log(trip.route);



// 3) Доступ до властивостей об’єкта (10)
// Є const user = { name: "Oksana", age: 25 }. Виведи name через крапку.
// const user = {
//     name: "Oksana",
//     age: 25
// };
// console.log(user.name);


// Те саме, але виведи age через квадратні дужки.
// const user = {
//     name: "Oksana",
//     age: 25
// };
// console.log(user['age']);


// Є const key = "name". Дістань значення user[key].
// const user = {
//     name: "Oksana",
//     age: 25
// };
// const key = "name";
// console.log(user[key]);


// Є const car = { engine: { power: 150 } }. Дістань power.
// const car = {
//     engine: {
//         power: 150,
//     },
// };
// console.log(car.engine.power);


// Є const post = { comments: [{ text: "Hi" }] }. Дістань текст першого коментаря.
// const post = {
//     comments: [
//         {
//             text: "Hi",
//         }
//     ],
// };
// console.log(post.comments[0].text);


// Є const team = { members: [{name:"A"},{name:"B"}] }. Дістань ім’я другого учасника.
// const team = {
//     members: [
//         {
//             name: "A"
//         },
//         {
//             name: "B"
//         }
//     ],
// };
// console.log(team.members[1].name);


// Є const settings = { theme: "dark" }. Спробуй прочитати settings.fontSize (що буде?).
// const settings = {
//     theme: "dark"
// };
// console.log(settings.fontSize);


// Є const obj = { "first-name": "Ann" }. Дістань значення правильно (через []).
// const obj = {
//     "first-name": "Ann",
// };
// console.log(obj["first-name"]);


// Є const product = { tags: ["new", "sale"] }. Дістань другий тег.
// const product = {
//     tags: ["new", "sale"],
// };
// console.log(product.tags[1]);


// Є const data = { user: null }. Безпечно дістань data.user?.name (optional chaining).
// const data = {
//     user: null,
// };
// console.log(data.user?.name);



// 4) Перезапис, додавання неіснуючої властивості, видалення (20)
// Є user.age = 18. Перезапиши на 19.
// const user = {
//     age: 18
// };
// user.age = 19;
// console.log(user.age);


// Є settings.theme = "light". Зміни на "dark".
// const settings = {
//     theme: "light",
// };
// settings.theme = "dark";
// console.log(settings.theme);


// Є product.price = 100. Збільш ціну на 20.
// const product = {
//     price: 100,
// };
// product.price = 120;
// console.log(product.price);


// Є counter.value = 0. Додай 1 (перезапис через +=).
// const counter = {
//     value: 0,
// };
// counter.value += 1;
// console.log(counter.value);


// Є car.year = 2020. Перезапиши на 2022.
// const car = {
//     year: 2020,
// };
// car.year = 2022;
// console.log(car.year);


// Є book.pages = 200. Зменши на 50.
// const book = {
//     pages: 200,
// };
// book.pages = book.pages - 50;
// console.log(book.pages);


// Є user.isAdmin = false. Перезапиши на true.
// const user = {
//     isAdmin: false,
// };
// user.isAdmin = true;
// console.log(user.isAdmin);


// Є profile.name = "Oksana". Перезапиши на "Oksana K.".
// const profile = {
//     name: "Oksana",
// };
// profile.name = "Oksana K.";
// console.log(profile.name);


// Додай нову властивість email в user.
// const user = {
//     name: "Oksana",
// };
// user.email = "oksana@gmail.com";
// console.log(user);


// Додай address (рядок) в company.
// const company = {};
// company.address = "Вулиця Дворецька 25";
// console.log(company.address);


// Додай discount в product (число).
// const product = {
//     price: 356,
// };
// product.discount = 20;
// console.log(product.discount);


// Додай isOnline в chatUser (boolean).
// const chatUser = {};
// chatUser.isOnline = true;
// console.log(chatUser.isOnline);


// Додай createdAt в post (рядок/дата).
// const post = {
//     title: "Мрії, які стають цілями",
// };
// post.createdAt = "25 грудня 2025";
// console.log(post);


// Додай level в game (число).
// const game = {};
// game.level = 8;
// console.log(game);


// Додай rating в movie (число).
// const movie = {};
// movie["rating"] = 5;
// console.log(movie["rating"]);


// Додай language в settings.
// const settings = {};
// settings.language = "uk";
// console.log(settings.language);


// Видали password з user.
// const user = {
//     nickname: "Ksyu",
//     password: "154GHfd25LNUc",
// };
// delete user.password;
// console.log(user);


// Видали temp з data.
// const data = {
//     name: "Oksana",
//     age: 25,
//     temp: true,
// };
// delete data.temp;
// console.log(data);


// Видали debug з config.
// const config = {
//     theme: "dark",
//     debug: true,
// };
// delete config.debug;
// console.log(config);


// Видали middleName з profile.
// const profile = {
//     firstName: "Oksana",
//     middleName: "Ivanivna",
//     lastName: "Petrenko",
// };
// delete profile.middleName;
// console.log(profile);


// Видали oldPrice з product.
// const product = {
//     price: 120,
//     oldPrice: 150,
// };
// delete product.oldPrice;
// console.log(product);


// Видали deprecatedField з apiResponse.
// const apiResponse = {
//     status: "ok",
//     data: [],
//     deprecatedField: true,
// };
// delete apiResponse.deprecatedField;
// console.log(apiResponse);



// 5) Обчислювальні властивості (computed properties) (10)
// Є const key = "name". Створи об’єкт { [key]: "Oksana" }.
// const key = "name";
// const obj = {
//     [key]: "Oksana",
// };
// console.log(obj);


// Є prefix = "item", id = 3. Створи ключ "item_3" зі значенням true.
// const prefix = "item";
// const id = 3;
// const obj = {
//     [prefix + "_" + id]: true
// };
// console.log(obj);


// Є масив ключів ["a","b","c"]. Створи об’єкт, де кожен ключ має значення свого індексу.
// const arr = ["a", "b", "c"];
// const obj = {
//     [arr[0]]: 0,
//     [arr[1]]: 1,
//     [arr[2]]: 2
// };
// console.log(obj);


// Функція makeObj(key, value) повертає об’єкт з computed key.
// function makeObj(key, value) {
//     return {
//         [key]: value,
//     };
// };
// const result = makeObj("user", "Oksana");
// console.log(result);


// Створи об’єкт stats, де ключі — "views", "likes", "comments" формуються з масиву.
// const arr = ["views", "likes", "comments"];
// const stats = {
//     [arr[0]]: 251,
//     [arr[1]]: 1684,
//     [arr[2]]: 15
// };
// console.log(stats);
//Ще один варіант розв'язання цього завдання.
// const stats = {};
// arr.forEach((key, index) => {
//     stats[key] = [251, 1684, 15][index];
// });


// Є field = "price". Додай/онови поле в product через product[field] = 100.
// const field = "price";
// const product = {
//     [field]: 85
// };
// product[field] = 100;
// console.log(product);


// Є lang = "uk". Створи dict, де ключ "hello_uk" має значення "Привіт".
// const lang = "uk";
// const dict = {
//     ["hello" + "_" + lang]: "Привіт"
// };
// console.log(dict);


// Є type = "success". Створи об’єкт повідомлення з ключем "isSuccess" (тип трансформуй).
// const type = "success";
// const obj = {
//     ["is" + type[0].toUpperCase() + type.slice(1)]: true
// };
// console.log(obj);


// Є date = "2025-12-20". Створи log з ключем date і значенням масив подій.
// const date = "2025-12-20";
// const log = {
//     [date]: ["Відеоконференція", "Презентація", "Ретроспектива"]
// };
// console.log(log);


// Зроби grouped, де ключі — перші літери слів з масиву ["cat","rabbit","dog"].
// const arr = ["cat", "rabbit", "dog"];
// const grouped = {
//     [arr[0].slice(0, 1)]: ["cat"],
//     [arr[1].slice(0, 1)]: ["rabbit"],
//     [arr[2].slice(0, 1)]: ["dog"]
// };
// console.log(grouped);



// 6) Перебір об’єкта через for...in (10)
// Є об’єкт user. Виведи в консоль усі ключі.
// const user = {
//     name: "Oksana",
//     age: 38
// };
// for (const i in user) {
//     console.log(`user[${i}]`);
// };


// Виведи всі значення.
// const user = {
//     name: "Oksana",
//     age: 38
// };
// for (const i in user) {
//     console.log(user[i]);
// };


// Виведи пари у форматі "key: value".
// const user = {
//     name: "Oksana",
//     age: 38
// };
// for (const i in user) {
//     console.log(`${i}:`, user[i]);
// };


// Порахуй кількість властивостей в об’єкті через for...in.
// const user = {
//     name: "Oksana",
//     age: 38
// };
// let count = 0;
// for (const key in user) {
//     count++;
// };
// console.log(count);


// Знайди суму всіх числових значень в об’єкті stats.
// const stats = {
//     views: 251,
//     likes: 1684,
//     comments: 15
// };
// let sum = 0;
// for (const key in stats) {
//     sum += stats[key];
// };
// console.log(sum);


// Створи масив усіх ключів через for...in.
// const stats = {
//     views: 251,
//     likes: 1684,
//     comments: 15
// };
// const arr = [];
// for (const key in stats) {
//     arr.push(key);
// };
// console.log(arr);


// Створи масив усіх значень через for...in.
// const stats = {
//     views: 251,
//     likes: 1684,
//     comments: 15
// };
// const arr = [];
// for (const key in stats) {
//     arr.push(stats[key]);
// };
// console.log(arr);


// Перевір, чи є в об’єкті хоч одне значення null (через for...in).
// const stats = {
//     views: 251,
//     likes: 1684,
//     comments: 15
// };
// let hasNull = false;
// for (const key in stats) {
//     if (stats[key] === null) {
//         hasNull = true;
//     }; 
// };
// console.log(hasNull);



// Скопіюй об’єкт у новий (простий shallow copy) через for...in.
// const user = {
//     name: "Oksana",
//     age: 38
// };
// const copy = {};
// for (const key in user) {
//     copy[key] = user[key];
// };
// console.log(copy);


// Створи filtered, залишивши тільки властивості, де значення — рядок.
const user = {
    name: "Oksana",
    age: 38
};
let filtered = {};
for (const key in user) {
    if (typeof user[key] === "string") {
        filtered[key] = user[key];
    };
};
console.log(filtered);


// Підказка: якщо треба уникати успадкованих ключів — перевіряй Object.hasOwn(obj, key).

// 7) Перетворення об’єкта на масив (10)
// Отримай масив ключів об’єкта user (через Object.keys).



// Отримай масив значень user (через Object.values).



// Отримай масив пар [key, value] (через Object.entries).



// Перетвори об’єкт prices у масив рядків "apple: 10" через Object.entries().map.



// З об’єкта scores зроби масив тільки чисел, відфільтруй > 50.



// З Object.entries(user) зроби масив тільки ключів, де значення boolean.



// Перетвори entries назад в об’єкт через Object.fromEntries.



// Є об’єкт cart (товар → кількість). Зроби масив об’єктів {product, qty}.



// Відсортуй Object.entries(stats) за значенням за спаданням.



// Зроби масив ключів, відсортований за алфавітом, і виведи.