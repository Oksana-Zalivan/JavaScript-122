// 1. 10 вправ по ітеруванню масиву (будь-яким способом)
// У цих завданнях можна використовувати будь-який цикл або метод ітерації: for, for...of, forEach, while тощо.

// Є масив чисел const numbers = [2, 5, 7, 10, 3];
// Пройдися по масиву та виведи в консоль кожен елемент.
// const numbers = [2, 5, 7, 10, 3];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


// Є масив чисел const numbers = [1, 4, 9, 16, 25];
// Пройдися по масиву й створи новий масив квадратних коренів цих чисел.
// const numbers = [1, 4, 9, 16, 25];
// const arr = [];
// for (let i = 0; i < numbers.length; i++) {
//     arr.push(Math.sqrt(numbers[i]));
// }
// console.log(arr);


// Є масив рядків ['apple', 'banana', 'kiwi'].
// Пройдися по масиву й виведи довжину кожного слова.
// const fruits = ['apple', 'banana', 'kiwi'];
// for (const fruit of fruits) {
//     console.log(fruit.length);
// }


// Є масив const nums = [10, -3, 5, -7, 0, 12];
// Пройдися по масиву й порахуй суму тільки додатних чисел.
// const nums = [10, -3, 5, -7, 0, 12];
// let sum = 0;
// for (let i = 0; i < nums.length; i++){
//     if (nums[i]>0) {
//         sum += nums[i];
//     }
// }
// console.log(sum);


// Є масив ['JS', 'is', 'awesome'].
// Пройдися по масиву й побудуй один рядок "JS is awesome".
// const arr = ['JS', 'is', 'awesome'];
// const message = arr.join(' ');
// console.log(message);


// Є масив const numbers = [3, 6, 9, 12, 15];
// Пройдися по масиву й створи новий масив, де кожен елемент помножений на 2.
// const numbers = [3, 6, 9, 12, 15];
// const newArr = [];
// for (let i = 0; i < numbers.length; i++){
//     newArr.push(numbers[i] * 2);
// }
// console.log(newArr);


// Є масив ['red', 'green', 'blue', 'yellow'];
// Пройдися по масиву й виведи елементи з їхніми індексами у форматі: "Index 0: red".
// const colors = ['red', 'green', 'blue', 'yellow'];
// for (let i = 0; i < colors.length; i++) {
//     console.log(`Index ${i}: ${colors[i]}`);
// }


// Є масив const prices = [100, 250, 50, 400];
// Пройдися по масиву й створи новий масив цін зі знижкою 20%.
// const prices = [100, 250, 50, 400];
// const discount = 20;
// const newPrices = [];
// for (let i = 0; i < prices.length; i++){
//     newPrices.push(prices[i] - (discount * prices[i] / 100));
// }
// console.log(newPrices);


// Є масив const mixed = [1, 'hello', true, 42, 'js'];
// Пройдися по масиву й створи новий масив тільки з рядками.
// const mixed = [1, 'hello', true, 42, 'js'];
// const arr = [];
// for (let i = 0; i < mixed.length; i++){
//     if (typeof mixed[i] === 'string') {
//         arr.push(mixed[i]);
//     }
// }
// console.log(arr);


// Є масив const nums = [5, 10, 15, 20, 25];
// Пройдися по масиву й знайди найбільше число (без Math.max).
// const nums = [5, 10, 15, 20, 25];
// let max = nums[0];
// for (let i = 0; i < nums.length; i++){
//     if (max < nums[i]) {
//         max = nums[i];
//     }
// }
// console.log(max);



// 2. 10 вправ з циклом for
// У всіх цих завданнях обов’язково використовуй звичайний for.

// Є масив const nums = [1, 2, 3, 4, 5];
// За допомогою for порахуй суму всіх елементів.
// const nums = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < nums.length; i++){
//     sum += nums[i];
// }
// console.log(sum);


// Є масив ['a', 'b', 'c', 'd'];
// За допомогою for створи новий масив, де кожен елемент буде "letter: a", "letter: b" і т.д.
// const arr = ['a', 'b', 'c', 'd'];
// const newArr = [];
// for (let i = 0; i < arr.length; i++){
//     newArr.push(`letter: ${arr[i]}`);
// }
// console.log(newArr);


