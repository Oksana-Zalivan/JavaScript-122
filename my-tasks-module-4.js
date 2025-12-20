// 1) Створення об’єктів (10)

// Створи об’єкт user з властивостями: name, age, isAdmin.

const user = {
    name: 'Oksana',
    age:37,
    isAdmin: true
};
console.log(user);


// Створи об’єкт book з властивостями: title, author, year, pages.

// Створи об’єкт car з вкладеним об’єктом engine (наприклад: type, power).

// Створи об’єкт movie і додай метод getInfo(), який повертає рядок: "Title (Year)".

// Створи об’єкт settings з властивостями за замовчуванням: theme: "light", lang: "uk", notifications: true.

// Створи об’єкт product з властивістю tags (масив рядків).

// Створи об’єкт counter з властивістю value та методами inc() і dec() (змінюють value).

// Створи об’єкт point з x, y і методом move(dx, dy).

// Створи об’єкт wallet з властивістю balance та методом add(amount) і pay(amount) (не дає піти в мінус).

// Створи об’єкт profile з властивостями firstName, lastName і геттером/методом, що повертає повне ім’я.






// 2) Передача об’єкта або масиву в об’єкті (10)

// (вкладені структури: масиви/об’єкти всередині об’єкта)

// Створи user з властивістю skills (масив), додай 3 скіли.

// Створи team з властивістю members (масив об’єктів {name, role}), мінімум 3 учасники.

// Створи order з властивістю items (масив об’єктів {title, price, qty}).

// Створи library з властивістю books (масив), де кожна книга — об’єкт.

// Створи course з modules (масив об’єктів), кожен модуль має title і lessons (масив рядків).

// Створи shop з categories (об’єкт), де ключі — назви категорій, значення — масив товарів.

// Створи company з вкладеним об’єктом address і вкладеним масивом departments.

// Створи playlist з tracks (масив об’єктів {artist, title, duration}).

// Створи post з comments (масив об’єктів {id, text, likes}).

// Створи trip з route (масив міст) і info (об’єкт з датами start, end).

// 3) Доступ до властивостей об’єкта (10)

// Є const user = { name: "Oksana", age: 25 }. Виведи name через крапку.

// Те саме, але виведи age через квадратні дужки.

// Є const key = "name". Дістань значення user[key].

// Є const car = { engine: { power: 150 } }. Дістань power.

// Є const post = { comments: [{ text: "Hi" }] }. Дістань текст першого коментаря.

// Є const team = { members: [{name:"A"},{name:"B"}] }. Дістань ім’я другого учасника.

// Є const settings = { theme: "dark" }. Спробуй прочитати settings.fontSize (що буде?).

// Є const obj = { "first-name": "Ann" }. Дістань значення правильно (через []).

// Є const product = { tags: ["new", "sale"] }. Дістань другий тег.

// Є const data = { user: null }. Безпечно дістань data.user?.name (optional chaining).

// 4) Перезапис, додавання неіснуючої властивості, видалення (20)

// Є user.age = 18. Перезапиши на 19.

// Є settings.theme = "light". Зміни на "dark".

// Є product.price = 100. Збільш ціну на 20.

// Є counter.value = 0. Додай 1 (перезапис через +=).

// Є car.year = 2020. Перезапиши на 2022.

// Є book.pages = 200. Зменши на 50.

// Є user.isAdmin = false. Перезапиши на true.

// Є profile.name = "Oksana". Перезапиши на "Oksana K.".

// Додай нову властивість email в user.

// Додай address (рядок) в company.

// Додай discount в product (число).

// Додай isOnline в chatUser (boolean).

// Додай createdAt в post (рядок/дата).

// Додай level в game (число).

// Додай rating в movie (число).

// Додай language в settings.

// Видали password з user.

// Видали temp з data.

// Видали debug з config.

// Видали middleName з profile.

// Видали oldPrice з product.

// Видали deprecatedField з apiResponse.

// Підказка: для видалення використовуй delete obj.key.

// 5) Обчислювальні властивості (computed properties) (10)

// Є const key = "name". Створи об’єкт { [key]: "Oksana" }.

// Є prefix = "item", id = 3. Створи ключ "item_3" зі значенням true.

// Є масив ключів ["a","b","c"]. Створи об’єкт, де кожен ключ має значення свого індексу.

// Функція makeObj(key, value) повертає об’єкт з computed key.

// Створи об’єкт stats, де ключі — "views", "likes", "comments" формуються з масиву.

// Є field = "price". Додай/онови поле в product через product[field] = 100.

// Є lang = "uk". Створи dict, де ключ "hello_uk" має значення "Привіт".

// Є type = "success". Створи об’єкт повідомлення з ключем "isSuccess" (тип трансформуй).

// Є date = "2025-12-20". Створи log з ключем date і значенням масив подій.

// Зроби grouped, де ключі — перші літери слів з масиву ["cat","car","dog"].

// 6) Перебір об’єкта через for...in (10)

// Є об’єкт user. Виведи в консоль усі ключі.

// Виведи всі значення.

// Виведи пари у форматі "key: value".

// Порахуй кількість властивостей в об’єкті через for...in.

// Знайди суму всіх числових значень в об’єкті stats.

// Створи масив усіх ключів через for...in.

// Створи масив усіх значень через for...in.

// Перевір, чи є в об’єкті хоч одне значення null (через for...in).

// Скопіюй об’єкт у новий (простий shallow copy) через for...in.

// Створи filtered, залишивши тільки властивості, де значення — рядок.

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