// Є масив чисел. Напиши цикл for, який створить новий масив квадратів (num * num) чисел.
// const arr = [1, 5, 8, 4, 3];
// const newArr = [];
// for (let i = 0; i < arr.length; i++){
//     newArr.push(arr[i] ** 2);
// }
// console.log(newArr);


// Є масив const nums = [10, 20, 30, 40, 50];
// За допомогою for виведи кожен другий елемент (індекси 1, 3, ...).
// const nums = [10, 20, 30, 40, 50];
// const newArr = [];
// for (let i = 0; i < nums.length; i++){
//     if (i % 2 !== 0) {
//         newArr.push(nums[i]);
//     }
// }
// console.log(newArr);


// Є масив const nums = [5, 8, 13, 21, 34];
// За допомогою for знайди індекс числа 21 (не використовуй indexOf).
// const nums = [5, 8, 13, 21, 34];
// for (let i = 0; i < nums.length; i++){
//     if (nums[i] === 21) {
//         console.log(i);
//     }
// }


// Є масив const words = ['cat', 'dog', 'elephant', 'fox'];
// За допомогою for створи новий масив з довжинами слів.
// const words = ['cat', 'dog', 'elephant', 'fox'];
// const arr = [];
// for (let i = 0; i < words.length; i++){
//     arr.push(words[i].length);
// }
// console.log(arr);


// Є масив const nums = [2, 4, 6, 8, 10];
// За допомогою for створи новий масив, де кожне число буде рядком: "2px", "4px", ...
// const nums = [2, 4, 6, 8, 10];
// const arr = [];
// for (let i = 0; i < nums.length; i++){
//     arr.push(nums[i] + "px");
// }
// console.log(arr);


// Є масив const nums = [1, 10, 3, 7, 9];
// За допомогою for визнач, чи є в масиві хоча б одне число більше 8 (виведи true/false).
// const nums = [1, 10, 3, 7, 9];
// let res = false;
// for (let i = 0; i < nums.length; i++){
//     if (nums[i] > 8) {
//         res = true;
//     }
// }
// console.log(res);


// Є масив const nums = [1, 2, 3, 4, 5];
// За допомогою for створи новий масив, де елементи йдуть у зворотному порядку.
// const nums = [1, 2, 3, 4, 5];
// const arr = [];
// for (let i = nums.length - 1; i >= 0; i--){
//     arr.push(nums[i]);
// }
// console.log(arr);


// Є масив const nums = [3, 3, 3, 3];
// За допомогою for переконайся, що всі елементи однакові (виведи true/false).
// const nums = [3, 3, 3, 3];
// let res = true;
// for (let i = 0; i < nums.length; i++){
//     if (nums[i] !== nums[0]) {
//         res = false;
//         break;
//     }
// }
// console.log(res);



// 3. 10 вправ з циклом for...of
// У всіх цих завданнях обов’язково використовуй for...of.

// Є масив рядків. За допомогою for...of виведи кожен рядок у верхньому регістрі.
// const names = ['Ксюша', 'Оля', 'Марічка', 'Валентина'];
// const arr = [];
// for (const name of names) {
//     arr.push(name.toUpperCase());
// }
// console.log(arr);


// Є масив чисел. За допомогою for...of порахуй добуток всіх чисел.
// const nums = [5, 8, 4, 3, 7, 9];
// let sum = 1;
// for (const num of nums) {
//     sum *= num;
// }
// console.log(sum);


// Є масив ['js', 'html', 'css'];
// За допомогою for...of створи рядок "js, html, css" (можна без join).
// const arr = ['js', 'html', 'css'];
// let res = "";
// for (const item of arr) {
//     res += item + ", ";
// }
// res = res.slice(0, -2);
// console.log(res);


// Є масив const nums = [10, -5, 0, 7, -2];
// За допомогою for...of створи новий масив тільки з додатними числами.
// const nums = [10, -5, 0, 7, -2];
// const arr = [];
// for (const num of nums) {
//     if (num > 0) {
//         arr.push(num)
//     }
// }
// console.log(arr);


// Є масив рядків. За допомогою for...of знайди найдовше слово.
// const words = ['flower', 'pigeon', 'fox', 'gray', 'transformation'];
// let wordLength = '';
// for (const word of words) {
//     if (word.length > wordLength.length) {
//         wordLength = word;
//     }
// }
// console.log(wordLength);


// Є масив const bools = [true, true, false, true];
// За допомогою for...of перевір, чи є в масиві хоча б один false.
// const bools = [true, true, false, true];
// let res = false;
// for (const bool of bools) {
//     if (bool === false) {
//         res = true;
//         break;
//     }
// }
// console.log(res);


// Є масив const users = ['Olya', 'Max', 'Ira'];
// За допомогою for...of виведи повідомлення "Hello, Olya", "Hello, Max" і т.д.
// const users = ['Olya', 'Max', 'Ira'];
// const arr = [];
// for (const user of users) {
//     arr.push(`Hello, ${user}`,);
// }
// console.log(arr);


// Є масив чисел. За допомогою for...of створи новий масив, де кожне число буде змінено знаком (5 → -5, -3 → 3).
// const nums = [2, -8, 6, 3, -5, -4];
// const arr = [];
// for (const num of nums) {
//     arr.push(num * -1);
// }
// console.log(arr);


// Є масив const nums = [1, 2, 3, 4, 5, 6];
// За допомогою for...of створи новий масив тільки з парними числами.
// const nums = [1, 2, 3, 4, 5, 6];
// const arr = [];
// for (const num of nums) {
//     if (num % 2 === 0) {
//         arr.push(num);
//     }
// }
// console.log(arr);


// Є масив рядків. За допомогою for...of порахуй загальну кількість символів у всіх рядках.
// const words = ["Hello", "my", "dear", "friend"];
// let totalSymbols = 0;
// for (const word of words) {
//     totalSymbols += word.length;
// }
// console.log(totalSymbols);



// 4. 30 вправ по методах масиву
// Методи: join, slice, splice, concat, indexOf, lastIndexOf, split, includes, push, pop, shift, unshift, .length, length - 1.

// Є масив ['I', 'love', 'JS'].
// Використай join, щоб отримати рядок "I love JS".
// const arr = ['I', 'love', 'JS'];
// const message = arr.join(" ");
// console.log(message);


// Є масив ['apple', 'banana', 'orange', 'kiwi'];
// За допомогою slice створи новий масив тільки з ['banana', 'orange'].
// const fruits = ['apple', 'banana', 'orange', 'kiwi'];
// const arr = fruits.slice(1, 3);
// console.log(arr);


// Є масив ['a', 'b', 'c', 'd'];
// За допомогою splice видали елемент 'c'.
// const arr = ['a', 'b', 'c', 'd'];
// const newArr = arr.splice(2, 1);
// console.log(arr);


// Є масив ['red', 'green', 'blue']; та ['yellow', 'black'];
// Об’єднай їх в один масив за допомогою concat.
// const arr1 = ['red', 'green', 'blue'];
// const arr2 = ['yellow', 'black'];
// const colors = arr1.concat(arr2);
// console.log(colors);


// Є масив ['js', 'html', 'css', 'js'];
// За допомогою indexOf знайди перший індекс 'js'.
// const arr = ['js', 'html', 'css', 'js'];
// console.log(arr.indexOf('js'));


// Той самий масив ['js', 'html', 'css', 'js'];
// За допомогою lastIndexOf знайди останній індекс 'js'.
// const arr = ['js', 'html', 'css', 'js'];
// console.log(arr.lastIndexOf('js'));


// Є рядок "apple, banana, kiwi"
// Розбий його на масив фруктів за допомогою split.
// const fruits = "apple, banana, kiwi";
// const arr = fruits.split(",");
// console.log(arr);


// Є масив ['cat', 'dog', 'parrot'];
// За допомогою includes перевір, чи є в масиві 'dog'.
// const pets = ['cat', 'dog', 'parrot'];
// console.log(pets.includes('dog'));


// Є масив чисел. За допомогою push додай у кінець нове число й перевір змінену довжину.
// const nums = [5, 6, 8, 3, 1, 17, 9, 46];
// nums.push(35);
// console.log(nums.length);


// Є масив. За допомогою pop видали останній елемент і збережи його в змінну.
// const arr = [45, 18, 53, 7, 16, 28];
// let a = arr.pop();
// console.log(a);


// Є масив. За допомогою shift видали перший елемент і виведи його.
// const arr = [45, 18, 53, 7, 16, 28];
// console.log(arr.shift());


// Є масив. За допомогою unshift додай елемент на початок масиву та виведи нову довжину.
// const arr = [45, 18, 53, 7, 16, 28];
// arr.unshift(98);
// console.log(arr.length);


// Напиши код, який, використовуючи .length, виводить останній елемент масиву через індекс length - 1.
// const arr = [45, 18, 53, 7, 16, 83];
// console.log(arr[arr.length - 1]);


// Є масив ['a', 'b', 'c', 'd'];
// За допомогою slice створи копію всього масиву.
// const arr = ['a', 'b', 'c', 'd'];
// const arr2 = arr.slice(0);
// console.log(arr2);


// Є масив ['a', 'b', 'c', 'd'];
// За допомогою splice заміни 'b' і 'c' на 'x', 'y'.
// const arr = ['a', 'b', 'c', 'd'];
// arr.splice(1, 2, 'x', 'y');
// console.log(arr);


// Є два масиви nums1 = [1, 2] та nums2 = [3, 4, 5];
// Об’єднай у один масив і знайди його довжину.
// const nums1 = [1, 2];
// const nums2 = [3, 4, 5];
// const res = [].concat(nums1, nums2);
// console.log(res.length);


// Є рядок "JS is awesome"
// За допомогою split перетвори його в масив слів, а потім за допомогою join з’єднай назад через '-'.
// const message = "JS is awesome";
// const arr = message.split(" ");
// const res = arr.join("-");
// console.log(res);


// Є масив const nums = [1, 2, 3, 4, 5];
// За допомогою slice отримай останні два елементи масиву.
// const nums = [1, 2, 3, 4, 5];
// const arr = nums.slice(3);
// console.log(arr);


// Є масив const nums = [1, 2, 3, 4, 5];
// За допомогою splice встав у середину (після 2) число 999, не видаляючи елементи.
// const nums = [1, 2, 3, 4, 5];
// nums.splice(2, 0, 999);
// console.log(nums);


// Є масив ['html', 'css'];
// Послідовно використай push, щоб додати 'js', 'react', потім pop, щоб забрати останній елемент.
// Перевір, що залишилося.
// const arr = ['html', 'css'];
// arr.push('js', 'react');
// arr.pop();
// console.log(arr);


// Є масив ['apple', 'banana', 'orange'];
// За допомогою includes перевір, чи є 'kiwi', і якщо ні — додай його через push.
// const fruits = ['apple', 'banana', 'orange'];
// if (!fruits.includes('kiwi')) {
//     fruits.push('kiwi');
// }
// console.log(fruits);

// Є рядок "a-b-c-d"
// За допомогою split перетвори в масив, потім за допомогою splice видали 'c', і за допомогою join з’єднай назад.
// const alph = "a-b-c-d";
// const arr = alph.split("-");
// arr.splice(2, 1);
// console.log(arr);


// Є масив const nums = [1, 2, 3, 4, 5];
// Використай .length, щоб написати цикл, що виводить елементи у зворотному порядку, використовуючи індекс length - 1 - i.
// const nums = [1, 2, 3, 4, 5];
// const arr = [];
// for (let i = 0; i < nums.length; i++){
//     arr.push(nums[nums.length-1-i]);
// }
// console.log(arr);


// Є масив ['one', 'two'];
// За допомогою unshift додай 'zero' і перевір, що 'zero' тепер перший елемент.
// const arr = ['one', 'two'];
// arr.unshift('zero');
// console.log(arr[0]);


// Є масив ['x', 'y', 'z', 'y'];
// За допомогою indexOf і lastIndexOf знайди першу і останню позицію 'y'.
// const arr = ['x', 'y', 'z', 'y'];
// console.log(arr.indexOf('y'));
// console.log(arr.lastIndexOf('y'));


// Є масив const nums = [10, 20, 30];
// Напиши код, який видаляє останній елемент без pop, використовуючи тільки .length (зміни значення length).
// const nums = [10, 20, 30];
// nums.length = nums.length - 1;
// console.log(nums);


// Є масив ['red', 'green', 'blue'];
// За допомогою slice зроби новий масив без першого елемента.
// const colors = ['red', 'green', 'blue'];
// const arr = colors.slice(1);
// console.log(arr);


// Є масив рядків. За допомогою join створи рядок, у якому елементи будуть розділені переносом рядка ('\n').
// const arr = ["first", "second", "third", "fourth"];
// const res = arr.join('\n');
// console.log(res);


// Є масив ['a', 'b', 'c'];
// За допомогою splice видали всі елементи, починаючи з індексу 1.
// const arr = ['a', 'b', 'c'];
// arr.splice(1);
// console.log(arr);


// Є масив ['js', 'ts']; і рядок "node,react"
// Розбий рядок через split на масив і за допомогою concat об’єднай із першим масивом.
// const arr = ['js', 'ts'];
// const str = "node,react";
// const newStr = str.split(',');
// const res = arr.concat(newStr);
// console.log(res);



// 5. 10 вправ по псевдомасиву
// Псевдомасиви: arguments.
// Напиши функцію sum(), яка приймає будь-яку кількість аргументів і через arguments рахує їхню суму.
// function sum() {
//     const args = Array.from(arguments);
//     let total = 0;
//     for (const item of args) {
//         total += item;
//     }
//     console.log(total);
//     return total;
// }
// sum(5, 18, 62, 23);


// У функції logArgs(), виведи всі аргументи в консоль, перетворивши arguments на справжній масив (через Array.from або [...arguments]).
// function logArgs() {
//     const args = Array.from(arguments);
//     console.log(args);
//     return args;
// }
// logArgs(5, 12, 23, 48, 76);



// Напиши функцію, яка повертає масив тільки парних аргументів, використовуючи arguments і ітерацію.
// function foo() {
//     const args = Array.from(arguments);
//     const arr = [];
//     for (let i = 0; i < args.length; i++){
//         if (args[i] % 2 === 0) {
//             arr.push(args[i]);
//         }
//     }
//     console.log(arr);
//     return arr;
// }
// foo(4, 29, 57, 6, 13);


// Є псевдомасив: const pseudo = {0: "a", 1: "b", 2: "c", 3: "d", length: 4
// }; Створи справжній масив усіх елементів з цього псевдомасиву.
// const pseudo = {
//     0: "a",
//     1: "b",
//     2: "c",
//     3: "d",
//     length: 4
// };
// const arr = [];
// for (let i = 0; i < pseudo.length; i++){
//     arr.push(pseudo[i]);
// }
// console.log(arr);


// Напиши функцію lastElement(), яка приймає псевдомасив (наприклад):
// const nums = {0: 10, 1: 20, 2: 30, length: 3}; Функція повинна повернути останній елемент
// const nums = {
//     0: 10,
//     1: 20,
//     2: 30,
//     length: 3
// };
// function lastElement(pseudo) {
//     const lastIndex = pseudo.length - 1;
//     return pseudo[lastIndex];
// }
// console.log(lastElement(nums));


// Напиши функцію firstArg(), яка повертає перший аргумент з arguments або undefined, якщо аргументів немає.
// function firstArg() {
//     const args = Array.from(arguments);
//     if (args.length === 0) {
//         return undefined;
//     }
//     return args[0];
// }
// console.log(firstArg(81, 45, 67, 32));
// console.log(firstArg());


// Напиши функцію, яка за допомогою arguments рахує, скільки рядків було передано як аргументи.
// function foo() {
//     const args = Array.from(arguments);
//     let count = 0;
//     for (const item of args) {
//         if (typeof item === 'string') {
//             count++;
//         }
//     }
//     console.log(count);
//         return count;
// }
// foo(8, 'five', 13, 25, 'seven', 9);


// Напиши функцію, яка приймає будь-яку кількість аргументів і повертає масив довжин усіх рядкових аргументів.
// function foo() {
//     const args = Array.from(arguments);
//     const arr = [];
//     for (const item of args) {
//         if (typeof item === 'string') {
//             arr.push(item.length);
//         }
//     }
//     console.log(arr);
//     return arr;
// }
// foo("5157", "46546765", "21", "946");


// Напиши функцію, яка з arguments отримує останній аргумент, використовуючи arguments.length - 1.
// function lastElement() {
//     const args = Array.from(arguments);
//     const lastIndex = args.length - 1;
//     return args[lastIndex];
// }
// console.log(lastElement(15, 64, 3, 72, 11));


// Напиши функцію, яка за допомогою arguments перевіряє, чи є серед аргументів хоча б одне число більше 100.
// function foo() {
//     const args = Array.from(arguments);
//     for (let i = 0; i < args.length; i++){
//         if (args[i] > 100) {
//             console.log(true);
//             break;
//         }
//     }
// }
// foo(52, 34, 16, 9, 28, 751, 147);



// 6. 10 вправ по області видимості (scope)
// Створи змінну message у глобальній області, а всередині функції створи локальну змінну з таким самим ім’ям.
// Поясни, яке значення буде виведено всередині функції та зовні.
// const message = "Hello, Kseniya!";
// function foo() {
//     const message = "Bye, Kseniya!"
//     console.log(message);
// }
// console.log(message);


// Напиши приклад з let у блоці if (...) {}, де змінна буде недоступна поза блоком.
// if (true) {
//     let message = "Hello!";
//     console.log(message);
// }


// Створи змінну count у глобальній області.
// Напиши функцію, яка збільшує count на 1. Виклич її кілька разів і поясни, як працює доступ до змінної.
// const count = 1500;
// function foo(value) {
//     const total = value + 1;
//     console.log(total);
// }
// foo(count);


// Напиши код з циклом for, у якому лічильник оголошений через var.
// Перевір, чи буде змінна доступна поза циклом.
// const arr = [15, 6, 8, 42, 37];
// for (var i = 0; i < arr.length; i++){
//     const res = arr[i] + 1;
//     console.log(res);
// }
// console.log(i);


// Те саме, але з let. Поясни різницю.
// const arr = [15, 6, 8, 42, 37];
// for (let i = 0; i < arr.length; i++){
//     const res = arr[i] + 1;
//     console.log(res);
// }
// console.log(i);


// Напиши функцію всередині функції, де внутрішня функція має доступ до змінних зовнішньої (лексичне оточення).
// Опиши, що можна, а що не можна побачити.
// function foo1(a, b) {
//     const res1 = a + b;
//     function foo2(c, d) {
//         const res2 = c + d;
//         const total = res1 + res2;
//         console.log(total);
//     }
//     foo2(12, 7);
// }
// foo1(8, 6);


// Створи блок if (true) { ... } з змінними var, let, const всередині.
// Перевір, які з них будуть доступні зовні.
// if (true) {
//     var x = 45;
//     const y = 15;
//     let z = 25;
//     let res = x / y + z;
//     console.log(res);
// }
// console.log(x);


// Напиши приклад, де змінна з однаковою назвою існує в глобальній області, в функції та в блоці.
// Простеж, яке значення буде використано де.
// let x = 56;
// function foo(value) {
//     let x = 49;
//     const sum = value + x;
//     if (value > 50) {
//         let x = 5;
//         const res = value - x;
//         console.log(x);
//         console.log(res);
//     }
//     console.log(x);
//     console.log(sum);
// }
// foo(105);
// foo(12);
// console.log(x);


// Створи функцію, яка оголошує змінну без ключового слова (x = 10;).
// Перевір, де вона з’явиться (глобальна / локальна) й чому це погано.
// function foo(value) {
//     const x = 10;
//     let res = value * x;
//     console.log(res);
// }
// foo(25);
// foo(37);


// Напиши приклад з двома функціями, де одна функція викликає іншу, а друга намагається прочитати змінну з першої.
// Поясни, чи буде ця змінна доступна.
// function foo1(a) {
//     let c = 15;
//     const res1 = a - c;
//     function foo2(b) {
//         let d = 13;
//         const res2 = b + d;
//         console.log(res1 + res2);
//     }
//     foo2(4);
// }
// foo1(33);



// 7. 10 вправ по рекурсії
// Напиши рекурсивну функцію, яка рахує факторіал числа n.
// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return factorial(n - 1) * n;
// }
// console.log(factorial(5));
// console.log(factorial(1));
// console.log(factorial(20));


// Напиши рекурсивну функцію, яка рахує суму чисел від 1 до n.
// function sum(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return sum(n - 1) + n;
// }
// console.log(sum(9));
// console.log(sum(1));


// Напиши рекурсивну функцію, яка виводить числа від n до 1 (зворотний відлік).
// function foo(n) {
//     if (n < 1) {
//         return;
//         }
//     console.log(n);
//     foo(n - 1);
//     }
// (foo(6));


// Напиши рекурсивну функцію, яка обчислює n-те число Фібоначчі.
// function fib(n) {
//     if (n === 1 || n === 2) {
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(5));
// console.log(fib(8));


// Напиши рекурсивну функцію, яка приймає масив будь-якої вкладеності (наприклад, [1, [2, [3]], 4]) і рахує суму всіх чисел.
// function sumNested(arr) {
//     let total = 0;
//     for (const item of arr) {
//         if (Array.isArray(item)) {
//             total += sumNested(item);
//         } else {
//             total += item;
//         }
//     }
//     return total;
// }
// console.log(sumNested([1, [2, [3]], 4]));
// console.log(sumNested([5, [10, [15, 20]], 3]));


// Напиши рекурсивну функцію, яка приймає рядок і повертає його розвернуту версію (наприклад, "abc" → "cba").
// function reverseStr(str) {
//     if (str.length <= 1) {
//         return str;
//     }
//     return str[str.length - 1] + reverseStr(str.slice(0, -1));
// }
// console.log(reverseStr("abc"));
// console.log(reverseStr("hello"));
// console.log(reverseStr("Kseniya"));


// Напиши рекурсивну функцію, яка виводить усі елементи масиву по одному, не використовуючи циклів.
// function printArray(arr, index = 0) {
//     if (index >= arr.length) {
//         return;
//     }
// console.log(arr[index]);
//     printArray(arr, index + 1);
// }
// printArray([10, 20, 30, 40]);


// Напиши рекурсивну функцію, яка рахує кількість елементів у масиві (не використовуючи .length).
// function countElements(arr, index = 0) {
//     if (arr[index] === undefined) {
//         return 0;
//     }
//     return 1 + countElements(arr, index + 1);
// }
// console.log(countElements([10, 20, 30, 40]));
// console.log(countElements([]));
// console.log(countElements([5]));


// Напиши рекурсивну функцію, яка перевіряє, чи є в масиві хоча б одне парне число.
// function hasEven(arr, index = 0) {
//     if (index >= arr.length) {
//         return false;
//     }
//     if (arr[index] % 2 === 0) {
//         return true;
//     }
//     return hasEven(arr, index + 1);
// }
// const arr = [2, 5, 9, 7, 4];
// console.log(hasEven(arr));



// 8. 10 вправ по стеку викликів (call stack)
// Тут важливо зрозуміти порядок виконання функцій.
// Напиши три функції a(), b(), c(), де a викликає b, а b викликає c.
// Додай console.log всередині кожної та поясни, в якому порядку вони будуть з’являтися й як працює стек.
// function a() {
//     console.log("x1");
//     b();
//     console.log("y1");
// }
// function b() {
//     console.log("x2");
//     c();
//     console.log("y2");
// }
// function c() {
//     console.log("x3");
//     console.log("y3");
// }
// a();


// Створи функцію, яка викликає сама себе без базової умови (нескінченна рекурсія).
// Опиши, що станеться зі стеком викликів (теоретично, не запускаючи реально).
1



// Напиши функцію outer(), яка викликає inner(), а та викликає ще одну функцію deep().
// Усередині кожної функції виведи свій назву функції.
// Поясни, в якому порядку ці виклики потрапляють у стек.




// Напиши приклад, де одна функція викликає іншу з різними параметрами кілька разів.
// Поясни, як у стеку викликів зберігаються контексти кожного виклику.




// Створи рекурсивну функцію з лічильником глибини викликів (наприклад, параметр depth).
// На кожному кроці виводь "Depth: X".
// Поясни, як збільшується і зменшується стек.




// Напиши код з кількома вкладеними функціями та додай debugger; в одну з них (якби працювала DevTools).
// Теоретично поясни, яку інформацію про стек можна було б побачити.




// Напиши приклад з функціями f1, f2, f3, де f1 викликає f2, f2 викликає f3, а f3 кидає помилку через throw.
// Поясни, як помилка "підіймається" по стеку.




// Напиши приклад із рекурсивною функцією, яка зупиняється після певної глибини (наприклад, if (n === 0) return;).
// Поясни, як стек заповнюється й потім поступово "чиститься".




// Напиши дві функції, які викликають одна одну по черзі (взаємна рекурсія), наприклад fn1 → fn2 → fn1 → ...
// Поясни, чому без умови зупинки стек переповниться.




// Візьми будь-яку зі своїх рекурсивних функцій із попереднього блоку й напиши покроковий опис, що відбувається зі стеком викликів при конкретному значенні аргументу (наприклад, factorial(4)).